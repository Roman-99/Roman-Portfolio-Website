import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom gradient-custom">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse d-flex justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav navbar-right">
          <LinkContainer to="/">
            <li className="nav-item active">
              <a className="nav-link">Home</a>
            </li>
          </LinkContainer>
          <LinkContainer to="/About">
            <li className="nav-item">
              <a className="nav-link">About</a>
            </li>
          </LinkContainer>
          <LinkContainer to="/Projects">
            <li className="nav-item">
              <a className="nav-link">Projects</a>
            </li>
          </LinkContainer>
          <LinkContainer to="/Contact">
            <li className="nav-item">
              <a className="nav-link">Contact Info</a>
            </li>
          </LinkContainer>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
