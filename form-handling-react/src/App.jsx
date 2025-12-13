import './index.css'
import './App.css'
import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formik';




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
