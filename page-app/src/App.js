import { Formik } from "formik"
import "./App.css"
function App() {
    return (
        <div className="container">
            <div className="brand-box">
            <img src="https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"  alt="#" />
            </div>
            <div className="magic-form">
                <Formik
                    initialValues={{
                        email: "",
                        passwoed: "",
                        agree: false,
                    }}

                    onSubmit={(values, { resetForm, setSubmitting }) => {
                        console.log(values)
                        setTimeout(() => {
                            setSubmitting(false)
                            resetForm()
                        }, 2000);
                    }}
                >
                    {({ values, handleChange, dirty, errors, touched, handleSubmit, handleReset, isSubmitting }) => (
                        <form className="magic-form" onSubmit={handleSubmit}>
                            <h3>Sign in</h3>
                            <input
                                type="email"
                                placeholder="Email Address *"
                                id="email"
                                className="input"
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && touched.email&& (
                                <div className="input-feedback">{errors.email}</div>
                            )}
                            <input
                                type="password"
                                placeholder="Password *"
                                id="password"
                                className="input"
                                value={values.password}
                                onChange={handleChange}
                            />
                            {errors.password && touched.password && (
                                <div className="input-feedback">{errors.password}</div>
                            )}
                           
                            <div className="checkbox topMargin">
                                <input type="checkbox" value={values.agree} onChange={handleChange} id="agree" />
                                <label htmlFor="agree" className="checkbox-label"> Remember me</label>
                            </div>
                            {errors.agree && touched.agree && (
                                <div className="input-feedback">{errors.agree}</div>
                            )}
                            <button type="submit" disabled={!dirty || isSubmitting} >SIGN IN</button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default App