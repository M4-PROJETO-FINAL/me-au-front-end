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
        <Services
          params={{
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination .swiper-pagination-clicable .swiper-pagination-bullets .swiper-pagination-horizontal",
              clickable: true,
            },
          }}
          modules={[Pagination]}
        />
      </Box>
      <CustomerReviews />
    </div>
  );
};

export default Home;
