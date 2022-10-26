import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';import LeftsideNav from '../LeftsideNav/LeftsideNav';
import AllCourses from '../AllCourses/AllCourses';
;

const Courses = () => {
    return (
        <div >
            <Container>
                <Row>
                    <Col sm={4}>

                        <LeftsideNav></LeftsideNav>
                    
                    </Col>


                    <Col sm={8}>

                        <AllCourses></AllCourses>
                    
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
};

export default Courses;