import "./index.css";
const Button = ({
  type = "button",
  children,
  onClick,
  color = "black",
  backgroundColor,
  style,
}) => {
  const buttonStyle = {
    color,
    backgroundColor,
    ...style,
  };

  return (
    <button
      className="button"
      type={type}
      style={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
