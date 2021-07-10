import GettingStarted from './gettingStarted';
import './App.css';
import Nav from './nav';
import RoundedLink from './roundedlink';
import Hero from './hero';
import Favourites from './favourites';
import EndlessExtras from './endlessExtras';
import EarnStars from './earnStars';
import StarCodes from './starcode';
import Question from './questions';
import Restrictions from './restrictions';
import Footer from './footer';
function App() {
  return (
    <div>
    <Nav/>
      
      <Hero/>
      <GettingStarted />
      <Favourites />
      <EndlessExtras />
      <EarnStars />
      <StarCodes />
      <Question />
      <Restrictions />
      <Footer/>
    </div>
    
  );
}

export default App;
