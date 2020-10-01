import React, { useState, useEffect } from "react"
import "./App.css"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useParams,
} from "react-router-dom"
import randomUsers from "./randomUsers.json"
import UserDetails from "./UserDetails"
import Home from "./Home"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/data/:id">
          <UserDetails />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
