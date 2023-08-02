import "./styles.css";
import "./men1.css";
import "./kannadamen.css";
import "./components/shedul/profilestyle.css";




import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Profile from "./components/Register/profile";
import Finlogin from "./components/Login/FinLogin";
import TermsAndConditions from "./components/Terms/TermsAndConditions ";
import PrivacyPolicy from "./components/Privacy/PrivacyPolicy";
import MenuHome from "./components/Menupage/Home";
import User from "./components/MenuUsers/User";
import Subscribe from "./components/Subscribes/Subscribe";
import Preferences from "./components/Prefrences/Preferences";
import WorkMen from "./components/Prefrences/Work/WorkMen";
import WorkWomen from "./components/Prefrences/Work/WorkWomen";
import EntMen from "./components/Prefrences/Entertainment/EntMen";
import EntWomen from "./components/Prefrences/Entertainment/EntWomen";
import AgeMen from "./components/Prefrences/Age/AgeMen";
import AgeWomen from "./components/Prefrences/Age/AgeWomen";
import PlayMen from "./components/Prefrences/Play/PlayMen";
import PlayWomen from "./components/Prefrences/Play/PlayWomen";
import RideMen from "./components/Prefrences/Ride & Travell/RideMen";
import RideWomen from "./components/Prefrences/Ride & Travell/RideWomen";
import Men1 from "./components/Prefrences/Movie1/Men1";
import Women1 from "./components/Prefrences/Movie1/Women1";
import KannadaMen from "./components/Languages/Kannada/KannadaMen";
import KannadaWomen from "./components/Languages/Kannada/KannadaWomen";
import TeluguMen from "./components/Languages/Telugu/TeluguMen";
import TeluguWomen from "./components/Languages/Telugu/TeluguWomen";
import MalayalamMen from "./components/Languages/Malayalam/MalayalamMen";
import MalayalamWomen from "./components/Languages/Malayalam/MalayalamWomen";
import HindiMen from "./components/Languages/Hindi/HindiMen";
import HindiWomen from "./components/Languages/Hindi/HindiWomen";
import TamilMen from "./components/Languages/Tamil/TamilMen";
import TamilWomen from "./components/Languages/Tamil/TamilWomen";
import EnglishMen from "./components/Languages/English/EnglishMen";
import EnglishWomen from "./components/Languages/English/EnglishWomen";
import Language from "./components/Languages/MainFile/Language";
import Location from "./components/shedul/location";
import Chat from "./components/shedul/chat";
import Locationprofile from "./components/shedul/Locationprofile";
import ProfileLocation from "./components/location/Time";
import Cupon from "./components/Subscribes/cupon";
import BonuspointsComponent from "./components/Bonus/bonus";
import UserProfile from "./components/IndividualUser/UserProfile";
import UserProfileCard from "./components/IndividualUser/UserProfileCard";
import Dashbord from "./components/adminnew/Dashbord";
import AdminUser from "./components/adminnew/Adminuser";
import Notifications from "./components/adminnew/notification";
import Settings from "./components/adminnew/settings";
import Stats from "./components/adminnew/stats";
import Admin from "./components/adminnew/Admin";
import Referals from "./components/Referals/Refreral";











function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Finlogin" element={<Finlogin />} />
          <Route path="/termsAndConditions" element={<TermsAndConditions />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/menuHome" element={<MenuHome />} />
          <Route path="/user" element={<User />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="WorkMen" element={<WorkMen />} />
          <Route path="WorkWomen" element={<WorkWomen />} />
          <Route path="EntMen" element={<EntMen />} />
          <Route path="EntWomen" element={<EntWomen />} />
          <Route path="AgeMen" element={<AgeMen />} />
          <Route path="AgeWomen" element={<AgeWomen />} />
          <Route path="PlayMen" element={<PlayMen />} />
          <Route path="PlayWomen" element={<PlayWomen />} />
          <Route path="RideMen" element={<RideMen />} />
          <Route path="RideWomen" element={<RideWomen />} />
          <Route path="men1" element={<Men1 />} />
          <Route path="women1" element={<Women1 />} />
          <Route path="KannadaMen" element={<KannadaMen />} />
          <Route path="KannadaWomen" element={<KannadaWomen />} />
          <Route path="EnglishWomen" element={<EnglishWomen />} />
          <Route path="EnglishMen" element={<EnglishMen />} />
          <Route path="Language" element={<Language />} />
          <Route path="TeluguMen" element={<TeluguMen />} />
          <Route path="TeluguWomen" element={<TeluguWomen />} />
          <Route path="TamilMen" element={<TamilMen />} />
          <Route path="TamilWomen" element={<TamilWomen />} />
          <Route path="HindiMen" element={<HindiMen />} />
          <Route path="HindiWomen" element={<HindiWomen />} />
          <Route path="MalayalamMen" element={<MalayalamMen />} />
          <Route path="MalayalamWomen" element={<MalayalamWomen />} />
          <Route path="Location" element={<Location/>} />
          <Route path="Locationprofile" element={<Locationprofile/>} />
          <Route path="Chat" element={<Chat/>} />
          <Route path="ProfileLocation" element={<ProfileLocation/>} />
          <Route path="cupon" element={<Cupon/>} />
          <Route path="BonuspointsComponent" element={<BonuspointsComponent/>} />

          <Route path="Referals" element={<Referals/>} />

         <Route path='UserProfile' element={<UserProfile/>}/>
         <Route path='UserProfileCard' element={<UserProfileCard/>}/>


         <Route path='Dashbord' element={<Dashbord/>}/>
         <Route path='Adminapp' element={<Admin/>}/>
         <Route path='AdminUser' element={<AdminUser/>}/>
        <Route path='Notifications' element={<Notifications/>}/>  
         <Route path='Settings' element={<Settings/>}/>
         <Route path='Dashbord' element={<Dashbord/>}/>
         <Route path='Stats' element={<Stats/>}/>
      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
