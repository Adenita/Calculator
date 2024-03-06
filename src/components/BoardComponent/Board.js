import './Board.css';
import Button from "../ButtonComponent/Button";
import Field from "../FieldComponent/Field";
export default function Board({result, onButtonClick }) {
    return (
        <div className="board">
            <div>
                <Field result={result}></Field>
                <Button value="C" onButtonClick={onButtonClick}/>
            </div>
            <div>
                <Button value="7" onButtonClick={onButtonClick}/>
                <Button value="8" onButtonClick={onButtonClick} />
                <Button value="9" onButtonClick={onButtonClick} />
                <Button value="/" onButtonClick={onButtonClick} />
            </div>
            <div>
                <Button value="4" onButtonClick={onButtonClick} />
                <Button value="5" onButtonClick={onButtonClick} />
                <Button value="6" onButtonClick={onButtonClick} />
                <Button value="*" onButtonClick={onButtonClick} />
            </div>
            <div>
                <Button value="1" onButtonClick={onButtonClick} />
                <Button value="2" onButtonClick={onButtonClick} />
                <Button value="3" onButtonClick={onButtonClick} />
                <Button value="-" onButtonClick={onButtonClick} />
            </div>
            <div>
                <Button value="0" onButtonClick={onButtonClick} />
                <Button value="." onButtonClick={onButtonClick} />
                <Button value="+" onButtonClick={onButtonClick} />
                <Button value="=" onButtonClick={onButtonClick} />
            </div>
        </div>
    );
}