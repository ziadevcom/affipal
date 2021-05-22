import "./MultiStepForm.css";
import Button from "../Button/Button";
import { useState, useEffect, useRef } from "react";

export default function MultiStepForm({ children, formData }) {
  const [steps, setStep] = useState({ step: 0, maxSteps: children.length - 1 });
  const [errors, setErrors] = useState([]);
  const initialRender = useRef(true);
  const { step, maxSteps } = steps;

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      if (errors.length == 0) {
        setStep((previousState) => {
          const { step } = previousState;
          previousState.step = step + 1;
          return { ...previousState };
        });
      }
    }
  }, [errors]);

  function prevStep() {
    setStep((previousState) => {
      const { step } = previousState;
      previousState.step = step - 1;
      return { ...previousState };
    });
  }

  function nextStep() {
    const { verify } = children[step].props;
    verify(formData, setErrors);
  }

  return (
    <form className="mulstistep-form-wrapper">
      <div className="multistep-form">
        <h2 className="multistep-form__title">{`${steps.step + 1}. ${
          children[steps.step].props.title || ""
        }`}</h2>
        {errors.length > 0 && (
          <div className="multistep-form__errors animated flash">
            {errors.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        )}
        {children[steps.step]}
      </div>
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
    </form>
  );
}

export function FormStep({ children }) {
  return <div className="multistep-form__row">{children}</div>;
}
