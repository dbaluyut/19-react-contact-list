import React, { useState } from "react"

import "./App.css"
import { BrowserRouter as Router, useParams, Link } from "react-router-dom"
import randomUsers from "./randomUsers.json"

function UserDetails(props) {
  const { id } = useParams()

  const [userData, setUserData] = useState(randomUsers)
  function nameCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  //need to get user by id
  let user = randomUsers.filter(function (item) {
    if (item.id == id) {
      return item
    }
  })
  return (
    <div>
      <div className="card user" id={user[0].id}>
        <div class="img-area">
          {/* on click needs to route to home */}
          <Link to="/">
            <div className="back-btn">
              <i class="fas fa-arrow-left"></i>
            </div>
          </Link>
          <img src={user[0].picture.large}></img>
        </div>
        <li>
          <i class="fas fa-user"></i>
          {nameCase(user[0].name.first)} {nameCase(user[0].name.last)}
        </li>
        <li>
          <i class="fas fa-envelope"></i>
          {user[0].email}
        </li>
        <li>
          <i class="fas fa-mobile"></i>
          {user[0].phone ?? user[0].cell}
        </li>
        <li>
          <i class="fas fa-globe-americas"></i>
          {nameCase(user[0].location.city)}, {nameCase(user[0].location.state)}
        </li>
      </div>
    </div>
  )
  // <div>
  //   <div className="card user" id={user.id}>
  //     <div class="img-area">
  //       {/* on click needs to route to home */}
  //       <Link to="/">
  //         <div className="back-btn">
  //           <i class="fas fa-arrow-left"></i>
  //         </div>
  //       </Link>
  //       <img src={user.picture.large}></img>
  //     </div>
  //     <li>
  //       <i class="fas fa-user"></i>
  //       {nameCase(user.name.first)} {nameCase(user.name.last)}
  //     </li>
  //     <li>
  //       <i class="fas fa-envelope"></i>
  //       {user.email}
  //     </li>
  //     <li>
  //       <i class="fas fa-mobile"></i>
  //       {user.phone ?? user.cell}
  //     </li>
  //     <li>
  //       <i class="fas fa-globe-americas"></i>
  //       {nameCase(user.location.city)}, {nameCase(user.location.state)}
  //     </li>
  //   </div>
  // </div>
}

export default UserDetails
