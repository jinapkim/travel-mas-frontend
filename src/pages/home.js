import React from 'react';
import '../css/home.css'
  
const Home = () => {

    return (
        <>
            <img className='banner' src={process.env.PUBLIC_URL + '/lake.jpg'} alt='lake' />
            <h1>Share your experiences and plan your next trip</h1>
            <button class='pill_button'>
                Add experience
            </button>
        </>
    );
}
  
export default Home;