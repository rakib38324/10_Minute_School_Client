import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import HomeCard from './HomeCard';
import pic1 from './img/pic1.png'
import pic2 from './img/pic2.jpeg'
import pic3 from './img/pic3.png'

const Home = () => {



    const [Courses, setCourses] = useState([])



    useEffect(() => {
        fetch('http://localhost:5000/catagory/08')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <div className='w-75 mx-auto'>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pic3}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pic1}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pic2}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5>Third slide label</h5>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>


            <h1 className='fw-bolder text-center pb-4 lg:p-4'>ALL COURSES</h1>
            <div >
                {
                    Courses.map(course => <p>

                        <div>
                            <div class="card w-50 mx-auto" >
                                <img src={course.image_url} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{course.title}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to={`/course/${course._id}`} type="button" class="btn btn-primary">Show More</Link>
                                </div>
                            </div>
                        </div>
                    </p>

                    )
                }
            </div>
        </div>
    );
};

export default Home;