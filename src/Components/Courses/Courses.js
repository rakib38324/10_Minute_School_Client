import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';import LeftsideNav from '../LeftsideNav/LeftsideNav';
import AllCourses from '../AllCourses/AllCourses';
import { useLoaderData } from 'react-router-dom';


const Courses = () => {

    const course = useLoaderData()
    // console.dir(course)
    
    // console.log(course[0].title)
    // const name = course[0].title


    return (
        <div >
            <Container>
                <Row>
                    <Col sm={3} >

                        <LeftsideNav></LeftsideNav>
                    
                    </Col>


                    <Col  sm={9}>

                    <h1 className='fw-bolder text-center pb-4 lg:p-4'>COURSES</h1>
                        
                        {
                            course?.length && course.map( course =>
                         
                            <AllCourses
                            key={course._id}
                            courses = {course}
                            
                            ></AllCourses>
                            )

                        }
       
                    
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
};

export default Courses;