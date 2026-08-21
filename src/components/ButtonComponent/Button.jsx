import './Button.css';
export default function Button({value, onButtonClick, className}) {
  return <button className={`circle ${className}`} onClick={() => onButtonClick(value)}>{value}</button>
}