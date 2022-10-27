import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const AllCourses = ({ courses }) => {


    // console.log(courses)
    const { _id, title, details, image_url } = courses;

    return (
        <div>
            <div class="">
                <div class="col">
                    <div class="card">
                        <img src={image_url} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5>{title}</h5>
                            <p>{details}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AllCourses;