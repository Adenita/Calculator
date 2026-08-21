import './Field.css';
export default function Field({result}) {
    return (
        <input
        type="text"
        value={result}
        readOnly
        className="result-field"
        placeholder="0"
    />
    );
}