import React from 'react';
import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
//import Posts from './components/posts';
import Post from './components/post';
import PostsList from './components/postsList';
import EditForm from './components/editForm';
import CreateForm from './components/createForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <Router>
    <Navbar/>
    <Container>
    <Switch>
    <Route path = "/home" component={Home} />
    <Route path = "/create" component={CreateForm} />
    <Route path = "/edit/:id?" component={EditForm} />
    <Route path = "/posts/:id" component={Post} />
    </Switch>
    </Container>
    </Router>
  );
}

export default App;
