import './works.scss'

function Works() {
  const data=[
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },

  ]
  return (
    <div className='works' id='works'>
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets\pexels-thought-catalog-2228569.jpg" alt="" />
                </div>
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus numquam eaque rerum autem saepe quo perferendis mollitia ipsum commodi repellat veritatis quaerat, itaque veniam quae tempore temporibus explicabo illo cupiditate.</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="https://imagekit.io/blog/content/images/2021/07/Resize-in-JS.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <img src="assets\pexels-martin-de-arriba-11506752.jpg" className='arrow left' alt="" />
      <img src="assets\pexels-martin-de-arriba-11506752.jpg" className='arrow right' alt="" />
    </div>
  )
}

export default Works
