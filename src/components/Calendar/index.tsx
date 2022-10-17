import * as React from "react";
import { useTranslation } from "react-i18next";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";

import "dayjs/locale/pt-br";

const Calendar = () => {
  const { t } = useTranslation();

  dayjs.locale(t("Calendar locale")); // use loaded locale globally

  // Aqui receberemos um array com as datas, e precisaremos trata-las da forma abaixo! Utilizando a biblioteca days.js dá pra dar um .format("DD/MM/YYYY") e fazer um array parecido com o de baixo!;
  const blackoutDates = [
    "14/09/2022",
    "04/10/2022",
    "15/10/2022",
    "16/10/2022",
    "17/10/2022",
    "25/10/2022",
  ];

  const [checkinDate, setCheckinDate] = React.useState<Dayjs | null>(null);
  const [checkoutDate, setCheckoutDate] = React.useState<Dayjs | null>(null);

  const getDisabledDates = (date: dayjs.Dayjs | string) => {
    date = dayjs(date).format("DD/MM/YYYY");
    return blackoutDates.includes(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3} sx={{ "padding-top": "20px" }}>
        <DatePicker
          disablePast={true}
          views={["day"]}
          label="Check-in"
          shouldDisableDate={(date) => getDisabledDates(date)}
          InputProps={{ style: { width: "280px" } }}
          value={checkinDate}
          onChange={(newValue) => {
            setCheckinDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
        <DatePicker
          disablePast={true}
          views={["day"]}
          label="Check-out"
          shouldDisableDate={(date) => getDisabledDates(date)}
          InputProps={{ style: { width: "280px" } }}
          value={checkoutDate}
          onChange={(newValue) => {
            setCheckoutDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default Calendar;
