import { Avatar } from "@mui/material";
import Amanda from "../../assets/Developers/ama2.0.jpeg";
import Daniel from "../../assets/Developers/dan2.0.png";
import Gui from "../../assets/Developers/gui2.0.jpeg";
import Higor from "../../assets/Developers/hig2.0.jpeg";
import Nat from "../../assets/Developers/Nat2.0.jpeg";
import Nicholas from "../../assets/Developers/nic2.0.jpeg";
import Sofia from "../../assets/Developers/Sofia.jpeg";
import Jasmyne from "../../assets/Developers/Jasmyne.png";
import DevInfoOnHover from "../DevInfoOnHover";
import { Box, Container } from "./styles";

const Developers = () => {
  return (
    <Box>
      <Container>
        <Avatar
          variant="circular"
          sx={{
            height: "125px",
            width: "123px",
          }}
          src={Gui}
          alt="Cat Logo"
        />

        <div className="IconsOnHover">
          <DevInfoOnHover
            github="https://github.com/guiwustro"
            linkedin="https://www.linkedin.com/in/guilhermewustro/"
          />
        </div>
      </Container>

      <Container>
        <Avatar
          variant="circular"
          sx={{ height: "125px", width: "123px" }}
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
          sx={{ height: "125px", width: "123px" }}
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
          sx={{ height: "125px", width: "123px" }}
          src={Nicholas}
          alt="Cat Logo"
        />
        <div className="IconsOnHover">
          <DevInfoOnHover
            github="https://github.com/nicholas1301"
            linkedin="https://www.linkedin.com/in/nicholas-engelbert/"
          />
        </div>
      </Container>

      <Container>
        <Avatar
          variant="circular"
          sx={{ height: "125px", width: "123px" }}
          src={Daniel}
          alt="Cat Logo"
        />
        <div className="IconsOnHover">
          <DevInfoOnHover
            github="https://github.com/danmatuoka"
            linkedin="https://www.linkedin.com/in/danielmatuoka/"
          />
        </div>
      </Container>

      <Container>
        <Avatar
          variant="circular"
          sx={{ height: "125px", width: "123px" }}
          src={Higor}
          alt="Cat Logo"
        />
        <div className="IconsOnHover">
          <DevInfoOnHover
            github="https://github.com/HigorSkw"
            linkedin="https://www.linkedin.com/in/higorskw/"
          />
        </div>
      </Container>
      <Container>
        <Avatar
          variant="circular"
          sx={{ height: "125px", width: "123px" }}
          src={Jasmyne}
          alt="Cat Logo"
        />
        <div className="IconsOnHover">
          <DevInfoOnHover
            github="https://github.com/jasmynels"
            linkedin="https://www.linkedin.com/in/jasmynelsx/"
          />
        </div>
      </Container>
      <Container>
        <Avatar
          variant="circular"
          sx={{ height: "125px", width: "123px" }}
          src={Sofia}
          alt="Cat Logo"
        />
        <div className="IconsOnHover">
          <DevInfoOnHover
            github="https://github.com/sofiaalage"
            linkedin="https://www.linkedin.com/in/sofiaalexandrino/"
          />
        </div>
      </Container>
    </Box>
  );
};

export default Developers;
