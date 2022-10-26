import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftsideNav = () => {
    const [Courses, setCourses] = useState([])


    useEffect(() =>{
        fetch('http://localhost:5000/Courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
            <h1>leftside nav</h1>
            <div>
                {
                    Courses.map(course => <p key= {course.courses_id
                    }>
                        <Link to={`/course/${course.id}`}>{course.courses_name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftsideNav;