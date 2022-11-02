import { useState } from "react";
import { TbEdit } from "react-icons/tb";

import AnimationCat from "./Animation";
import ModalEditProfile from "./ModalEditProfile";
import { ContainerProfile } from "./styles";

const MyProfile = () => {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  const openModalEditProfile = () => {
    setIsOpenEditModal(true);
  };

  const closeModalEditProfile = () => {
    setIsOpenEditModal(false);
  };

  return (
    <ContainerProfile>
      <div className="card-profile">
        <div className="box-icon">
          <button onClick={() => openModalEditProfile()}>
            <TbEdit />
          </button>
        </div>
        <div className="box-border">
          <div className="box-info">
            <p>Nome:</p>
            <span className="box-info-data">Guilherme</span>
          </div>
          <div className="box-info">
            <p>Email:</p>
            <span className="box-info-data">guilherme@email.com</span>
          </div>
          <div className="box-info">
            <p>Senha:</p>
            <span className="box-info-data">********</span>
          </div>
          <div className="box-info">
            <p>Imagem de perfil:</p>
            <span className="box-info-data">www.google.com</span>
          </div>
        </div>
        <AnimationCat />
      </div>
      <ModalEditProfile
        isOpenEditModal={isOpenEditModal}
        openModalEditProfile={openModalEditProfile}
        closeModalEditProfile={closeModalEditProfile}
      />
    </ContainerProfile>
  );
};

export default MyProfile;
