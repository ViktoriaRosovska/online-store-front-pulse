function Button(props) {
  return (
    <button type={props.btnType} style={props.style} className={props.className}>
      {props.btnText || props.children}
    </button>
  );
}

export default Button;
