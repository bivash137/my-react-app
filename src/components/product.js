import { useSelector } from "react-redux";

function Product(props) {
    const code = useSelector((store) => store.currency);
}