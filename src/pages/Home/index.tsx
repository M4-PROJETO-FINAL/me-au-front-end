import BannerDashboard from "../../components/BannerDashboard";
import CustomerReviews from "../../components/CustomerReviews";
import TitleRooms from "../../components/RoomsTitles";

const Home = () => {
  return (
    <div>
      <BannerDashboard />
      <TitleRooms />
      <CustomerReviews />
    </div>
  );
};

export default Home;
