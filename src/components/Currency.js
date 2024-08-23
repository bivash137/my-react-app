import { changeCurrency } from "../store/slices/currencySlice";

function Currency() {
    return (
        <select onChange={(ev) => dispatchEvent(changeCurrency(ev.target.value))}>
            <option>INR</option>
            <option>USD</option>
            <option>CAD</option>
            <option>GBP</option>
            <option>EUR</option>
        </select>
    );
}

export default Currency;