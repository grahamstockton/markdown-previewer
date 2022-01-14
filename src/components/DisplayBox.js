import ReactMarkdown from 'react-markdown';

function DisplayBox(props) {
    return (
        <div id="preview">
        <ReactMarkdown>{props.textContent}</ReactMarkdown>
        </div>
    );
}

export default DisplayBox;