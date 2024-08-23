import Axios from "axios";
import { useDispatch } from "react-redux";
import { createSession } from "../store/slices/userSlice";

function useLogin() {
    const dispatch = useDispatch();
    const login = async (email, password) => {
        try {
            const res= await Axios.post("http://localhost:5000/auth/login", data);
            dispatch(createSession(res.data));
        } catch (e) {
            console.log(e);
        }
    };
    return login;
}
export default useLogin;
