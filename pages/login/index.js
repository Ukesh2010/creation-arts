import React, {Fragment} from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {Formik} from "formik";
import * as Yup from "yup";
import {login} from "../../api";
import {useRouter} from "next/router";
import {useAuth} from "../../contexts/AuthContext";
import {useToasts} from "react-toast-notifications";
import {BeatLoader, ClipLoader, PulseLoader} from "react-spinners";

const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(5).required(),
});

const Login = () => {
    const router = useRouter();
    const {login: setAuthToken} = useAuth();
    const {addToast} = useToasts();

    const onSubmit = async (values, {setSubmitting, setErrors}) => {
        try {
            const response = await login(values);
            setAuthToken(response.token);
            router.push("/");
        } catch (response) {
            if (response.errors) {
                setErrors(response.errors.reduce((p, c) => ({...p, ...c}), {}));
            } else {
                addToast(response?.message || "Error while logging in.", {
                    appearance: "error",
                });
            }
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Fragment>
            <Head>
                <title>Login</title>
                <link rel="icon" href={"/favicon.ico"}/>
                <meta property={"title"} content={"Login to your account | Yala Treasure"} key={"login_title"}/>
                <meta property={"description"}
                      content={"Don’t have a Yala Treasure account? Register now for free and buy the best quality handicrafts to preserve your culture and traditions. Let’s hurry up!"}
                      key={"login_description"}/>
            </Head>
            <section className="auth-container">
                <div className="auth-card">
                    <div className="left-container">
                        <Image
                            src="/images/product2.jpg"
                            alt="Picture of the author"
                            layout="fill"
                        />
                    </div>

                    <div className="right-container">
                        <div className="info-block">
                            <div>
                                Don't have an account?{" "}
                                <Link href={"/register"}>Register Now</Link>
                            </div>
                        </div>
                        <Formik
                            initialValues={{email: "", password: ""}}
                            validationSchema={LoginSchema}
                            onSubmit={onSubmit}
                        >
                            {({
                                  values,
                                  errors,
                                  touched,
                                  handleChange,
                                  handleBlur,
                                  handleSubmit,
                                  isSubmitting,
                              }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name={"email"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        {errors.email && touched.email && (
                                            <span className={"error-message"}>{errors.email}</span>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Password</label>
                                        <input
                                            className="form-control"
                                            type="password"
                                            name={"password"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                        />
                                        {errors.password && touched.password && (
                                            <span className={"error-message"}>{errors.password}</span>
                                        )}
                                    </div>
                                    <div>
                                        <Link href={"/forgot-password"}>Forgot Password?</Link>
                                    </div>
                                    <button className="btn accent-btn" disabled={isSubmitting}>
                                        login <PulseLoader loading={isSubmitting} size={4}/>
                                    </button>

                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            marginTop: "1rem",
                                        }}
                                    >
                                        <Link href={"/"}>back to home page</Link>
                                    </div>
                                </form>
                            )}
                        </Formik>
                        {/*<div className="or-block">*/}
                        {/*  <span>OR</span>*/}
                        {/*</div>*/}
                        {/*<div className="social-login-container">*/}
                        {/*  <button className="btn fb-btn">*/}
                        {/*    <FontAwesomeIcon icon={faFacebookF} size={"2x"} />*/}
                        {/*    Continue with Facebook*/}
                        {/*  </button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Login;
