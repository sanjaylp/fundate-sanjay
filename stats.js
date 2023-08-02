import React from "react";
import "./stat.css";
import AdminHeader from "./Adminhead";
import Side from "./sidebar";

function Stats() {
    return (
        <div class="user-stat-one">
          <AdminHeader/>
          <Side/>
      
          <img className ="user-image-one"src="statsimg.png"/>
        </div>
    )
}
export default Stats;