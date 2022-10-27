import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeCard from './HomeCard';

const Home = () => {
    const course = useLoaderData()
    return (
        <div>
            <h1>home</h1>

            {
                course.map(courses => <HomeCard 
                    key={courses._id}
                    courses = {course}
                ></HomeCard>)
                

                }
                
            
        </div >
    );
};

export default Home;