import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

import { Tooltip, IconButton } from "@mui/material";

import cat from "../../../../assets/PetPictures/cat.png";
import docile from "../../../../assets/PetPictures/docile.png";
import dog from "../../../../assets/PetPictures/dog.png";
import neutered from "../../../../assets/PetPictures/neutered.png";
import isNotDocile from "../../../../assets/PetPictures/notdocile.png";
import isNotNeutered from "../../../../assets/PetPictures/notneutered.png";
import isNotVaccinated from "../../../../assets/PetPictures/notvaccinated.png";
import vaccinated from "../../../../assets/PetPictures/vaccinated.png";
import { useReservationContext } from "../../../../contexts/ReservationContext";
import { PetItem, PetList, PetIcons, NotPetsContainer } from "./styles";

const PetMocked = [
  {
    id: "20d69669-700d-4a1e-b492-ae1ed6e95b31",
    age: 2,
    docile: true,
    neutered: false,
    vaccinated: true,
    name: "Mimoso",
    type: "cat",
  },
  {
    id: "643468d7-9192-4f6c-922f-c51abbaed3f3",
    age: 2,
    docile: false,
    neutered: true,
    vaccinated: false,
    name: "Doguinho",
    type: "dog",
  },
];

const ChoosePet = () => {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const { selectPet, selectedPets } = useReservationContext();
  //   PetMocked = [];
  if (!PetMocked || PetMocked.length === 0) {
    return (
      <NotPetsContainer>
        <h4>Cadastre um pet usando o formulário abaixo</h4>
      </NotPetsContainer>
    );
  }
  return (
    <PetList>
      {PetMocked.map((pet) => {
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
                    src={pet.vaccinated ? vaccinated : isNotVaccinated}
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
                    src={pet.docile ? docile : isNotDocile}
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
                    src={pet.neutered ? neutered : isNotNeutered}
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
