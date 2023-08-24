import React from 'react'
import '../Components/home.css'
import About from './About'
import AboutContaint from './AboutContaint'
function Home() {
  return (
    <>
    <div className='container'>
        <div className="containt">
        <h1>It is Better to <br />Travel Well Than <br />to Arrive</h1>
        <br />
        </div>
    </div>
    <AboutContaint/>
    </>
  )
}

export default Home