import './Button.css';
export default function Button({value, onButtonClick}) {
  return <button className="square" onClick={() => onButtonClick(value)}>{value}</button>
}