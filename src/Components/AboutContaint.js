import React from 'react'
import '../Components/about.css'
import About1 from '../Components/img/about_1.jpg'
import About2 from '../Components/img/about_2.jpg'
function AboutContaint() {
  return (
<div className="main-Containt">

<div className="row">

<div className="about-col">
<h2>ABOUT US</h2>
    <h1>Explore All Corners of The World With Us</h1>
    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. <br /></p> <br />
    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

    <button className='btn'>Read More</button>

  </div>

  <div className="about-col">
    <img className='img-1' src={About1} alt={"About"} />
    <img className='img-2' src={About2} alt={"About"} />
  </div>

</div>


</div>

  )
}

export default AboutContaint