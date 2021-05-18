import "./MultiStepFormFooter.css";
import Button from "../../Button/Button";
function MultiStepFormFooter() {
  return (
    <div className="multistep-form__footer">
      <Button>
        <img src="/next.svg" alt="" />
      </Button>
      <Button variant="white">
        <img src="/back.svg" alt="" />
      </Button>
    </div>
  );
}

export default MultiStepFormFooter;
