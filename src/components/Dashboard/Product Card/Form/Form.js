import MultiStepForm from "../../../General UI/MultiStepForm/MultiStepForm";
import FormStep from "../../../General UI/MultiStepForm/FormStep/FormStep";
import FormInput from "../../../General UI/FormInput/FormInput";
import RichTextEditor from "../../../General UI/RichTextEditor/RichTextEditor";
import { useState } from "react";

function Form() {
  const [text, setText] = useState("");

  const onTextEditorChange = (editorState) => {
    setText(editorState);
    console.log(editorState);
  };

  return (
    <MultiStepForm>
      <FormStep>
        <div className="input-wrapper">
          <FormInput
            label="Product Title"
            type="text"
            placeholder="High Tech Laptop"
            id="product-title"
          />
          <FormInput
            label="Product Price ($)"
            type="number"
            placeholder="1199"
            id="product-price"
          />
          <FormInput
            label="Product Rating"
            type="number"
            placeholder="4.6"
            id="product-rating"
          />
        </div>
        <div
          className="input-wrapper"
          style={{ "--perRow": "1", "--gap": "0" }}
        >
          <FormInput
            label="Product Image URL"
            type="text"
            placeholder="https://images-na.ssl-images-amazon.com/images/I/91G5CPWSLZL._AC_SX679_.jpg"
            id="product-image"
          />
        </div>
        <div className="input-wrapper">
          <FormInput
            label="No. of Reviews"
            type="number"
            min="1"
            max="999999"
            placeholder="318"
            id="no-of-reviews"
          />

          <FormInput
            label="Tax Statement"
            type="text"
            placeholder="Price incl. tax, excl. shipping"
            id="product-tax-statement"
          />
        </div>
        <div
          className="input-wrapper"
          style={{ "--perRow": "1", "--gap": "0" }}
        >
          <RichTextEditor
            label="Product Description"
            text={text}
            onTextEditorChange={onTextEditorChange}
          />
        </div>
      </FormStep>
    </MultiStepForm>
  );
}

export default Form;
