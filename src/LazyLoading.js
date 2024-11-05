import React, { lazy, Suspense, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
const MutiStepForm = lazy(() => import('./components/MutiStepForm'));

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

function LazyLoading() {

  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Lazy Loading component</h1>
      <button onClick = {() => setShow(true)}>Show</button>
      {
        show ? <Suspense fallback = {<div>Loading...</div>}>
      
        <MutiStepForm 
          initialState={initialState}
          steps={steps}
          onSubmit = {onSubmit}
        />
      </Suspense> : null
      }
      
    </div>
  );
}

export default LazyLoading;