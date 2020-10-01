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

function Home() {
  const [userData, setUserData] = useState(randomUsers)

  function nameCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <div className="card">
      <h1>My Peeps</h1>
      {/* {console.log(users)} */}
      <ul>
        {userData.map((user) => {
          return (
            <Link to={"/data/" + user.id}>
              <li
                id={user.id}
                key={user.id}
                onClick={function (e) {
                  // console.log(userData[e.target.id])
                }}
              >
                <img src={user.picture.thumbnail}></img>
                {nameCase(user.name.first)} {nameCase(user.name.last)}
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default Home
