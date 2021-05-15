import "./CardWrapper.css";

function CardWrapper({ children, perRow }) {
  return (
    <div
      className="card-wrapper"
      style={{
        gridTemplateColumns: `repeat(${
          perRow || "auto-fit"
        }, minmax(250px, 1fr))`,
      }}
    >
      {children}
    </div>
  );
}

export default CardWrapper;
