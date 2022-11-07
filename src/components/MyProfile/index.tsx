import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TbEdit } from "react-icons/tb";

import { useUserContext } from "../../contexts/UserContext";
import { UserReviewContextProvider } from "../../contexts/UserReviewContext";
import AnimationCat from "./Animation";
import ModalEditProfile from "./ModalEditProfile";
import { ContainerProfile } from "./styles";

const MyProfile = () => {
  const { t } = useTranslation();
  const { user } = useUserContext();
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  const openModalEditProfile = () => {
    setIsOpenEditModal(true);
  };

  const closeModalEditProfile = () => {
    setIsOpenEditModal(false);
  };

  return (
    <UserReviewContextProvider>
      <ContainerProfile>
        <div className="card-profile">
          <div className="box-icon">
            <button onClick={() => openModalEditProfile()}>
              <TbEdit />
            </button>
          </div>
          <div className="box-border">
            <div className="box-info">
              <p>{t("Nome")}:</p>
              <span className="box-info-data">{user?.name}</span>
            </div>
            <div className="box-info">
              <p>Email:</p>
              <span className="box-info-data">{user?.email}</span>
            </div>
            <div className="box-info">
              <p>{t("Senha")}:</p>
              <span className="box-info-data">********</span>
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
    </UserReviewContextProvider>
  );
};

export default MyProfile;
