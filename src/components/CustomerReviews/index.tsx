import { useTranslation } from "react-i18next";
import Customer1 from "../../assets/CustomerPictures/customer1.png";
import Review from "./Review";
import { IReview } from "./Review";
import { StyledSection } from "./styles";

const CustomerReviews = () => {
  const {t} = useTranslation();

  const reviews: IReview[] = [
    {
      customerName: "Rafael Mendes",
      customerImg: Customer1,
      stars: 4.5,
      reviewText:
        "Ambiente agradável, boa localização, Ótima equipe, pronta para atender. Indico e pretendo retornar! a área do banho (chuveiro) achei um pouco pequeno o espaço e escorregadio. sinal e qualidade de internet eram excelentes",
    },
    {
      customerName: "Gabriela de Oliveira",
      customerImg: Customer1,
      stars: 5,
      reviewText: "Muuuuito bom, amei tudo!",
    },
    {
      customerName: "Guilherme",
      customerImg: Customer1,
      stars: 4.5,
      reviewText:
        "A equipe sempre é muito atenciosa com meus pets. Já hospedei meu labrador Dorivaldo e minha gatinha Joana, e os dois amaram a experiência!",
    },
    {
      customerName: "João Pedro",
      customerImg: Customer1,
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
