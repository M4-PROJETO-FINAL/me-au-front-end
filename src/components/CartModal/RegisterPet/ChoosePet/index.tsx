import { useTranslation } from "react-i18next";

import { Tooltip, IconButton } from "@mui/material";

import cat from "../../../../assets/PetPictures/cat.png";
import isDocile from "../../../../assets/PetPictures/docile.png";
import dog from "../../../../assets/PetPictures/dog.png";
import isNeutered from "../../../../assets/PetPictures/neutered.png";
import isNotDocile from "../../../../assets/PetPictures/notdocile.png";
import isNotNeutered from "../../../../assets/PetPictures/notneutered.png";
import isNotVaccinated from "../../../../assets/PetPictures/notvaccinated.png";
import isVaccinated from "../../../../assets/PetPictures/vaccinated.png";
import { PetItem, PetList, PetIcons, NotPetsContainer } from "./styles";

interface IFormSchemaRegisterPet {
  name: string;
  type?: string;
  age: number;
  isVaccinated: string | boolean;
  isNeutered: string | boolean;
  isDocile: string | boolean;
}

const PetMocked = [
  {
    id: "20d69669-700d-4a1e-b492-ae1ed6e95b31",
    age: 2,
    isDocile: true,
    isNeutered: true,
    isVaccinated: true,
    name: "Mimoso",
    type: "cat",
  },
  {
    id: "643468d7-9192-4f6c-922f-c51abbaed3f3",
    age: 2,
    isDocile: false,
    isNeutered: false,
    isVaccinated: false,
    name: "Doguinho",
    type: "dog",
  },
];

const ChoosePet = () => {
  const { t } = useTranslation();

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
          <PetItem key={pet.id}>
            <div className="pet-image__container">
              <img src={pet.type === "cat" ? cat : dog} />
            </div>
            <h3>{pet.name}</h3>
            <PetIcons>
              <Tooltip
                title={pet.isDocile ? "Vacinado" : "Não é vacinado"}
                placement="top"
                arrow
              >
                <IconButton style={{ width: 43, height: 43 }}>
                  <img
                    src={pet.isVaccinated ? isVaccinated : isNotVaccinated}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip
                title={pet.isDocile ? "Dócil" : "Não é dócil"}
                placement="top"
                arrow
              >
                <IconButton style={{ width: 43, height: 43 }}>
                  <img src={pet.isDocile ? isDocile : isNotDocile} />
                </IconButton>
              </Tooltip>
              <Tooltip
                title={pet.isDocile ? "Castrado" : "Não é castrado"}
                placement="top"
                arrow
              >
                <IconButton style={{ width: 43, height: 43 }}>
                  <img src={pet.isNeutered ? isNeutered : isNotNeutered} />
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
