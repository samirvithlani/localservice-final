import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const path = window.location.pathname;
  const serviceProviderLinks = [
    {
      name: "ADD SERVICE",
      link: "/serviceprovider/addservice",
    },
    {
      name: "MY SERVICES",
      link: "/serviceprovider/servicelist",
    }
  ];

  const userLinks = [
    {
      name: "USER DASHBOARD",
      link: "/user/dashboard",
    },
    {
      name: "BOOK SERVICE",
      link: "/user/bookservice",
    },
    {
      name: "MY BOOKINGS",
      link: "/user/mybookings",
    }
  ];

  return (
    <div className="sidebar" data-image="../assets/img/sidebar-5.jpg">
      {/*
  Tip 1: You can change the color of the sidebar using: data-color="purple | blue | green | orange | red"

  Tip 2: you can also add an image using data-image tag
    */}
      <div className="sidebar-wrapper">
        <div className="logo">
          <a href="http://www.creative-tim.com" className="simple-text">
            Creative Tim
          </a>
        </div>
        <ul className="nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/serviceprovider/dashboard">
              <i className="nc-icon nc-chart-pie-35" />
              <p>Dashboard</p>
            </Link>
          </li>

          {path.includes("serviceprovider")
            ? serviceProviderLinks.map((serpro) => {
                return (
                  <li>
                    <Link className="nav-link" to={serpro.link}>
                      <i className="nc-icon nc-circle-09" />
                      <p>{serpro.name}</p>
                    </Link>
                  </li>
                );
              })
            : userLinks.map((user) => {
                return (
                  <li>
                    <Link className="nav-link" to={user.link}>
                      <i className="nc-icon nc-circle-09" />
                      <p>{user.name}</p>
                    </Link>
                  </li>
                );
              })}
        </ul>
      </div>
      <div
        className="sidebar-background"
        style={{ backgroundImage: "url(../assets/img/sidebar-5.jpg)" }}
      />
    </div>
  );
};
