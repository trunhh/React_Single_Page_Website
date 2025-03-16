import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styling/coloring.css';
const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  return (
    <Navbar sticky="top" expand="lg" variant="dark" className="bg-gradient-top" expanded={expanded}>
      <Container>
        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        >
          {expanded ? <FaTimes /> : <FaBars />}
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto nav-pills fw-bold text-uppercase">
            {[
              { to: "/", label: "Sản phẩm" },
              { to: "/specs", label: "Thông số kỹ thuật" },
              { to: "/details", label: "Chi tiết sản phẩm" },
              { to: "/contact", label: "Liên hệ" },
              { to: "/partners", label: "Đối tác" },
              { to: "/services", label: "Dịch vụ quản lý lưu trú ASM" },
            ].map(({ to, label }) => (
              <Nav.Link as={NavLink} to={to} end className="px-3"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "white" : undefined,
                  color: isActive ? "darkOrange" : undefined
                })}
              >
                {label}
              </Nav.Link>

            ))}
          </Nav>
        </Navbar.Collapse>
        <Button variant="outline-light border-0" className="rounded-circle" onClick={() => navigate("/check-out")}>
          <FaShoppingCart />
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
