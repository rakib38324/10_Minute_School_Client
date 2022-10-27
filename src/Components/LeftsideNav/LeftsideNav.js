import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const LeftsideNav = () => {
    const [Courses, setCourses] = useState([])
    


    useEffect(() =>{
        fetch('http://localhost:5000/Courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
            <h1 className='fw-bolder text-center pb-4 lg:p-4'>ALL COURSES</h1>
            <div >
                {
                    Courses.map(course => <p className='lg:w-75  fs-5 text-center text border p-3'  key= {course.courses_id
                    }>
                        <Link className='text-decoration-none fw-semibold text-dark px-4'   to={`/catagory/${course.courses_id}`}>{course.courses_name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftsideNav;