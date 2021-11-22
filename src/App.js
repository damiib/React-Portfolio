
import './App.css';
import Navigation from './screens/navigationBar/navigationBar'
import FadeIn from 'react-fade-in'
import About from './screens/About/about'

function App() {
  return (
    <div className="App">
      <Navigation />
      <FadeIn/>
      <About/>
     </div>
  );
}

export default App;
