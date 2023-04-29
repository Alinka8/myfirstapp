import HeaderText from './components/headerText/HeaderText.jsx';
import GeneralText from './components/generalText/GeneralText';
import './App.css';

function App() {
  const schoolName = "Geek Network";
  let age= 18;
  const style = {
    backgroundColor: "green",
  }
  return (
    <>
    <GeneralText />
    <HeaderText />
    <inputField />

    </>
  );
  }


export default App;
