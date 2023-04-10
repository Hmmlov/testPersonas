import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ content }) => {
  const navigate = useNavigate();
  
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div className="wrapper">

      <div className="leftside-menu">

        <a href="#" className="logo text-center logo-light">
          <span className="logo-lg">
            <img src="./src/assets/img/logocolegio.png" alt="" height="40" /> <span>Luis Abraham Elias Ghezzi</span>
          </span>
          <span className="logo-sm">
            <img src="./src/assets/images/logo_sm.png" alt="" height="16" />
          </span>
        </a>

        <a href="index.html" className="logo text-center logo-dark">
          <span className="logo-lg">
            <img src="./src/assets/images/logo-dark.png" alt="" height="16" />
          </span>
          <span className="logo-sm">
            <img src="./src/assets/images/logo_sm_dark.png" alt="" height="16" />
          </span>
        </a>

        <div className="h-100" id="leftside-menu-container" data-simplebar="">

          <ul className="side-nav">

            {/* <li className="side-nav-title side-nav-item">Navigation</li> */}

            {/* <li className="side-nav-item">
              <a data-bs-toggle="collapse" href="#sidebarDashboards" aria-expanded="false"
                aria-controls="sidebarDashboards" className="side-nav-link">
                <i className="uil-home-alt"></i>
                <span className="badge bg-success float-end">4</span>
                <span> Dashboards </span>
              </a>
              <div className="collapse" id="sidebarDashboards">
                <ul className="side-nav-second-level">
                  <li>
                    <a href="dashboard-analytics.html">Analytics</a>
                  </li>
                  <li>
                    <a href="dashboard-crm.html">CRM</a>
                  </li>
                  <li>
                    <a href="index.html">Ecommerce</a>
                  </li>
                  <li>
                    <a href="dashboard-projects.html">Projects</a>
                  </li>
                </ul>
              </div>
            </li> */}

            <li className="side-nav-title side-nav-item">Acciones</li>

           {/*  <li className="side-nav-item">
              <Link to={"/clients"} className="side-nav-link">
                <i className="uil-calender"></i>
                <span> Clientes </span>
              </Link>
            </li> */}

            <li className="side-nav-item">
              <Link to={"/home"} className="side-nav-link">
                <i className="uil-calender"></i>
                <span> Home </span>
              </Link>
            </li>

            {/* <li className="side-nav-item">
              <Link to={"/person"} className="side-nav-link">
                <i className="uil-calender"></i>
                <span> Personas </span>
              </Link>
            </li> */}

            <li className="side-nav-item">
              <a data-bs-toggle="collapse" href="#sidebarAgregar" aria-expanded="false" aria-controls="sidebarAgregar"
                className="side-nav-link">
                <i className="uil-envelope"></i>
                <span> Agregar </span>
                <span className="menu-arrow"></span>
              </a>
              <div className="collapse" id="sidebarAgregar">
                <ul className="side-nav-second-level">
                    <li>
                      <Link to={"/person"}>Personas</Link>
                    </li>

                </ul>
              </div>
            </li>

          </ul>

          <div className="clearfix"></div>

        </div>

      </div>

      <div className="content-page">
        <div className="content">
          <div className="navbar-custom">
            <ul className="list-unstyled topbar-menu float-end mb-0">

              <li className="dropdown notification-list">
                <a className="nav-link dropdown-toggle nav-user arrow-none me-0" data-bs-toggle="dropdown" href="#"
                  role="button" aria-haspopup="false" aria-expanded="false">
                  <span className="account-user-avatar">
                    <img src="./src/assets/images/users/avatar-1.jpg" alt="user-image" className="rounded-circle" />
                  </span>
                  <span>
                    <span className="account-user-name">Soeng Souy</span>
                    <span className="account-position">Founder</span>
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                  <div className=" dropdown-header noti-title">
                    <h6 className="text-overflow m-0">Welcome !</h6>
                  </div>

                  <Link onClick={logout} to={"/"} className="dropdown-item notify-item">
                    <i className="mdi mdi-logout me-1"></i>
                    <span>Logout</span>
                  </Link>

                </div>
              </li>

            </ul>
            <button className="button-menu-mobile open-left">
              <i className="mdi mdi-menu"></i>
            </button>
            <div className="app-search dropdown d-none d-lg-block">
              <form>
                <div className="input-group">
                  <input type="text" className="form-control dropdown-toggle" placeholder="Search..." id="top-search" />
                  <span className="mdi mdi-magnify search-icon"></span>
                  <button className="input-group-text btn-primary" type="submit">Search</button>
                </div>
              </form>

            </div>
          </div>

          <div className="container-fluid">
            {content}
          </div>

        </div>

      </div>


    </div>
  )
}

export default Navbar