function Button(props) {
  return (
    <button
      type={props.btnType}
      style={props.style}
      className={props.className}
      onClick={props.click}
      disabled={props.disabled}
    >
      {props.text || props.children}
    </button>
  );
}

export default Button;
