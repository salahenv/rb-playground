import React from 'react';
import MultiStepForm from './components/MutiStepForm';

const StepOne = ({formData, onChange}) => {
  return (
    <div>
      <div>Name</div>
      <input value = {formData.name} onChange={(e) => onChange('name', e)}></input>
    </div>
  )
}

const StepTwo = ({formData, onChange}) => {
  return (
    <div>
      <div>Email</div>
      <input value = {formData.email} onChange={(e) => onChange('email', e)}></input>
    </div>
  )
}

const StepThree = ({formData, onChange}) => {
  return (
    <div>
      <div>Address</div>
      <input value = {formData.address} onChange={(e) => onChange('address', e)}></input>
    </div>
  )
}

const steps = [
  {
    step: 0,
    component: StepOne
  },
  {
    step: 1,
    component: StepTwo
  },
  {
    step: 2,
    component: StepThree
  }
]

const initialState = {
  name: '',
  email: '',
  address: '',
}

const onSubmit = (formData) => {
  console.log(formData);
}

function Home() {
  return (
    <div>
      <h1>Demo Page</h1>
      <MultiStepForm 
        initialState={initialState}
        steps={steps}
        onSubmit = {onSubmit}
      />
    </div>
  );
}

export default Home;