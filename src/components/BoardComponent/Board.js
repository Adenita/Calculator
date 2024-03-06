import './Board.css';
import Button from "../ButtonComponent/Button";
export default function Board() {
    return (
        <div className="board">
            <div>
                <Button value="7"></Button>
                <Button value="8"></Button>
                <Button value="9"></Button>
                <Button value="/"></Button>
            </div>
            <div>
                <Button value="4"></Button>
                <Button value="5"></Button>
                <Button value="6"></Button>
                <Button value="x"></Button>
            </div>
            <div>
                <Button value="1"></Button>
                <Button value="2"></Button>
                <Button value="3"></Button>
                <Button value="-"></Button>
            </div>
            <div>
                <Button value="0"></Button>
                <Button value="."></Button>
                <Button value="+"></Button>
                <Button value="="></Button>
            </div>
        </div>
    );
}