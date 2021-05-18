import "./MultiStepFormFooter.css";
import Button from "../../Button/Button";
function MultiStepFormFooter() {
  return (
    <div className="multistep-form__footer">
      <Button variant="white">
        <img src="/back.svg" alt="" />
      </Button>
      <Button>
        <img src="/next.svg" alt="" />
      </Button>
    </div>
  );
}

export default MultiStepFormFooter;
