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
                    <Col sm={4}>

                        <LeftsideNav></LeftsideNav>
                    
                    </Col>


                    <Col sm={8}>

                        {/* <AllCourses courses = {course}></AllCourses> */}
                        
                        
                        
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