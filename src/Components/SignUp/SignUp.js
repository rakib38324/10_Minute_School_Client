import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import app from '../../Firebase/Firebase.config';


const auth = getAuth(app)

const SignUp = () => {

    const provider = new GoogleAuthProvider();

    const [error, setError] = useState(null)

    const { createUser} = useContext(AuthContext)


    const handleSubmit = (event) => {

        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const Confirm = form.confirmPassword.value;
        console.log(email, password, Confirm);

        if (password.length < 6) {
            setError("Password should be 6 character or more")
            return;
        }

        if (password !== Confirm) {
            setError("Your Password did not match");
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
            })
            .catch(error => {
                console.error(error);
            })


    }

    const handleGoogleSignIn = ()=>{
     signInWithPopup(auth, provider)
     .then(result => {
        const user = result.user;
        console.log(user)
    })
    .catch(error => {
        console.error(error);
    })
    }

    return (
        <div >
            <form onSubmit={handleSubmit} className='w-25 mx-auto p-3 border border-success'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label" >Email address</label>

                    <input type="email" className="form-control" id="exampleInputEmail1" name='email' placeholder='Enter your email' required />

                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label" >Password</label>

                    <input type="password" className="form-control" name='password' placeholder='Enter your password' required />

                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label" >Confirm Password</label>

                    <input type="password" className="form-control" name='confirmPassword' placeholder='Confirm password' required />

                </div>

                <p className='text-danger'>{error}</p>

                <button type="submit" class="btn btn-primary">Submit</button>
                <p>Already Have an Account? Please <Link to='/login'>Login</Link></p>
                <div className='d-flex justify-content-around'>
                    <button onClick={handleGoogleSignIn}  type="button" class="btn btn-outline-success">Sign in with Google</button>
                    <button type="button" class="btn btn-outline-secondary">Sign in with GitHub</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;