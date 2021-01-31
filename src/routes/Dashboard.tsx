import './Dashboard.scss';
import data from '../assets/data';
import { User } from '../models/user';
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

function Dashboard() {

  return (
    <div className="dashboard pb-5">
      {/* Active Projects */}
      <div className="d-flex">
        <div className="p-4 w-50 pb-0">
          <div className="card p-4 workflow-section">
            <div className="card-title text-start">
              <h2 className="display-6">Dashboard</h2>
              <p className="lead text-muted">Search and select organization personnel.</p>
              <select className="form-select mb-3" aria-label="Select Project">
                <option selected>All Projects</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div className="mb-0">
                <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                {/* https://hypeserver.github.io/react-date-range/ */}
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 w-100 pb-0 text-start">
          <div className="card p-4 workflow-section">
            <div className="card-title text-start">
              <h2 className="display-6">Report</h2>
            </div>
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

      <div className="p-4 pb-0">
        <div className="card p-4 workflow-section">
          <div className="card-title text-start">
            <h2 className="display-6">Workflow</h2>
            <p className="lead text-muted">Search and select organization personnel, and manage roles.</p>
          </div>

          {/* Active Progress/ KANBAN */}
          <div className="workflow-board">
            {
              stages.map(stage => {
                return <div className="workflow-column">
                  <h6>{stage.title}</h6>

                  {/* Active Tickets */}
                  <div className="workflow-column-body">
                    {
                      users.map(user => {
                        return <div className="card text-dark bg-light">
                          <div className="card-header">{user.name}</div>
                          <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
