import { useTranslation } from "react-i18next";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

import "dayjs/locale/pt-br";
import { useReservationContext } from "../../contexts/ReservationsContext/ReservationCreateContext";
import { useUnvailableDatesContext } from "../../contexts/UnvailableDatesContext";

const Calendar = () => {
  const { t } = useTranslation();
  const { checkinDate, checkoutDate, setCheckinDate, setCheckoutDate } =
    useReservationContext();

  dayjs.locale(t("Calendar locale")); // use loaded locale globally
  const { unvailableDates } = useUnvailableDatesContext();
  const unvailableDatesFormatted = unvailableDates?.map((date) =>
    date.slice(0, 10),
  );

  const afterDayCheckin = dayjs(checkinDate).add(1, "day");
  const getDisabledDates = (date: dayjs.Dayjs | string) => {
    date = dayjs(date).format("YYYY-MM-DD");
    if (unvailableDatesFormatted)
      return unvailableDatesFormatted.includes(date);
    return false;
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
          minDate={afterDayCheckin}
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
