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
                        <Carousel.Caption className='text-white'>
                            <h3>Enjoy Yourself</h3>
                            <p>For many of us, enjoying life is a difficult task. A lot of people rely on external factors to make them happy, but ultimately the change has to come from within. By taking care of yourself and changing the way you think and behave as you move through life, you can boost your enjoyment.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pic1}
                            alt="Second slide"
                        />
                        <Carousel.Caption className='text-white'>
                            <h3>Be Pensionable</h3>
                            <p>As people go through the course of their careers,
                                they have an expectation that a time will come
                                when they will be able to retire. When that time
                                comes, it is befitting that one is financially secure
                                to avoid any money strains that come with day
                                to day living. This is where pension comes in. In
                                broader terms, the United Nations through the
                                sustainable development goals (SDGs) has purposed
                                “to end poverty in all its forms everywhere”; the
                                pension benefit must therefore also be sufficient to
                                lead to a dignified retirement that addresses these
                                overarching and global SDGs</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pic2}
                            alt="Third slide"
                        />
                        <Carousel.Caption className='text-white'>
                            <h3>Work Hard</h3>
                            <p>
                            We learn important life lessons when we give ourselves over to hard work: determination, attentiveness, responsibility, problem-solving, and self-control all come to mind.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>


            <h1 className='fw-bolder text-center  mt-5 pb-4 lg:p-4'>ALL COURSES</h1>
            <div >
                {
                    Courses.map(course => <p>

                        <div>
                            <div class="card w-50 mx-auto" >
                                <img src={course.image_url} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{course.title}</h5>
                                    <p class="card-text">{course.details}</p>
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