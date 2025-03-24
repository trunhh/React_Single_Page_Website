import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  return (
    <Navbar sticky="top" expand="lg" variant="dark" className="bg-primary bg-gradient-reverse px-2" expanded={expanded}>
      <Navbar.Toggle
        aria-controls="navbar-nav"
        onClick={() => setExpanded(expanded ? false : "expanded")}
      >
        {expanded ? <FaTimes /> : <FaBars />}
      </Navbar.Toggle>
      <Navbar.Collapse id="navbar-nav">
        <Nav 
          className="mx-auto nav-pills fw-bold text-uppercase"
          style={{
            "--bs-navbar-active-color": "rgb(var(--bs-secondary-rgb)",
            "--bs-nav-pills-link-active-bg": "white"
          }}
        >
          {[
            { to: "/", label: "Sản phẩm" },
            { to: "/specs", label: "Thông số kỹ thuật" },
            { to: "/details", label: "Chi tiết sản phẩm" },
            { to: "/contact", label: "Liên hệ" },
          ].map(({ to, label }) => (
            <Nav.Link key={to} as={NavLink} to={to} end className="px-3">
              {label}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
      <Button as={NavLink} to="/check-out" variant="outline-light border-0" className="position-relative rounded-circle">
        <FaShoppingCart />
        {cartItems.length > 0 && <span class="position-absolute top-0 end-0 badge rounded-pill bg-danger">
          {cartItems.length}
          <span class="visually-hidden">unread messages</span>
        </span>}
      </Button>
    </Navbar>
  );
};

export default NavigationBar;
