import React from "react";
import "./notification.css"
import AdminHeader from "./Adminhead";
import Side from "./sidebar";

function Notifications(){

    return(
      
        
        <div className="note-main-one">
              <AdminHeader/>
              <Side/>
           <p id="notif-one">(4)Notifications</p> 
            <b>Today</b>
            <div className="note-sub-one">
            <img src="sl.png"></img>
           <span> <p id="note-name-one"> Sanjay LP  changed his password</p>
           <p id="note-time-one">9:05 am</p>
           </span>
            </div>
           
            <div className="note-sub-one">
            <img src="rj.png"></img>
            <span>
                <p id="note-name-one">Rajesh M  login failed three times</p>
                <p id="note-time-one">9:00 pm</p>
            </span>
            </div>

            <div className="note-sub-one">
            <img src="ps.png"/>
          <span>
                  <p id="note-name-one">Prashant S  changed his profile picture</p>
                  <p id="note-time-one">just now</p>
          </span> 
            </div>
            <b id="yest-one">Yesterday</b>
            <div className="note-sub-one">
            <img src="vk.png"></img>
           <span>
                    <p id="note-name-one">venu k changed his password</p>
                   <p id="note-time-one">5:35 pm</p>
           </span>
            </div>
        </div>
    )
}
export default Notifications;