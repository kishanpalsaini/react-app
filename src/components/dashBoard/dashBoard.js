import React, { Component } from 'react';
import './dashBoard.css'

function dashBoard(){
    return(
       <div className="dash-board-wrapper">
           <ul className="list-unstyled dashboard-header">
            <li>PROJECT DASHBOARD</li>
            <li className="d-flex user-detail justify-content-center">
                <img src="https://s3.amazonaws.com/assets.materialup.com/users/pictures/000/876/564/thumb/shalini.jpg?1604299805" />
                <div>
                    <p>Kp Saini</p>
                    <span>UI/UX DESIGNER</span>
                </div>
            </li>
           </ul>
       </div>
    );
}

export default dashBoard;