import React from 'react';
import NewExperience from '../components/NewExperience/NewExperience';
import '../css/home.css'
  
const Home = () => {

    return (
        <>
            <img className='banner' src={process.env.PUBLIC_URL + '/lake.jpg'} alt='lake' />
            <h1>Share your experiences and plan your next trip</h1>
            <NewExperience />
        </>
    );
}
  
export default Home;