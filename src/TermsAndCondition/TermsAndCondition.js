import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div className='w-50 mx-auto'>
            <h3>Here is our Terms ad Conditions</h3>
            <p>Go back to: <Link to='/signup'>Registration</Link></p>
        </div>
    );
};

export default TermsAndCondition;