
import ReactDOM from 'react-dom/client';
import App from './App';
//import Admin from './pages/Admin';
//import  Routes  from './Routes'
import './index.css';
//import UploadPage from './pages/UploadPage'
//import Navigation from './Navigation';
//import Indices from './pages/Indices';
import reportWebVitals from './reportWebVitals';
//import {BrowserRouter as Router,Route} from 'react-router-dom'
//import Dashboard from './pages/Dashboard';
//import Content from './Content';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
    //<Router>
      //<Dashboard/>
        
    //</Router>
 
);
//content start.

//const content =ReactDOM.createRoot(document.getElementById('content'));
//content.render(
 //<React.StrictMode>
   // <Content/>
  //</React.StrictMode>
//)

//content end


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();