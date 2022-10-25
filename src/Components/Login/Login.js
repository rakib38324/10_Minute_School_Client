import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const Login = () => {

    const {signIn} = useContext(AuthContext);


    const handleSubmit = (event) =>{
        event.preventDefault();

        const form = event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)

        signIn(email,password)
        .then( result =>{
            const user = result.user;
            console.log(user)
            form.reset();
        })
        .catch( error =>{
            console.error(error);
        })
    }



    return (
        <div >
            <form onSubmit={handleSubmit} className='w-25 mx-auto sm-w-100 p-3 border border-success rounded-3'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label" >Email address</label>

                    <input type="email" name='email' className="form-control" id="exampleInputEmail1"  placeholder='Enter your email' required/> 

                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label" >Password</label>

                    <input type="password" name='password' className="form-control"  placeholder='Enter your password' required/> 

                </div>
                
                
                
                <button type="submit" class="btn btn-primary">Submit</button>
                <p>New to 10 Minute School? Please <Link to='/signup'>Create a New Account</Link></p>
            </form>
        </div>
    );
};

export default Login;