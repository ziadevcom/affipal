import "./MultiStepForm.css";
import Button from "../Button/Button";
import { useState } from "react";

export default function MultiStepForm({ children }) {
  const [steps, setStep] = useState({ step: 0, maxSteps: children.length - 1 });

  function prevStep() {
    setStep((previousState) => {
      const { step } = previousState;
      previousState.step = step - 1;
      return { ...previousState };
    });
  }

  function nextStep() {
    setStep((previousState) => {
      const { step } = previousState;
      previousState.step = step + 1;
      return { ...previousState };
    });
  }

  return (
    <div className="mulstistep-form-wrapper">
      <div className="multistep-form">{children[steps.step]}</div>
      <MultiStepFormFooter
        prevStep={prevStep}
        nextStep={nextStep}
        steps={steps}
      />
    </div>
  );
}

export function FormStep({ children }) {
  return <div className="multistep-form__row">{children}</div>;
}

export function MultiStepFormFooter({ prevStep, nextStep, steps }) {
  const { step, maxSteps } = steps;
  return (
    <div className="multistep-form__footer">
      {step < maxSteps ? (
        <Button onClick={nextStep}>
          Next
          <img src="/next.svg" alt="" />
        </Button>
      ) : null}
      {step == maxSteps ? <Button>Submit</Button> : null}
      {step > 0 ? (
        <Button onClick={prevStep} variant="white">
          Previous
        </Button>
      ) : null}
    </div>
  );
}
