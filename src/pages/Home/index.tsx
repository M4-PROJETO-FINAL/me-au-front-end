import { Box } from "@react-yuki/ui";
import { Pagination } from "swiper";

import CustomerReviews from "../../components/CustomerReviews";
import TitleRooms from "../../components/RoomsTitles";
import Services from "../../components/Services";

const Home = () => {
  return (
    <div>
      <TitleRooms />
      <Box>
        <Services />
      </Box>
      <CustomerReviews />
    </div>
  );
};

export default Home;
