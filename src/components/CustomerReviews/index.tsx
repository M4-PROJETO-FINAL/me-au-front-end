import { useTranslation } from "react-i18next";

import Customer1 from "../../assets/CustomerPictures/customer1.png";
import Customer2 from "../../assets/CustomerPictures/customer2.jpg";
import Customer3 from "../../assets/CustomerPictures/customer3.jpg";
import Customer4 from "../../assets/CustomerPictures/customer4.jpg";
import Review from "./Review";
import { IReview } from "./Review";
import { StyledSection } from "./styles";

const CustomerReviews = () => {
  const { t } = useTranslation();

  const reviews: IReview[] = [
    {
      customerName: "Rafael Mendes",
      customerImg: Customer1,
      stars: 4.5,
      reviewText:
        "Ambiente agradável, boa localização, Ótima equipe, pronta para atender. Indico e pretendo retornar!",
    },
    {
      customerName: "Elvis the king",
      customerImg: Customer2,
      stars: 5,
      reviewText: "Adorei o meu quartinho, digno de um rei!",
    },
    {
      customerName: "Julia C.",
      customerImg: Customer3,
      stars: 4.5,
      reviewText:
        "A equipe sempre é muito atenciosa com meus pets. Já hospedei meu labrador Scooby e minha gatinha Jerrys, os dois amaram a experiência!",
    },
    {
      customerName: "João Pedro",
      customerImg: Customer4,
      stars: 4,
      reviewText:
        "Com tantos serviços de qualidade (spa, piscina, massagem), o único defeito é não hospedar pessoas!",
    },
  ];

  return (
    <StyledSection>
      <h3>{t("Avaliações dos nossos clientes")}</h3>
      <ul>
        {reviews.map((review, idx) => (
          <Review key={idx} reviewData={review} />
        ))}
      </ul>
    </StyledSection>
  );
};

export default CustomerReviews;
