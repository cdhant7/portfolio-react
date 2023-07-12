import { useState } from 'react'
import PortfolioList from '../porfolioList/PortfolioList'
import './portfolio.scss'

function Portfolio() {
  const [selected,setSelected]=useState("featured")
  const list=[
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ]
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
       {list.map(item=>(
        <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
       ))}
      </ul>

    <div className="container">
      <div className="item">
        <img src="https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
        <h3>Banking App</h3>
      </div>
      <div className="item">
        <img src="https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
        <h3>Banking App</h3>
      </div>
      <div className="item">
        <img src="https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
        <h3>Banking App</h3>
      </div>
      <div className="item">
        <img src="https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
        <h3>Banking App</h3>
      </div>
      <div className="item">
        <img src="https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
        <h3>Banking App</h3>
      </div>
      <div className="item">
        <img src="https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
        <h3>Banking App</h3>
      </div>
    </div>
      
    </div>
  )
}

export default Portfolio

