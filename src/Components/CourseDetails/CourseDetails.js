import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pdf from "react-to-pdf";

const ref = React.createRef();
const CourseDetails = () => {
    const course = useLoaderData()
    console.log(course)
    console.log(course.title)
    return (
        <Card ref={ref} className='w-50 mx-auto mb-5'>
            <Card.Img variant="top" src={course.image_url} />
            <Card.Body>
                <Card.Title className='fs-2 text fw-bolder text-center'>{course.title}</Card.Title>
                <Card.Text className='fs-6 text'>{course.details}
                </Card.Text>
                <h3 className='fw-bolder pt-3'>Already Enrolled: {course.already_enrolled}</h3>
                <h4 className='fw-bolder'>Enrolment fee: {course.price}TK</h4>

                <div className='d-flex justify-content-around pt-5'>
                    <Link to={`/enrolNow/${course._id}`} type="button" class="fs-3 btn btn-primary">Enroll Now</Link>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button className='fs-3 btn btn-primary' onClick={toPdf}>Download Pdf</button>}
                    </Pdf>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CourseDetails;