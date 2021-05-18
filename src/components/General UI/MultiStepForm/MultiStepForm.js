import "./MultiStepForm.css";
import MultiStepFormFooter from "./MultiStepFormFooter/MultiStepFormFooter";
function MultiStepForm({ children }) {
  return (
    <div className="mulstistep-form-wrapper">
      <div className="multistep-form">{children}</div>
      <MultiStepFormFooter />
    </div>
  );
}

export default MultiStepForm;
