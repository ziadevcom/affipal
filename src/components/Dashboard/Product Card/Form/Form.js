import { useState } from "react";
import MultiStepForm, {
  FormStep,
} from "../../../General UI/MultiStepForm/MultiStepForm";
import FormInput from "../../../General UI/FormInput/FormInput";
import RichTextEditor from "../../../General UI/RichTextEditor/RichTextEditor";
import Theme1 from "../Product Cards/Theme1/Theme1";

function Form({ formData, updateformData }) {
  const onTextEditorChange = (text) => {
    updateformData((prevState) => {
      let previousFormData = prevState;
      previousFormData["productDescription"] = text;
      return { ...previousFormData };
    });
  };

  const onChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    updateformData((prevState) => {
      let previousFormData = prevState;
      previousFormData[key] = value;
      return { ...previousFormData };
    });
  };

  function verifyForm(setErrors, cb) {
    let newErrors = [];
    let keys = Object.getOwnPropertyNames(formData);
    let hasEmptyInput = keys.some((key) => formData[key].trim() == "");
    if (hasEmptyInput) {
      newErrors.push("Please fill in required information.");
    }
    setErrors(newErrors);
    // for (let key of Object.entries(formData)) {
    //   if (value.trim() == "") {
    //     newErrors = [
    //       "Please fill in all required fields.",
    //       "Enter a valid image URL.",
    //     ];
    //   }
    // }
    // if (newErrors.length > 0) {
    //   setErrors(newErrors);
    //   return false;
    // }
    // return true;
  }
  return (
    <MultiStepForm formData={formData} updateformData={updateformData}>
      <FormStep verifyForm={verifyForm} title="Enter required details.">
        <div className="input-wrapper">
          <FormInput
            onChange={onChange}
            label="Product Title"
            type="text"
            placeholder="High Tech Laptop"
            id="productTitle"
            value={formData["productTitle"]}
            required="true"
          />
          <FormInput
            onChange={onChange}
            label="Product Price ($)"
            type="number"
            placeholder="1199"
            id="productPrice"
            value={formData["productPrice"]}
            required="true"
          />
          <FormInput
            onChange={onChange}
            label="Product Rating"
            type="number"
            placeholder="4.6"
            id="productRating"
            value={formData["productRating"]}
            required="true"
            min="1"
            max="5"
            step="0.1"
          />
        </div>
        <div
          className="input-wrapper"
          style={{ "--perRow": "1", "--gap": "0" }}
        >
          <FormInput
            onChange={onChange}
            label="Product Image URL"
            type="text"
            placeholder="https://images-na.ssl-images-amazon.com/images/I/91G5CPWSLZL._AC_SX679_.jpg"
            id="productImage"
            value={formData["productImage"]}
            required="true"
          />
        </div>
        <div className="input-wrapper">
          <FormInput
            onChange={onChange}
            label="No. of Reviews"
            type="number"
            min="1"
            max="999999"
            placeholder="318"
            id="productReviews"
            value={formData["productReviews"]}
          />
          <FormInput
            onChange={onChange}
            label="Tax Statement"
            type="text"
            placeholder="Price incl. tax, excl. shipping"
            id="productTax"
            value={formData["productTax"]}
            required="true"
          />
          <FormInput
            onChange={onChange}
            label="Product URL"
            type="text"
            placeholder="https://www.amazon.com/dp/0804137382"
            id="productURL"
            value={formData["productURL"]}
            required="true"
          />
        </div>
        <div
          className="input-wrapper"
          style={{ "--perRow": "1", "--gap": "0" }}
        >
          <RichTextEditor
            label="Product Description"
            text={formData["productDescription"]}
            onChange={onTextEditorChange}
          />
        </div>
      </FormStep>
      <FormStep title="Choose a design">
        <Theme1 />
      </FormStep>
      <FormStep>
        <h1>Step 3</h1>
      </FormStep>
      <FormStep>
        <h1>Step 4</h1>
      </FormStep>
    </MultiStepForm>
  );
}

export default Form;
