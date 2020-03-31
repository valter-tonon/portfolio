import React from 'react';
import { ToastContainer } from 'react-toastify'
import { BrowserRouter} from 'react-router-dom'
import SideBar from './components/sidebar';
import Routes from  './routes'

import GlobalStyles from '../src/components/Styles/global';


function App() {
  return (
    <BrowserRouter> 
     <SideBar/>
    <GlobalStyles/>
    <ToastContainer autoClose={5000}/>
    <Routes/>
    
    
    
        
    </BrowserRouter>
  );
}

export default App;
