
import {Link} from 'react-router-dom'
import SearchField from './SearchField'

let Header = () => {
  return (
    <nav className="navbar sticky-top shadow navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Foto.</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/random">Random</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/search/:search">Search</Link>
            </li> */}


          </ul>
          <SearchField />
        </div>
      </div>
    </nav>
  )
}

export default Header