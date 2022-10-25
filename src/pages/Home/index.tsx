import BannerDashboard from "../../components/BannerDashboard";
import CustomerReviews from "../../components/CustomerReviews";
import TitleRooms from "../../components/RoomsTitles";
import Services from "../../components/Services";


const Home = () => {
  return (
    <div>
      <BannerDashboard />
      <TitleRooms />
      <Services />
      <CustomerReviews />
    </div>
  );
};

export default Home;
