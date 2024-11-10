import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          ></a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2024 All rights reserved by the creator
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <FaTwitter />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <FaInstagram />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <FaFacebookSquare />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
