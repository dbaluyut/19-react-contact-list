import React, { useState, useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useParams,
} from "react-router-dom"
import randomUsers from "./randomUsers.json"

function UserDetails() {
  const [userData, setUserData] = useState(randomUsers)
  function nameCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <div className="card">
      <div class="img-area">
        <div className="back-btn"></div>
        <img src={userData[0].picture.large}></img>
      </div>
      <li>test</li>
      <li>test</li>
      <li>test</li>
    </div>
  )
}

export default UserDetails
