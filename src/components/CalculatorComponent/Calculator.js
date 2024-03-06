import { useState } from 'react';
import Board from "../BoardComponent/Board";
export default function Calculator() {
    const [result, setResult] = useState('');
    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                setResult(eval(result).toString());
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setResult('');
        } else {
            setResult((prevResult) => prevResult + value);
        }
    };

    return (
        <div>
            <Board result={result} onButtonClick={handleButtonClick} />
        </div>
    );
}
