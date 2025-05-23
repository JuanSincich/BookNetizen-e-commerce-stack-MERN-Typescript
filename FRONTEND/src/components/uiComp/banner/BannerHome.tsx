import { Container } from "@mui/material";
import BannerBox from "./BannerBox";

export default function BannerHome() {
  return (
    <Container disableGutters>
      <BannerBox flexDirection="row" />
    </Container>
  );
}
