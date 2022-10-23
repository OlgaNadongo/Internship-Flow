import React from 'react';
import './App.css';
import ApprenticeshipForm from './components/ApprenticeshipForm';
import Apprenticeships from './components/Apprenticeships';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App">
      
         <LoginPage/>
         <Apprenticeships/>
         <ApprenticeshipForm/>
    </div>
  );
}

export default App;
