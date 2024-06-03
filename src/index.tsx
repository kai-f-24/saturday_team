import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// pages
import Entry from './frontend/pages/entry';
import Home from './frontend/pages/home'
import Project from './frontend/pages/project';
import Profile from './frontend/pages/profile';
import ProjectInfo from './frontend/pages/projectInfo';
import CreateProject from './frontend/pages/createProject';
import EditProject from './frontend/pages/editProject';
import EditProfile from './frontend/pages/editProfile';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      <Routes>
        {/* http:/localhost:3000/entryなどでアクセスできる */}
        <Route path='/' element={ <Home /> }/>
        <Route path='/entry' element={ <Entry /> }/>
        <Route path='/profile' element={ <Profile /> }/>
        <Route path='/project' element={ <Project /> }/>
        <Route path='/projectInfo' element={ <ProjectInfo /> }/>
        <Route path='/createProject' element={ <CreateProject /> }/>
        <Route path='/editProject' element={ <EditProject /> }/>
        <Route path='/editProfile' element={ <EditProfile /> }/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
