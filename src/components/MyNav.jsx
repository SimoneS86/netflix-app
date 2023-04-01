import avatar from "../assets/media/avatar.png";
import logo from "../assets/media/netflix_logo.png";
const MyNav = () => {
      return (
  
        <nav className="navbar navbar-expand-lg px-4 bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src={logo} alt="netflix_logo" width="100px" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 me-auto mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">TV Shows</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">Movies</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">Recently Added</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">My List</a>
                </li>
              </ul>
              <button className="bg-transparent text-light border-0 me-2" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
              <button className="bg-transparent text-light border-0 me-2">KIDS</button>
              <button className="bg-transparent text-light border-0 me-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                </svg>
              </button>
              <div className="nav-item dropdown bg-transparent text-light border-0 me-3">
                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img src={avatar} width="35px" height="35px" alt="logo" /></a>
                <ul className="dropdown-menu bg-dark dropdown-menu-lg-end">
                  <li><a className="dropdown-item text-light" href="profile.html">Edit Profile</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item text-light" href="account.html">Account</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      );
    
  };

  export default MyNav