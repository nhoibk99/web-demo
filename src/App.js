import './App.css';
import logo from './images/avatar.jpg'; 
function App() {
  return (
    <div className="app">
        <section className="header">
          <div className="header-menu">
            <div className="header-icon">
              <i className="fa fa-th fa-lg" aria-hidden="true"></i>
            </div>
            <a><span>All Services</span></a>
          </div>

          <div className="header-info">
            <a href="#" className="header-avatar" >
              <img src="images/avatar.jpg" alt="" className="header-avatar" />
              {/* <img src={logo} alt="" className="header-avatar" /> */}
            </a>
            <span> Ngo Thanh Liem</span>
            <i className="fa fa-caret-down" aria-hidden="true"></i>
          </div>
        </section>
        <div className="container">
          <div className="tab">
            <div className="tab-header">
              <div className="tab-item focus">
                <i className="fa fa-user" aria-hidden="true"></i>
                <a href="#">Account Profile</a>
              </div>
              <div className="tab-item">
                <i className="fa fa-bank" aria-hidden="true"></i>
                <a href="#">Update Bank Detail</a>
              </div>
              <div className="tab-item">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <a href="#">Inbox</a>
              </div>
            </div>
            <div className="tab-content">
              <div className="container-left">
                <div className="tab-wall">
                  <div className="tab-avatar"><img src={logo} alt="" className="tab-avatar" /></div>
                  <div className="name">Howdycandidate</div>
                  <div className="thb">THB 565.000</div>
                </div>
                <div className="tab-communication">
                  <span>Communication Details</span>
                  <div className="tab-form">
                    <span>Mobile Number</span>
                    <input type="number" className="tab-input" placeholder="*********98765"/>
                  </div>
                  <div className="tab-form">
                    <span>Language</span>
                    <input type="number" className="tab-input" placeholder="Singapore"/>
                  </div>
                </div>
              </div>
              <div className="tab-detail">
                <span>Acount Detail</span>
                <div className="tab-detail-item lighter">
                  <div className="item-attribute">
                    <span>Name</span>
                    <span>:</span>
                  </div>
                  <div className="item-info">
                    <span>howdycandidate</span>
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="tab-detail-item">
                <div className="item-attribute">
                    <span>First Name</span>
                    <span>:</span>
                  </div>
                  <div className="item-info">
                    <span>howdycandidate</span>
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="tab-detail-item lighter">
                <div className="item-attribute">
                    <span>Date of Birth</span>
                    <span>:</span>
                  </div>
                  <div className="item-info">
                    <span>12/10/1999</span>
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="tab-detail-item">
                <div className="item-attribute">
                    <span>Password</span>
                    <span>:</span>
                  </div>
                  <div className="item-info">
                    <a href="#">Change Password</a>
                  </div>
                </div>
                <div className="tab-detail-item lighter">
                <div className="item-attribute">
                    <span>Country</span>
                    <span>:</span>
                  </div>
                  <div className="item-info">
                    <span>Chile</span>
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="tab-detail-item">
                <div className="item-attribute">
                    <span>Currency</span>
                    <span>:</span>
                  </div>
                  <div className="item-info">
                    <span>THB</span>
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="tab-detail-item lighter">
                <div className="item-attribute">
                    <span>Last Name</span>
                    <span>:</span>
                  </div>
                  <div className="item-info">
                    <span>pewpew</span>
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="tab-detail-item">
                <div className="item-attribute">
                    <span>E-Mail</span>
                    <span>:</span>
                  </div>
                  <div className="item-info">
                    <span>email@example.com</span>
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="tab-detail-item lighter">
                <div className="item-attribute">
                    <span>Gender</span>
                    <span>:</span>
                  </div>
                  <div className="item-info">
                    <span>Male</span>
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-address">
              <div>
                <span>Home Address</span>
                <div className="tab-form">
                  <span>Address</span>
                  <textarea className="tab-area" ></textarea>
                </div>
              </div>
              <div>
                <div className="tab-form">
                  <span>Town/City</span>
                  <input type="number" className="tab-input" placeholder="Town/City"/>
                </div>
                <div className="tab-form">
                  <span>Postal Code</span>
                  <input type="number" className="tab-input" placeholder="60000"/>
                </div>
              </div>
            </div>
            <div className="tab-footer">
              <span>Would you like to get the latest promos, updates, and offers?</span>
              <div className="tab-confirm">
                <input type="checkbox" id="confirm" value="yes"/>
                <label htmlFor="confirm"> Yes. Send me the latest promotions, updates and offers.</label>
              </div>
              <div className="tab-button">
                <div className="btn btn-Save">Save Change</div>
                <div className="btn btn-Cancel">Cancel</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
