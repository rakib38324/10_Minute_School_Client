import { getAuth, GithubAuthProvider, GoogleAuthProvider, sendEmailVerification, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import app from '../../Firebase/Firebase.config';
import { FaGoogle, FaGithub } from 'react-icons/fa'
import toast from 'react-hot-toast';


const auth = getAuth(app)

const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const provider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();



    const [accept, setAccept] = useState(false)

    const { createUser } = useContext(AuthContext)


    const handleSubmit = (event) => {

        event.preventDefault();


        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const Confirm = form.confirmPassword.value;
        const picture = form.picture.value;
        console.log(email, password, Confirm);

        if (password.length < 6) {
           
            toast.error("Password should be 6 character or more")
            return;
        }

        if (password !== Confirm) {
           
            toast.error("Your Password did not match")
            return;
        }

        createUser(email, password, name, picture)
            .then(result => {
                const user = result.user;
                console.log(user)
                updateName(name, picture);
                emailVarify()
                form.reset();
                navigate(from, { replace: true });
                toast.success("Login Successfully")
                toast.success("Please Verify your Email Address.")
            })
            .catch(error => {
                console.error(error);

            })

    }



    const updateName = (name, picture) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: picture
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });

    }


    const emailVarify = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!
                // ...
            })
            .catch(error=>console.error(error))
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


    const handleAccepted = (event) =>{
        setAccept(event.target.checked);
    }


    return (
        <div >
            <form onSubmit={handleSubmit} className='w-75 mx-auto p-3 border border-success rounded-3'>
               
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label" >Full Name</label>

                    <input type="text" className="form-control" id="exampleInputEmail1" name='name' placeholder='Enter your full name' required />

                </div>

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

                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label" >Picture URL</label>

                    <input type="text" className="form-control" name='picture' placeholder='Please past your picture url' required />

                </div>


                

                <div class="form-check">
                    <input onClick={handleAccepted} class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            <>
                            Accept <Link to='/terms'>Terms and Condition</Link>
                            </>
                        </label>
                </div>


                <button type="submit" class="btn btn-primary" disabled={!accept}>Register</button>
                <p>Already Have an Account? Please <Link to='/login'>Login</Link></p>
                <div className='d-flex justify-content-around'>
                    <button onClick={handleGoogleSignIn} type="button" class="btn btn-outline-success ">  <FaGoogle></FaGoogle> Sign in with Google</button>

                    <button onClick={handleGithubSignIn} type="button" class="btn btn-outline-secondary"> <FaGithub></FaGithub>  Sign in with GitHub</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;