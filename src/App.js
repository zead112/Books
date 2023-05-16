import {  Navigate, Outlet } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./component/Footer/Footer";

import Nav from "./component/Nav/Nav";

import AppContextProvider from './AppContext';


function App() {
  return (
    
    <div className="App">
      
    <AppContextProvider>
    <Nav/>
    
<Navigate to="/Books/Bookslist"/>
<Outlet/>
  <Footer/>
    </AppContextProvider>
    </div>
  );
}

export default App;