import React from "react";
import AdminHeader from "./Adminhead";
import Side from "./sidebar";

import "./App.css";

function Admin(){
    return(
        <div>

<AdminHeader/>
       <Side/>
   
{/*      
        
      <BrowserRouter>
     
      <Routes>
      
        <Route path='AdminUser' element={<AdminUser/>}/>
        <Route path='Notifications' element={<Notifications/>}/>  
         <Route path='Settings' element={<Settings/>}/>
         <Route path='Dashbord' element={<Dashbord/>}/>
         <Route path='Stats' element={<Stats/>}/>
       
        

      </Routes>
      </BrowserRouter>
  */}

        </div>
    )
}

export default Admin;