import BannerDashboard from "../../components/BannerDashboard";
import CustomerReviews from "../../components/CustomerReviews";
import Footer from "../../components/Footer";
import TitleRooms from "../../components/RoomsTitles";
import Services from "../../components/Services";

const Home = () => {
  return (
    <div>
      <BannerDashboard />
      <TitleRooms />
      <Services />
      <CustomerReviews />
      <Footer />
    </div>
  );
};

export default Home;
