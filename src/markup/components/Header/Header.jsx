import React from 'react';
import logo from '../../../assets/images/logo.png';
import { useAuth } from '../../../Context/AuthContext';
// Import the login service to access the logout function
import loginService from '../../../services/login.service';
import { Link } from 'react-router-dom';

function Header() {
  const { isLogged, setIsLogged, employee } = useAuth();
  console.log(useAuth());

   // Log out event handler function
   const logOut = () => {
    // Call the logout function from the login service 
    loginService.logOut();
    // Set the isLogged state to false 
    setIsLogged(false);
  }

  return (
    <div>
      <header className="main-header header-style-one">
        <div className="header-top">
          <div className="auto-container">
            <div className="inner-container">
              <div className="left-column">
                <div className="text">Enjoy the Beso while we fix your car</div>
                <div className="office-hour">Monday - Saturday 7:00AM - 6:00PM</div>
              </div>
              <div className="right-column">
                {isLogged ? (
                  <div className="link-btn">
                    <div className="phone-number">
                      <strong>Welcome {employee?.employee_first_name}</strong>
                    </div>
                  </div>
                ) : (
                  <div className="phone-number">
                    Schedule Appointment: <strong>1800 456 7890</strong>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="header-upper">
          <div className="auto-container">
            <div className="inner-container">
              <div className="logo-box">
                <div className="logo">
                  <a href="/"><img src={logo} alt="Logo" /></a>
                </div>
              </div>
              <div className="right-column">
                <div className="nav-outer">
                  <div className="mobile-nav-toggler">
                    <img src="assets/images/icons/icon-bar.png" alt="Mobile Nav" />
                  </div>
                  <nav className="main-menu navbar-expand-md navbar-light">
                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                      <ul className="navigation">
                        <li className="dropdown"><a href="/">Home</a></li>
                        <li className="dropdown"><a href="/about">About Us</a></li>
                        <li className="dropdown"><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="search-btn"></div>
                {isLogged? (
                  <div className="link-btn">
                    <Link to="/" className="theme-btn btn-style-one blue" onClick={logOut} >Log out</Link>
                  </div>
                ) : (
                  <div className="link-btn">
                    <Link to="/login" className="theme-btn btn-style-one">Login</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* ... (rest of the code remains the same, just change 'class' to 'className') ... */}
      </header>
    </div>
  );
}

export default Header;