import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { getAccordionSummaryUtilityClass } from "@mui/material";

import { IRoomTypeResponse } from "../../interfaces/Reservations";
import { api } from "../../services";

interface IUnvailableDatesContext {
  unvailableDates?: string[];
}

interface IProviderProps {
  children: React.ReactNode;
}

const ReservationCancelContext = createContext({} as IUnvailableDatesContext);

export const UnvailableDatesContextProvider = ({
  children,
}: IProviderProps) => {
  const urlPath = useLocation().pathname;
  const [allRoomTypes, setAllRoomTypes] = useState<IRoomTypeResponse[]>([]);
  const [unvailableDates, setUnvailableDates] = useState<string[]>();

  useEffect(() => {
    // ao abrir/fechar modal, reseta lista de pets selecionados e busca lista de serviços e tipos de quartos
    api
      .get<IRoomTypeResponse[]>("/roomstypes")
      .then((res) => setAllRoomTypes(res.data))
      .catch((err) => {
        console.log("error fetching rooms types:");
      });
  }, []);

  useEffect(() => {
    const sharedRoomId = allRoomTypes.find(
      (roomType) => roomType.title === "Quarto Compartilhado",
    )?.id;
    const dogRoomId = allRoomTypes.find(
      (roomType) => roomType.title === "Quarto Privativo (cães)",
    )?.id;
    const catRoomId = allRoomTypes.find(
      (roomType) => roomType.title === "Quarto Privativo (gatos)",
    )?.id;
    let actualRoomId: string | undefined;
    if (urlPath.includes("shared")) {
      actualRoomId = sharedRoomId;
    } else if (urlPath.includes("dogs")) {
      actualRoomId = dogRoomId;
    } else if (urlPath.includes("cats") && allRoomTypes) {
      actualRoomId = catRoomId;
    }
    if (actualRoomId) {
      api.get(`/rooms/dates/${actualRoomId}`).then((res) => {
        setUnvailableDates(res.data);
      });
    }
  }, [allRoomTypes]);

  return (
    <ReservationCancelContext.Provider
      value={{
        unvailableDates,
      }}
    >
      {children}
    </ReservationCancelContext.Provider>
  );
};

export const useUnvailableDatesContext = () =>
  useContext(ReservationCancelContext);
