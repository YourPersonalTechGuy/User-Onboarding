import React from "react";

export default function Form(props){
    const {
        values,
        submit,
        change,
        isDisabled,
        errors,
    } = props;

    const submission = (event) => {
        event.preventDefault();
        submit();
    }
    
    const onChange = (event) => {
        const { name, value, type, checked } = event.target
        const usedValue = type === "checkbox" ? checked : value
        change(name, usedValue)
    }

    return (
        <form className="form-container" onSubmit={submission}>
            <div className="onboarding-container">
                <h2>Onboarding</h2>

                <div className="errors-container">
                    <div>{ errors.fname }</div>
                    <div>{ errors.lname }</div>
                    <div>{ errors.email }</div>
                    <div>{ errors.password }</div>
                    <div>{ errors.tos }</div>
                </div>

                <div className="input-container">
                    <label>First name
                        <input 
                            type="text"
                            name="fname"
                            onChange={onChange}
                            value={values.fname}
                        />
                    </label>

                    <label>Last name
                        <input 
                            type="text"
                            name="lname"
                            onChange={onChange}
                            value={values.lname}
                        />
                    </label>

                    <label>email
                        <input 
                            type="email"
                            name="email"
                            onChange={onChange}
                            value={values.email}
                        />
                    </label>

                    <label>password
                        <input 
                            type="password"
                            name="password"
                            onChange={onChange}
                            value={values.password}
                        />
                    </label>

                    <label>Terms of Service
                        <input 
                            type="checkbox"
                            name="tos"
                            onChange={onChange}
                            checked={values.tos}
                        />
                    </label>
                </div>

                <button disabled={isDisabled}>SUBMIT</button>
            </div>
        </form>
    )
}