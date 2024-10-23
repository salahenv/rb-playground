import React, { useState } from 'react';

function MultiStepForm({steps= [], initialState = {}, onSubmit}) {

    const [currentStep, setCurrentStep] = useState(steps[0]);
    const [formData, setFormData] = useState(initialState);

    const onPrev = () => {
        // eslint-disable-next-line no-unused-expressions
        currentStep.step > 0 ? setCurrentStep(steps[currentStep.step-1]) : null
    }

    const onNext = () => {
        // eslint-disable-next-line no-unused-expressions
        currentStep.step < steps.length -1  ? setCurrentStep(steps[currentStep.step+1]) : null
    }

    const onChange = (feild, event) => {
        setFormData({
            ...formData,
            [feild]: event.target.value
        })
    }

    return (
        <div>
            <currentStep.component
                onChange = {onChange}
                formData = {formData}
            >
            </currentStep.component>
            <div onClick = {onPrev}>Prev</div>
            <div onClick={onNext}>Next</div>
            {currentStep.step === steps.length -1 && <div onClick={() => {onSubmit(formData)}}>Submit</div>}
        </div>
    );
}

export default MultiStepForm;