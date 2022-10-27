import { useState } from "react";

import { Avatar, Box } from "@mui/material";

import Amanda from "../../assets/Developers/Amanda.png";
import Daniel from "../../assets/Developers/Daniel.png";
import Gui from "../../assets/Developers/Gui.png";
import Higor from "../../assets/Developers/Higor.png";
import Nat from "../../assets/Developers/Nat.png";
import Nicholas from "../../assets/Developers/Nicholas.png";
import DevInfoOnHover from "../DevInfoOnHover";
import { Container } from "./styles";

const Developers = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-evenly", width: "90%" }}>
      <Container>
        <Avatar
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          variant="circular"
          sx={{
            height: "105px",
            width: "103px",
          }}
          src={Gui}
          alt="Cat Logo"
        />

        {isHovering && (
          <div>
            <DevInfoOnHover
              github="https://github.com/ahmandi"
              linkedin="https://www.linkedin.com/in/arsamanda/"
            />
          </div>
        )}
      </Container>

      <Container>
        <Avatar
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          variant="circular"
          sx={{ height: "105px", width: "103px" }}
          src={Nat}
          alt="Cat Logo"
        />
        {isHovering && (
          <DevInfoOnHover
            github="https://github.com/ahmandi"
            linkedin="https://www.linkedin.com/in/arsamanda/"
          />
        )}
      </Container>

      <Container>
        <Avatar
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          variant="circular"
          sx={{ height: "105px", width: "103px" }}
          src={Amanda}
          alt="Cat Logo"
        />
        {isHovering && (
          <DevInfoOnHover
            github="https://github.com/ahmandi"
            linkedin="https://www.linkedin.com/in/arsamanda/"
          />
        )}
      </Container>

      <Container>
        <Avatar
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          variant="circular"
          sx={{ height: "105px", width: "103px" }}
          src={Nicholas}
          alt="Cat Logo"
        />
        {isHovering && (
          <DevInfoOnHover
            github="https://github.com/ahmandi"
            linkedin="https://www.linkedin.com/in/arsamanda/"
          />
        )}
      </Container>

      <Container>
        <Avatar
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          variant="circular"
          sx={{ height: "105px", width: "103px" }}
          src={Daniel}
          alt="Cat Logo"
        />
        {isHovering && (
          <DevInfoOnHover
            github="https://github.com/ahmandi"
            linkedin="https://www.linkedin.com/in/arsamanda/"
          />
        )}
      </Container>

      <Container>
        <Avatar
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          variant="circular"
          sx={{ height: "105px", width: "103px" }}
          src={Higor}
          alt="Cat Logo"
        />
        {isHovering && (
          <DevInfoOnHover
            github="https://github.com/ahmandi"
            linkedin="https://www.linkedin.com/in/arsamanda/"
          />
        )}
      </Container>
    </Box>
  );
};

export default Developers;
