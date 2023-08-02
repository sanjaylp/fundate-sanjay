import React from "react";
import "./Dash.css";
import AdminHeader from "./Adminhead";
import Side from "./sidebar";
function Dashbord(){
    return(
        <div className="dash-main-one" >
            <AdminHeader/>
            <Side/>
         {/* <img src="https://trbahadurpur.com/wp-content/uploads/2022/09/188-scaled.jpg" alt=""/> */}
            <div className="dash-main-one">
                <div className="people-one">
                <i class='fa fa-users'></i>
                <p>People</p>
                </div>
                <div className="revenue-one">
                <i class="fa fa-rupee"></i>
                <p>Revenue</p>

                </div>
            </div>
        </div>
    )
}
export default Dashbord;