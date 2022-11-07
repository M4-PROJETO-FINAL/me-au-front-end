import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { makeStyles } from "@material-ui/core/styles";
import { FormControl, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { changeLanguage } from "i18next";

import bandeiraBR from "../../assets/bandeiraBR.png";
import bandeiraUS from "../../assets/bandeiraUS.png";
import { Bandeiras, Links } from "./styles";

const useStyles = makeStyles(() => ({
  margin: {
    marginRight: "auto",
    fontFamily: "Public Sans",
    fontWeight: 400,
    fontSize: "16px",
  },
}));

const defaultMenu = () => {
  const styles = useStyles();
  const { t } = useTranslation();
  const [isOpenMenuTranslate, setIsOpenMenuTranslate] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<"pt" | "en">("pt");

  useEffect(() => {
    changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedLanguage(event.target.value as "en" | "pt");
  };

  return (
    <>
      <Links to={"/accommodations/all"}>{t("Acomodações")}</Links>
      <Links to={"/contact"}>{t("Contato")}</Links>

      <Bandeiras className={styles.margin}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select
            onOpen={() => setIsOpenMenuTranslate(true)}
            value={selectedLanguage}
            onChange={handleChange}
          >
            <MenuItem value="pt">
              <img src={bandeiraBR} alt="Bandeira do Brasil" /> PT-BR
            </MenuItem>
            <MenuItem value="en">
              <img src={bandeiraUS} alt="Bandeira dos Estados Unidos" /> ENG
            </MenuItem>
          </Select>
        </FormControl>
      </Bandeiras>
    </>
  );
};

export default defaultMenu;
