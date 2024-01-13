import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignupForm from './SignupForm';
import LoginPage from './LoginPage'; 

const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
