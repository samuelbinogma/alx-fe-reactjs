import './index.css'
import './App.css'
import React from 'react';
import FormikForm from './components/formikForm';
import RegistrationForm from './components/RegistrationForm';


function App() {

  return (
    <div>
      <RegistrationForm />
      <hr />
      <FormikForm />
    </div>
  )
}

export default App
