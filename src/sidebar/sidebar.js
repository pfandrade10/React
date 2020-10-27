import React from "react";
import {Nav} from "react-bootstrap";
import './sidebar.css';

function SideMenu(){
  return (
    <>
    <Nav className="col-md-3 d-none d-md-block bg-dark sidebar">
        <div className="sidebar-sticky"></div>
    <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
        Disabled
        </Nav.Link>
    </Nav.Item>
    </Nav>
</>
  );
}

export default SideMenu;