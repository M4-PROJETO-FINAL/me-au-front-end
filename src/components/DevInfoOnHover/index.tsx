import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "@mui/material";

import { Container } from "./styles";

export interface ILinks {
  github: string;
  linkedin: string;
}

const DevInfoOnHover = ({ github, linkedin }: ILinks) => {
  return (
    <Container>
      <Link target="_blank" rel="noreferrer" href={github}>
        <GitHubIcon sx={{ color: "black" }} />
      </Link>

      <Link target="_blank" rel="noreferrer" href={linkedin}>
        <LinkedInIcon sx={{ color: "blue" }} />
      </Link>
    </Container>
  );
};

export default DevInfoOnHover;
