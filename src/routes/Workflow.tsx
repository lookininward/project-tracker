import './Workflow.scss';
import { useSelector } from "react-redux";
import { useFirestoreConnect, useFirestore } from "react-redux-firebase";
import { Ticket } from '../models/ticket';
import SVGStory from '../components/svg/Story';
import SVGFeature from '../components/svg/Feature';
import SVGBug from '../components/svg/Bug';
import SVGChore from '../components/svg/Chore';
import { STAGES } from '../constants/stages';

function Workflow() {
  useFirestoreConnect({
    collection: "/tickets",
    storeAs: "tickets"
  });

  const tickets = useSelector((state: any) => state.firestore.data.tickets);

  const firestore = useFirestore();

  const deleteTicket = async (ticketID: any) => {
    return firestore.collection('/tickets').doc(ticketID).delete();
  };

  return (
    <div className="dashboard pb-5">

      {/* Quick Status */}
      <div className="d-flex">
        <div className="p-4 w-100 pb-0 text-start">
          <div className="card p-2 workflow-section">
            <div className="d-flex justify-content-center">
              <p className="d-flex align-items-center m-0 me-5"><SVGStory classNames="story me-2" /> 23 Tickets Completed</p>
              <p className="d-flex align-items-center m-0 me-5"><SVGFeature classNames="feature me-2" /> 12 Features</p>
              <p className="d-flex align-items-center m-0 me-5"><SVGBug classNames="bug me-2" /> 8 Bugs</p>
              <p className="d-flex align-items-center m-0 me-5"><SVGChore classNames="me-2" /> 3 Chores</p>
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Board */}
      <div className="workflow-board-wrapper ps-4 pe-4">
        <div className="workflow-board  p-4 workflow-section">
          {
            STAGES.map((stage: any) => {
              return <div key={stage.ID} className="workflow-column">
                <h6 className="text-start">{stage.LABEL}</h6>
                <div className="workflow-column-body">
                  {
                    tickets &&
                    Object.entries(tickets).map((item: any) => {
                      const id = item[0];
                      const ticket = item[1];
                      return new Ticket({
                        id,
                        category: ticket.category,
                        title: ticket.title,
                        color: ticket.color,
                        // owners: ticket.owners,
                        stage: ticket.stage,
                      })
                    }).filter((ticket: any) => ticket.stage === stage.LABEL).map((ticket: any) => {
                      return <div key={ticket.id} className="card text-dark bg-light" data-bs-toggle="modal" data-bs-target={`#modal-${ticket.id}`} style={{ borderLeft: `6px solid ${ticket.color}` }}>
                        <div className="card-body">
                          <p className="card-text">{ticket.title}</p>
                        </div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                          <div className="ticket-id">
                            {
                              ticket.category === 'feature' &&
                              <SVGFeature classNames="feature me-2" />
                            }
                            {
                              ticket.category === 'bug' &&
                              <SVGBug classNames="bug me-2" />
                            }
                            {
                              ticket.category === 'chore' &&
                              <SVGChore classNames="me-2" />
                            }
                              #{ticket.id.slice(0, 4)}
                          </div>
                          {ticket.id.slice(0, 4)}
                        </div>

                        <div className="modal fade" id={`modal-${ticket.id}`} aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{ticket.title}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                {ticket.description || 'Please add a description...'}

                                <button className="btn btn-danger"
                                  onClick={() => deleteTicket(ticket.id)}
                                >
                                  Delete
                                  </button>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    })
                  }
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Workflow;
