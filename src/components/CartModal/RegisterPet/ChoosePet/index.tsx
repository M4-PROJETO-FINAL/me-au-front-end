import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

import { Tooltip, IconButton } from "@mui/material";

import cat from "../../../../assets/PetPictures/cat.png";
import isDocile from "../../../../assets/PetPictures/docile.png";
import dog from "../../../../assets/PetPictures/dog.png";
import isNeutered from "../../../../assets/PetPictures/neutered.png";
import isNotDocile from "../../../../assets/PetPictures/notdocile.png";
import isNotNeutered from "../../../../assets/PetPictures/notneutered.png";
import isNotVaccinated from "../../../../assets/PetPictures/notvaccinated.png";
import isVaccinated from "../../../../assets/PetPictures/vaccinated.png";
import { usePetContext } from "../../../../contexts/PetsContext";
import { useReservationContext } from "../../../../contexts/ReservationsContext/ReservationCreateContext";
import { PetItem, PetList, PetIcons, NotPetsContainer } from "./styles";

const ChoosePet = () => {
  const { t } = useTranslation();
  const { pets } = usePetContext();
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const { selectPet, selectedPets } = useReservationContext();
  if (!pets || pets.length === 0) {
    return (
      <NotPetsContainer>
        <h4>Cadastre um pet usando o formulário abaixo</h4>
      </NotPetsContainer>
    );
  }
  return (
    <PetList>
      {pets.map((pet) => {
        return (
          <PetItem
            key={pet.id}
            onClick={() => {
              selectPet(pet);
            }}
            selected={selectedPets?.map((p) => p.id).includes(pet.id) || false}
          >
            <div className="pet-image__container">
              <img src={pet.type === "cat" ? cat : dog} />
            </div>
            <h3>{pet.name}</h3>
            <PetIcons>
              <Tooltip
                title={pet.docile ? "Vacinado" : "Não é vacinado"}
                placement="top"
                arrow
              >
                <IconButton
                  style={
                    isDesktop
                      ? { width: 43, height: 43 }
                      : { width: 30, height: 30 }
                  }
                >
                  <img
                    src={pet.vaccinated ? isVaccinated : isNotVaccinated}
                    className="pet__icon"
                  />
                </IconButton>
              </Tooltip>
              <Tooltip
                title={pet.docile ? "Dócil" : "Não é dócil"}
                placement="top"
                arrow
              >
                <IconButton
                  style={
                    isDesktop
                      ? { width: 43, height: 43 }
                      : { width: 30, height: 30 }
                  }
                >
                  <img
                    src={pet.docile ? isDocile : isNotDocile}
                    className="pet__icon"
                  />
                </IconButton>
              </Tooltip>
              <Tooltip
                title={pet.docile ? "Castrado" : "Não é castrado"}
                placement="top"
                arrow
              >
                <IconButton
                  style={
                    isDesktop
                      ? { width: 43, height: 43 }
                      : { width: 30, height: 30 }
                  }
                >
                  <img
                    src={pet.neutered ? isNeutered : isNotNeutered}
                    className="pet__icon"
                  />
                </IconButton>
              </Tooltip>
            </PetIcons>
          </PetItem>
        );
      })}
    </PetList>
  );
};

export default ChoosePet;
