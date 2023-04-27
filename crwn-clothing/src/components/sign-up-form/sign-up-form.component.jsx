import { useState } from 'react'
import FormInput from '../form-input/form-input.component'; 
import { createUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from '../../utils/firbase/firebas.utils';
import './sign-up-form.styles.scss';
import Button from '../button/button.component';

const defaultFormFields = {
    displayname: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password != confirmPassword) {
            alert("Password Does not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code == 'auth/email-already-in-use') {
                alert("Email Already Exists");
            } else {
                console.log(error);
            }
        }

    }

    const handleChange = (event) => {
        const { name, value } = <event className="target"></event>;
    }

    setFormFields({
        ...formFields,
        [name]: value
    })

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account</h2>
            <span >Sign up with email and password</span>
            <form onSubmit={() => {handleSubmit}}>
                
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />
                
                <FormInput label="email" type="email" required onChange={handleChange} name="email" value={email} />
                
                <FormInput label="password" type="password" required onChange={handleChange} name="password" value={password} />
                
                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                <Button buttonType='inverted' type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;