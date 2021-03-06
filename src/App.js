import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListBoardComponent from './components/ListBoardComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateBoardComponent from './components/CreateBoardComponent';
import ReadBoardComponent from './components/ReadBoardComponent';
import DashBoardComponent from './components/DashboardComponent';
import LoginComponent from './components/LoginComponent';
import resumeData from './resources/resumeData';

function App() {
  return (
      <div>
        <Router>
          <HeaderComponent/>
              <div className = "container">
                <Switch>
                  <Route path = "/" exact component = {DashBoardComponent}></Route>
                  <Route path ="/login" component = {LoginComponent}></Route>
                  <Route path = "/list" component = {ListBoardComponent}></Route>
                  <Route path ="/board" component = {ListBoardComponent}></Route>
                  <Route path="/create-board" component = {CreateBoardComponent}></Route>
                  <Route path="/read/:no" component = {ReadBoardComponent}></Route>
                </Switch>
              </div>
              <FooterComponent/>   
        </Router>
      </div>
  );
}

export default App;
