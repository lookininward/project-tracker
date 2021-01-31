import './Dashboard.scss';
import data from '../assets/data';
import { User } from '../models/user';
import { Ticket } from '../models/ticket';
import SVGStory from '../components/svg/Story';
import SVGFeature from '../components/svg/Feature';
import SVGBug from '../components/svg/Bug';
import SVGChore from '../components/svg/Chore';

const stages = [
  {
    id: 'a',
    title: 'Unscheduled',
  },
  {
    id: 'z',
    title: 'Ready for Development',
  },
  {
    id: 'b',
    title: 'In Progress',
  },
  {
    id: 'v',
    title: 'Ready for Review',
  },
  {
    id: 'c',
    title: 'Complete'
  },
];

const users = data['users'].map(user => new User({
  id: user.id,
  name: user.name,
  email: user.email,
  role: user.role,
}));

const tickets = data['tickets'].map(ticket => new Ticket({
  id: ticket.id,
  category: ticket.category,
  title: ticket.title,
  color: ticket.color,
  // owners: ticket.owners,
  stage: ticket.stage,
}));

function Dashboard() {

  return (
    <div className="dashboard pb-5">
      {/* Active Projects */}
      <div className="d-flex">
        <div className="p-4 w-50 pb-0">
          <div className="card p-4 workflow-section">
            <div className="card-title text-start">
              <h2 className="display-6 mb-3">Dashboard</h2>
              {/* <p className="lead text-muted">Manage your daily workflow.</p> */}
              <select className="form-select mb-3" aria-label="Select Project">
                <option selected>All Projects</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div className="mb-3">
                <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                {/* https://hypeserver.github.io/react-date-range/ */}
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 w-100 pb-0 text-start">
          <div className="card p-4 workflow-section">
            <div>
              <div className="d-flex">
                <p className="lead d-flex align-items-center me-5"><SVGStory classNames="story me-2" /> 23 Tickets Completed</p>
                <p className="lead d-flex align-items-center me-5"><SVGFeature classNames="feature me-2" /> 12 Features</p>
                <p className="lead d-flex align-items-center me-5"><SVGBug classNames="bug me-2" /> 8 Bugs</p>
                <p className="lead d-flex align-items-center me-5"><SVGChore classNames="me-2" /> 3 Chores</p>
              </div>
              Chart of Averages<br />
            </div>
          </div>
        </div>
      </div>

      <div className="workflow-board-wrapper p-4 pb-0">
        <div className="card p-4 workflow-section">
          {/* Active Progress/ KANBAN */}
          <div className="workflow-board">
            {
              stages.map(stage => {
                return <div className="workflow-column">
                  <h6 className="text-start">{stage.title}</h6>
                  {/* Active Tickets */}
                  <div className="workflow-column-body">
                    {
                      tickets.filter(ticket => ticket.stage === stage.title).map(ticket => {
                        return <div className="card text-dark bg-light" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ borderLeft: `6px solid ${ticket.color}` }}>
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

                          <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title" id="exampleModalLabel">{ticket.title}</h5>
                                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                  ...
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
    </div>
  )
}

export default Dashboard;
