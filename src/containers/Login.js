import {Formik, Form, Field, ErrorMessage} from "formik";
import useLogin from "../hooks/useLogin";
import * as Yup from "yup";

const schema = Yup.object({
    email: Yup.string()
    .required()
    .email({tlds: {allow: ["com"] } }),
    password: Yup.string().required().min(6),
});

function Login() {
    const login = useLogin();
    return (
        <Formik
            initialValues={{email:"", password:""}}
            onSumit={(values)=> login(values)}
            validationSchema={schema}
        >
            <Form>
                <Field name = "email" type="email" placeholder="email" />
                <ErrorMessage name="email"/>
                <Field name="password" type="password" placeholder = "password" />
                <ErrorMessage name="password"/>
                <button type="submit">Login</button>
            </Form>
        </Formik>
    );
}

export default Login;