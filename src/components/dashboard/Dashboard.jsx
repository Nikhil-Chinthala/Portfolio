import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title" >Welcome To My Portfolio!!</h2>
      <p >"Here you'll discover my projects, technical skills, achievements and work"</p>
      <Link to="/home" className="enter-button">
        To Know More 
      </Link>
    </div>
  )
}

export default Dashboard
