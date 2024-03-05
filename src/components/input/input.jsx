function Input(props) {
    return (
        <input 
            type={props.type} 
            placeholder={props.placeholder}
            value={props.value}
            className={props.className}    
        />
    )
}

export default Input;