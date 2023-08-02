import React from "react";
import AdminHeader from "./Adminhead";
import Side from "./sidebar";


function AdminUser(){
    return(
        <div className="user-main-one">
            <AdminHeader/>
            <Side/>
            
<div className="user-one">
    <div className="headline-one">
<ul  >
    <li id="head-id">ID</li>
    <li id="head-name">Name</li>
    <li id="head-mail">Email</li>
    <li id="head-num">Number</li>
    <li id="head-age">Age</li>
    <li id="head-stat">Status</li>
    <li id="head-act">Action</li>

</ul>

</div>




<div className="users-one">

<ul >

    <li>01</li>

    <li>Sanjay</li>

    <li>sanjay@123</li>

    <li>9606606864</li>

    <li>21</li>

    <li style={{color:'green'}}>online</li>

    <li><button style={{color:'blue'}}>view</button> <button style={{color:'red'}}>delete</button></li>

</ul></div>

<div className="users-one">

<ul >

    <li>02</li>

    <li>Manju</li>

    <li>manju@123</li>

    <li>9870660686</li>

    <li>22</li>

    <li style={{color:'green'}}>online</li>

    <li><button style={{color:'blue'}}>view</button> <button style={{color:'red'}}>delete</button></li>

</ul></div>




<div className="users-one">

<ul >

    <li>03</li>

    <li>Rajesh</li>

    <li>rajesh@123</li>

    <li>9900602520</li>

    <li>23</li>

    <li style={{color:'green'}}>online</li>

    <li><button style={{color:'blue'}}>view</button> <button style={{color:'red'}}>delete</button></li>

</ul></div>
<div className="users-one">

<ul >

    <li>04</li>

    <li>Venuk</li>

    <li>Venuk@123</li>

    <li>9611956159</li>

    <li>21</li>

    <li style={{color:'green'}}>online</li>

    <li><button style={{color:'blue'}}>view</button> <button style={{color:'red'}}>delete</button></li>

</ul></div>



<div className="users-one">

<ul >

    <li>05</li>

    <li>Vinaya</li>

    <li>vinay@123</li>

    <li>7899046456</li>

    <li>21</li>

    <li style={{color:'green'}}>online</li>

    <li><button style={{color:'blue'}}>view</button> <button style={{color:'red'}}>delete</button></li>

</ul></div>



<div className="users-one">

<ul >

    <li>06</li>

    <li>Danush</li>

    <li>danus@12</li>

    <li>9686647612</li>

    <li>22</li>

    <li style={{color:'red'}}>offline</li>

    <li><button style={{color:'blue'}}>view</button> <button style={{color:'red'}}>delete</button></li>

</ul></div>



<div className="users-one">

<ul >

    <li>07</li>

    <li>Goutam</li>

    <li>Goutam@</li>

    <li>9490625473</li>

    <li>25</li>

    <li style={{color:'red'}}>offline</li>

    <li><button style={{color:'blue'}}>view</button> <button style={{color:'red'}}>delete</button></li>

</ul></div>





</div>





        </div>

    )

}export default AdminUser;

