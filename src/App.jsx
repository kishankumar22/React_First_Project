import Header from "./Components/header"
import {BrowserRouter as Router ,Route ,Routes,Navigate} from "react-router-dom"
import Registration from "./Components/Registration";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
/>


// import ShowData from "./Components/ShowData";

import './App.css';
import Login from "./Components/Login";
import IndexPage from "./Components/IndexPage";
import Contact from "./Components/Contact";
import AddNotification from "./Components/AddNotification";
import About from "./Components/About";
import Services from "./Components/Services";
  
function App() {  


  return (
    <>
    <Router>
      <Routes>
      
      <Route path="/" element=
     
      { <ProtectedRoute><IndexPage /> </ProtectedRoute>} />
     
        
        <Route path="/registration" element={<Registration />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/addNotification" element={<AddNotification />}/>
      </Routes>
    </Router>
      {/* <Header />  
      <Registration />
      <Login/> */}
      </>
  )
}

export default App;

export const ProtectedRoute=({ children })=>{
  const getuser= localStorage.getItem("loggedInUser");
  if(getuser){
    return children;
  }
  else{  
    return <Navigate to={"/login"} />
  }
};
