import "./Banner.css";

function Banner({ text, className }) {
  return (
    <p className={`banner${typeof className == "string" ? className : ""}`}>
      {text}
    </p>
  );
}

export default Banner;
