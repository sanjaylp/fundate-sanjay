import React from 'react';

import "./Adminhead.css";
import Side from './sidebar';




function AdminHeader() {

  return (

    <div>
    
    <div className='admin-main-div-one'>


      <div className='admin-container-one'>

        <div className='admin-span-one'>

        <div className="admin-photo-one">




<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNjm343NNiVWCDHBkoxWT5eYE5BTNHxmnZUQMWvpex&s" />




</div>

         <span className='admin-lama-one'>Admin</span>

         

         <span className='admin-input-one'><input placeholder='Search..' type='text' name='' id=''></input></span>


        <a href='Notifications'> <span className='admin-bell-one'><i class="fa fa-bell-o"></i></span></a>


   

          <span></span>

         </div>

      </div>

<div class="clear"></div>
    </div>
    </div>


  )

}




export default AdminHeader;