import { useDispatch, useSelector} from "react-redux";
import {removeItem } from "../store/slices/cartSlice";

function cart ( ) {
    const dispatch = useDispatch();
    const cartItems = useSelector(store=>store.cart);

    return (
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    cartItems.map((item)=>(
                        <tr key={item.productId}>
                            <td>{item.productname}</td>
                            <td>{item.productname}</td>
                            <td>
                                <button onClick={() => dispatch(removeItem(item.productId))}>
                                  x
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default cart;