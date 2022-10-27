import React from 'react';
import { Link } from 'react-router-dom';


const AllCourses = ({ courses }) => {


    // console.log(courses)
    const { _id, title, details, image_url, already_enrolled, price } = courses;

    return (

        <div>
            
            <div class="w-75  mb-5 mx-auto">
            <div class="col">
                <div class="card">
                    <img className='border rounded-lg m-2 h-64 w-96' src={image_url} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h2 className='fw-bolder text-center'>{title}</h2>
                        <p>{details}</p>
                        <h3 className='fw-bolder pt-3'>Already Enrolled: {already_enrolled}</h3>
                        <h4 className='fw-bolder'>Enrolment fee: {price}TK</h4>
                        <div className='d-flex justify-content-around pt-5'>
                            <Link to={`/course/${_id}`} type="button" class="btn btn-primary">Show More</Link>
                            <Link to={'/enrolNow'} type="button" class="btn btn-primary">Enroll Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>


    );
};

export default AllCourses;