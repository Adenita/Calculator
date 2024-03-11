import './Board.css';
import Button from "../ButtonComponent/Button";
import Field from "../FieldComponent/Field";
export default function Board({result, onButtonClick }) {
    return (
        <div className="board">
            <div className="grid">
                <Field result={result}></Field>
                <Button value="C" onButtonClick={onButtonClick} className="red-text"/>
                <Button value="(" onButtonClick={onButtonClick} className="pink-text"/>
                <Button value=")" onButtonClick={onButtonClick} className="pink-text"/>
                <Button value="/" onButtonClick={onButtonClick} className="pink-text"/>
                <Button value="7" onButtonClick={onButtonClick}/>
                <Button value="8" onButtonClick={onButtonClick}/>
                <Button value="9" onButtonClick={onButtonClick}/>
                <Button value="*" onButtonClick={onButtonClick} className="pink-text"/>
                <Button value="4" onButtonClick={onButtonClick}/>
                <Button value="5" onButtonClick={onButtonClick}/>
                <Button value="6" onButtonClick={onButtonClick}/>
                <Button value="-" onButtonClick={onButtonClick} className="pink-text"/>
                <Button value="1" onButtonClick={onButtonClick}/>
                <Button value="2" onButtonClick={onButtonClick}/>
                <Button value="3" onButtonClick={onButtonClick}/>
                <Button value="+" onButtonClick={onButtonClick} className="pink-text"/>
                <Button value="0" onButtonClick={onButtonClick} className="wide-button"/>
                <Button value="." onButtonClick={onButtonClick}/>
                <Button value="=" onButtonClick={onButtonClick} className="pink-background"/>
            </div>
        </div>
    );
}