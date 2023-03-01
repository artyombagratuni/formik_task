import React from "react";

import { Form, Formik } from "formik";
import { validationSchema } from "../schemas/index";
import CustomInput from "./CustomInput";
import CustomCheckbox from "./CustomCheckbox";
import { FcGoogle } from 'react-icons/fc';

const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    actions.resetForm();
}

function FormComp() {
    return (
        <div className="signUpForm">
            <header>
                <hr style={{'flexGrow': 4.5}}></hr>
                <h1 style={{'flexGrow': 1}}>create new account</h1>
                <hr style={{'flexGrow': 4.5}}></hr>
            </header>
            <Formik
                initialValues={{ firstName: "", lastName: "", teamName_number: "", email: "", password: "", acceptedTos: false }}
                validationSchema={validationSchema}  
                onSubmit={onSubmit}
            >
                {
                    ({isSubmitting}) => (
                        <Form>
                            <CustomInput
                                label = "First Name"
                                name = "firstName"
                                type = "text"
                                placeholder = "First Name"
                            />
                            <CustomInput
                                label = "Last Name"
                                name = "lastName"
                                type = "text"
                                placeholder = "Last Name"
                            />
                            <CustomInput
                                label = "Team name/number"
                                name = "teamName_number"
                                type = "text"
                                placeholder = "Team name/number"
                                className = "fullBoxDivInput"
                            />
                            <CustomInput
                                label = "Email Address"
                                name = "email"
                                type = "email"
                                placeholder = "Email Address"
                                className = "fullBoxDivInput"
                            />
                            <CustomInput
                                label = "Password"
                                name = "password"
                                type = "password"
                                placeholder = "Create a password"
                                className = "fullBoxDivInput"
                            />
                            <CustomCheckbox 
                                type="checkbox"
                                name="acceptedTos"
                                className="fullBoxDivInput"
                            />
                            <div className="fullBoxDivInput buttonDiv">
                                <button disabled={isSubmitting} type="submit">Sign Up</button>
                            </div>
                            <h2  className="fullBoxDivInput">OR</h2>
                            <div className="fullBoxDivInput withGoogle">
                                <button><FcGoogle style={{'fontSize': '1.6rem'}} />Continue with Google</button>
                            </div>

                        </Form>
                    )

                    
                }
            </Formik>
        </div>
    )
}

export default FormComp;