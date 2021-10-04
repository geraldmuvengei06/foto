import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './pages/List';
import Search from './pages/Search';
import Random from './pages/Random';
import ViewImage from './pages/ViewImage';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import notfoundimg from './notfoundimg.png';
// import { Nav, Navbar, NavDropdown, Container, FormControl, Button, Form } from 'react-bootstrap'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Routes className="content">
            <Route path="/" element={<List />}></Route>
            <Route path="/search/:search" element={<Search />}></Route>
            <Route path="/random" element={<Random />}></Route>
            <Route path="/foto/:id" element={ <ViewImage /> }></Route>
            <Route path="*" element={<NotFound />}></Route>

          </Routes>
        </Router>
      </div>
    )
  }
}

let NotFound = () => {
  return (
    <Container>
      <div class="text-center">
        <img className="img-fluid" src={notfoundimg} alt="page not found" style={{'max-height': '300px'}} />
      </div>
    </Container>
  )
}

export default App;
