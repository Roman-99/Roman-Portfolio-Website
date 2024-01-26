import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark gradient-custom">
      <a className="navbar-brand" href="#">
        <img
          src="/docs/4.0/assets/brand/bootstrap-solid.svg"
          width="30"
          height="30"
          alt=""
        />
      </a>
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
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
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
              <a className="nav-link" href="#">Projects</a>
            </li>
          </LinkContainer>
          <LinkContainer to="/Contact">
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Info</a>
            </li>
          </LinkContainer>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
