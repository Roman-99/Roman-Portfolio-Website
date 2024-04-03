import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark navbar-custom gradient-custom">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <LinkContainer to="/">
            <a className="nav-link">
              Home
            </a>
            </LinkContainer>
            <LinkContainer to="/About">
            <a className="nav-link">
              About
            </a>
            </LinkContainer>
            <LinkContainer to="/Projects">
            <a className="nav-link">
              Projects
            </a>
            </LinkContainer>
            <LinkContainer to="/Contact">
            <a className="nav-link">
              Contact Info
            </a>
            </LinkContainer>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
