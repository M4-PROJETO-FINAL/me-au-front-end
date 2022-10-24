export {};

// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { Link, useNavigate } from "react-router-dom";

// import FormControl from "@mui/material/FormControl";
// import MenuItem from "@mui/material/MenuItem";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
// import { motion, useTransform } from "framer-motion";
// import { changeLanguage } from "i18next";

// import bandeiraBR from "../../assets/bandeiraBR.png";
// import bandeiraUS from "../../assets/bandeiraUS.png";
// import Logo from "../../assets/Group 22.svg";
// import { Button } from "../Button/style";
// import LoginAndRegister from "../LoginAndRegister";
// import { Container, Bandeiras } from "./styles";

// const Header = () => {
//   const [openFormLogin, setOpenFormLogin] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState<"pt" | "en">("pt");
//   const navigate = useNavigate();
//   const { t } = useTranslation();

//   useEffect(() => {
//     changeLanguage(selectedLanguage);
//   }, [selectedLanguage]);

//   const handleChange = (event: SelectChangeEvent) => {
//     setSelectedLanguage(event.target.value as "en" | "pt");
//   };

//   const handleClickOpen = () => {
//     setOpenFormLogin(true);
//   };

//   const handleClose = () => {
//     setOpenFormLogin(false);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 1 }}
//     >
//       <Container>
//         <img onClick={() => navigate("/")} src={Logo} alt="Cat Logo" />

//         <ul>
//           <li>{t("Serviços")}</li>
//           <Link to="/accommodations/all">{t("Acomodações")}</Link>
//           <Link to="/contact">{t("Contato")}</Link>
//         </ul>

//         <Bandeiras>
//           <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
//             <Select
//               labelId="demo-select-small"
//               id="demo-select-small"
//               value={selectedLanguage}
//               onChange={handleChange}
//             >
//               <MenuItem value="pt">
//                 <img src={bandeiraBR} alt="Bandeira do Brasil" /> PT-BR
//               </MenuItem>
//               <MenuItem value="en">
//                 <img src={bandeiraUS} alt="Bandeira dos Estados Unidos" /> ENG
//               </MenuItem>
//             </Select>
//           </FormControl>
//         </Bandeiras>

//         <div className="button--container">
//           <Button
//             backgroundColor="rgba(var(--aquaLight), 1)"
//             color="rgba(var(--white), 1)"
//             height="2.5rem"
//             width="9.1875rem"
//             fontSize=".875rem"
//             fontWeight="600"
//             borderRadius=".9375rem"
//             onClick={() => handleClickOpen()}
//           >
//             {t("Login ou registro")}
//           </Button>
//         </div>
//         <LoginAndRegister
//           openFormLogin={openFormLogin}
//           handleClose={handleClose}
//         />
//       </Container>
//     </motion.div>
//   );
// };
