import { Box } from "@react-yuki/ui";
import { Pagination } from "swiper";

import CustomerReviews from "../../components/CustomerReviews";
<<<<<<< HEAD
import TitleRooms from "../../components/RoomsTitles";
import Services from "../../components/Services";
=======
>>>>>>> 0f7caae7d1a2beff2b0871f9d773404398a15db4

const Home = () => {
  return (
    <div>
<<<<<<< HEAD
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
=======
>>>>>>> 0f7caae7d1a2beff2b0871f9d773404398a15db4
      <CustomerReviews />
    </div>
  );
};

export default Home;
