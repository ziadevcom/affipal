import MultiStepForm, {
  FormStep,
} from "../../../General UI/MultiStepForm/MultiStepForm";
import FormInput from "../../../General UI/FormInput/FormInput";
import RichTextEditor from "../../../General UI/RichTextEditor/RichTextEditor";

function Form({ formData, updateformData }) {
  const onTextEditorChange = (text) => {
    updateformData((prevState) => {
      let previousFormData = prevState;
      previousFormData["product-description"] = text;
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

  return (
    <MultiStepForm>
      <FormStep>
        <div className="input-wrapper">
          <FormInput
            onChange={onChange}
            label="Product Title"
            type="text"
            placeholder="High Tech Laptop"
            id="product-title"
            value={formData["product-title"]}
            required="true"
          />
          <FormInput
            onChange={onChange}
            label="Product Price ($)"
            type="number"
            placeholder="1199"
            id="product-price"
            value={formData["product-price"]}
            required="true"
          />
          <FormInput
            onChange={onChange}
            label="Product Rating"
            type="number"
            placeholder="4.6"
            id="product-rating"
            value={formData["product-rating"]}
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
            id="product-image"
            value={formData["product-image"]}
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
            id="no-of-reviews"
            value={formData["no-of-reviews"]}
            required="true"
          />

          <FormInput
            onChange={onChange}
            label="Tax Statement"
            type="text"
            placeholder="Price incl. tax, excl. shipping"
            id="product-tax-statement"
            value={formData["product-tax-statement"]}
            required="true"
          />
        </div>
        <div
          className="input-wrapper"
          style={{ "--perRow": "1", "--gap": "0" }}
        >
          <RichTextEditor
            label="Product Description"
            text={formData["product-description"]}
            onChange={onTextEditorChange}
          />
        </div>
      </FormStep>
      <FormStep>
        <h1>Step 2</h1>
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
