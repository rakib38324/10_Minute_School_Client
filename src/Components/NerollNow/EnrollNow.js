import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/UserContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';

const EnrollNow = () => {
    const course = useLoaderData()
    const {title, image_url,details,price } = course;
    return (
        <div className='text-center'>
            <h1>Please Complete Payment Method</h1>
            <Card className='w-50 mx-auto my-5'>
                <Card.Img variant="top" src={ image_url} />
                <Card.Body>
                    <Card.Title className='fs-3 text'>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <h3>Price: {price }</h3>

                    <div className='d-flex justify-content-around pt-5'>
                    <button  className="btn btn-primary">Payment</button>
                    <Link to='/' className="btn btn-primary">Go Home</Link>
                    </div>
                </Card.Body>
            </Card>

        </div>
    );
};

export default EnrollNow;