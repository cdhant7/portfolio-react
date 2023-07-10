import './intro.scss'

function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets\viber_image_2020-02-21_01-06-09.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>HI There I'M</h2>
          <h1>Sidhant Acharya</h1>
          <h3>Computer Science <span></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets\pexels-kelly-2833717.jpg" alt="" />
        </a>
      </div>
      
    </div>
  )
}

export default Intro

