import './topbar.scss'
import {Person,Mail} from "@material-ui/icons"

function Topbar() {
  return (
    <div className='topbar'>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>Intro.</a>
          <div className="itemContainer">
            <Person className='icon'/>
            <span>+44 22 827 654</span>  
          </div>
          <div className="itemContainer">
            <Mail className='icon'/>
            <span>acharyasidhant@yahoo.com</span>  
          </div>
        </div>
        
        <div className="right">
        </div>
      </div>
    </div>
  )
}

export default Topbar;
