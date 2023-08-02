import React from "react";
import { Link } from "react-router-dom";


function Side(){
    const handleClick = () => {

        alert("Are you sure you want to logout");

       
    }
    return(
        <div className="Sid-main-one">
            <div className="sid-min-one">
           
              
                <ul style={{listStyle:'none'}} >
               
               
                  

                  <li id="min-main-one">Main</li>
                
           <a id="dash-one" href="Dashbord"> <li ><i id="min-dash-one"  class="fa fa-dashboard"></i> Dashbord</li></a>
               <li id="min-main"> list</li>
           
               
               <a id="use-one" href="AdminUser"> <li><i id="min-dash-one" class='fa fa-user-plus'></i>Users</li></a>
                <li id="min-main">Usefull</li>
              
                <a href="Stats"><li>  <i id="min-dash-one" class="fa fa-bar-chart"></i>stats</li></a>
                
               <a id="note-one" href="Notifications"> <li><i id="min-dash-one" class='fa fa-bell'></i>Notifications</li></a>
                <li id="min-main">Settings</li>
             
                <a href="User"><li> <i id="min-dash-one" class='fa fa-address-book'></i>Profile</li></a>
               
                <a onClick={handleClick} href="FinLogin"><li> <i id="min-dash-one" class="fa fa-sign-out"></i>Logout</li></a>
                </ul>
            </div>

        </div>
    )
}
export default Side;