import BannerDashboard from "../../components/BannerDashboard";
import CustomerReviews from "../../components/CustomerReviews";
import Footer from "../../components/Footer";
import Services from "../../components/Services";

const Home = () => {
  return (
    <div>
      <BannerDashboard />
      <Services />
      <CustomerReviews />
      <Footer />
    </div>
  );
};

export default Home;
