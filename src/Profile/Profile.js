import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { AuthContext } from '../Contexts/UserContext';
import { Link } from 'react-router-dom';


const Profile = () => {
    const {user} = useContext(AuthContext)
    const {displayName, photoURL,email } = user;

    return (
        <div>
            <Card className='w-25 mx-auto'>
                <Card.Img variant="top" src={photoURL} />
                <Card.Body>
                    <Card.Title>{displayName}</Card.Title>
                    <Card.Text>
                        {email}
                    </Card.Text>
                    <Link to='/' className="btn btn-primary">Go Home</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Profile;