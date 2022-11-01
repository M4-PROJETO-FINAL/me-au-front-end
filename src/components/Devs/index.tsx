import { Avatar, Box } from "@mui/material";

import Amanda from "../../assets/Developers/Amanda.png";
import Daniel from "../../assets/Developers/Daniel.png";
import Gui from "../../assets/Developers/Gui.png";
import Higor from "../../assets/Developers/Higor.png";
import Nat from "../../assets/Developers/Nat2.0.jpeg";
import Nicholas from "../../assets/Developers/Nicholas.png";
import DevInfoOnHover from "../DevInfoOnHover";
import { Container } from "./styles";

const Developers = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-evenly", width: "90%" }}>
      <Container>
        <Avatar
          variant="circular"
          sx={{
            height: "105px",
            width: "103px",
          }}
          src={Gui}
          alt="Cat Logo"
        />

        <div className="IconsOnHover">
          <DevInfoOnHover
            github="https://github.com/ahmandi"
            linkedin="https://www.linkedin.com/in/arsamanda/"
          />
        </div>
      </Container>

      <Container>
        <Avatar
          variant="circular"
          sx={{ height: "105px", width: "103px" }}
          src={Nat}
          alt="Cat Logo"
        />

        <div className="IconsOnHover">
          <DevInfoOnHover
            github="https://github.com/NataliaCavicchioli"
            linkedin="https://www.linkedin.com/in/natalia-cavicchioli"
          />
        </div>
      </Container>

      <Container>
        <Avatar
          variant="circular"
          sx={{ height: "105px", width: "103px" }}
          src={Amanda}
          alt="Cat Logo"
        />
        <div className="IconsOnHover">
          <DevInfoOnHover
            github="https://github.com/ahmandi"
            linkedin="https://www.linkedin.com/in/arsamanda/"
          />
        </div>
      </Container>

      <Container>
        <Avatar
          variant="circular"
          sx={{ height: "105px", width: "103px" }}
          src={Nicholas}
          alt="Cat Logo"
        />
        <div className="IconsOnHover">
          <DevInfoOnHover
            github="https://github.com/ahmandi"
            linkedin="https://www.linkedin.com/in/arsamanda/"
          />
        </div>
      </Container>

      <Container>
        <Avatar
          variant="circular"
          sx={{ height: "105px", width: "103px" }}
          src={Daniel}
          alt="Cat Logo"
        />
        <div className="IconsOnHover">
          <DevInfoOnHover
            github="https://github.com/ahmandi"
            linkedin="https://www.linkedin.com/in/arsamanda/"
          />
        </div>
      </Container>

      <Container>
        <Avatar
          variant="circular"
          sx={{ height: "105px", width: "103px" }}
          src={Higor}
          alt="Cat Logo"
        />
        <div className="IconsOnHover">
          <DevInfoOnHover
            github="https://github.com/ahmandi"
            linkedin="https://www.linkedin.com/in/arsamanda/"
          />
        </div>
      </Container>
    </Box>
  );
};

export default Developers;
