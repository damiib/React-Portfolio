import './App.css';
import nav from './screens/navBAr/navBar'
import Radium, {StyleRoot} from 'radium';
import Header from './screens/header/Header';
import AboutMe from './screens/header/aboutMe/AboutMe';

// App is our main component at the top level of our App that references other components
function navBAr() {
  return <div>
   < nav/>
   <Header/>
   <StyleRoot/>
   <AboutMe/>
  </div> 
}

// Here we export the App component so that it can be made available in `index.js`
export default App;
