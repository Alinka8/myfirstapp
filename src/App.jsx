import HeaderText from './components/headerText/HeaderText.jsx';
import GeneralText from './components/generalText/GeneralText';
import ContentText from './components/contentText/ContentText.jsx';
import FooterText from './components/footerText/FooterText.jsx';
import GeneralImage from './components/generalImage/GeneralImage.jsx';
import MainLinks from './components/mainLinks/MainLinks.jsx';
import NavBar from './components/navBar/NavBar.jsx';


import './App.css';

function App() {
  const schoolName = "Geek Network";
  let age = 18;
  const style = {
    backgroundColor: "green",
  }
return (
  <>
  <div>
    <ContentText />
    <FooterText/>
    <GeneralImage/>
    <MainLinks/>
    <NavBar/>
  </div>
  {/* <div>
  <h1>Geek Network</h1>
  <h2>{age + 10}</h2>
  {age < 21 && <h1>Sorry, you can't enter. 21 and older only</h1>}
  <p className="secondary-text">I am a developer</p>
  <button>Click here</button>
  </div> */}
  </>
)}


export default App;

