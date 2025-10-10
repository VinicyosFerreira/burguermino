import Header from './components/Header';
import Slogan from './components/Slogan';
import MainBurgers from './components/MainBurgers';
import PromotionCampaign from './components/PromotionCampaign';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Slogan />
      <MainBurgers />
      <div className="flex mx-auto items-center w-[85%] my-14 gap-4">
        <PromotionCampaign />
        <LocationMap />
      </div>
      <Footer />
    </div>
  );
}

export default App;
