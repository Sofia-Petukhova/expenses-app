import "./Button.css";

const Button = ({ type, text, onClick }) => {
  return (
    <button type={type} className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
