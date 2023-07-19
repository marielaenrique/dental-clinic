import {useContext, useEffect} from 'react';
import {Outlet} from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {useLocation, useNavigate} from 'react-router-dom';
import {ContextGlobal} from './Components/utils/global.context.jsx';

function App() {
  
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    location.pathname === "/" && navigate("/home");
  }, []);
  
  const {themeState} = useContext(ContextGlobal);
  
  return (
    <div className={themeState ? "dark" : undefined}>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;