import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-white border-bottom">
        <div className="container pt-2 pb-2  ">
          <a className="navbar-brand 	d-none d-sm-block" href="#" >
            <img
              src="https://cdn.icon-icons.com/icons2/2699/PNG/512/airbnb_logo_icon_170605.png"
              alt="Logo"
              width="30"
              height="32"
              className="d-inline-block align-text-top"
            />
            <span className="logo-text  ms-1">airbnb</span>
          </a>
          <a className="navbar-brand 	d-block d-sm-none" href="#" ><img className="sub ms-3" src="https://cdn-icons-png.flaticon.com/128/130/130882.png"></img></a>
          <div className="d-flex flex-row-reverse 	d-none d-sm-block">
          <div className="p-2 btn btnb align-self-center ">Became a host</div>
          <div className="p-2 btn btnb ps-3 pe-3 me-2 align-self-center"> <i className="ri-global-line"></i></div>
           
           
            <div className="p-2 btn btna border-1 shadow ">
              <div className="row">
                <div className="col-6 align-self-center">
                  <i className="ri-menu-line "></i>
                </div>
                <div className="col-6 ps-0 align-self-center">
                  <svg
                    className="car "
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                  >
                    <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                  </svg>
                </div>
              </div>
            </div>
           
           
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
