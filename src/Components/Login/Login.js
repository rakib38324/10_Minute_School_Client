
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, sendEmailVerification, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import app from '../../Firebase/Firebase.config';
import { FaGoogle, FaGithub } from 'react-icons/fa'
import toast from 'react-hot-toast';


const auth = getAuth(app)



const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const provider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();

    const { signIn } = useContext(AuthContext);


    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                navigate(from, { replace: true });
                toast.success("Login Successfully")
              
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
                toast.success("Login Successfully")
                
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
                toast.success("Login Successfully")
                
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div >
            <form onSubmit={handleSubmit} className='w-75 mx-auto p-3 border border-success rounded-3'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label" >Email address</label>

                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" placeholder='Enter your email' required />

                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label" >Password</label>

                    <input type="password" name='password' className="form-control" placeholder='Enter your password' required />

                </div>



                <button type="submit" class="btn btn-primary">Login</button>
                <p>New to 10 Minute School? Please <Link to='/signup'>Create a New Account</Link></p>


                <div className='d-flex justify-content-around'>
                    <button onClick={handleGoogleSignIn} type="button" class="btn btn-outline-success ">  <FaGoogle></FaGoogle> Sign in with Google</button>

                    <button onClick={handleGithubSignIn} type="button" class="btn btn-outline-secondary"> <FaGithub></FaGithub>  Sign in with GitHub</button>
                </div>


            </form>
        </div>
    );
};

export default Login;