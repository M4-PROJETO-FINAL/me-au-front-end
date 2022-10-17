import CustomerReviews from "../../components/CustomerReviews";
import TitleRooms from "../../components/RoomsTitles";
import RoomSection from "../../components/RoomsCards";

const Home = () => {
  return (
    <div>
      <TitleRooms />
      <RoomSection />
      <CustomerReviews />
    </div>
  );
};

export default Home;
