import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Works from './components/works/Works'
import Contacts from './components/contacts/Contacts'
import './app.scss'


function App() {
  return (
    <div className="app">
      
      <Topbar/>
    <div className="sections">
      
      <Intro/>
      <Portfolio/>
      <Testimonials/>
      <Works/>
      <Contacts/>
    </div>
      </div>
  );
}

export default App;
