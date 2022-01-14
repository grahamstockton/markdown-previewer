function InputBox(props) {
    return (
        <textarea id="editor" value={props.textContent} onChange={(e) => props.changeFunc(e.target.value)}></textarea>
    );
}

export default InputBox;