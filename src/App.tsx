import { Container, Grid } from "@mui/material";
import { Header } from "./header.tsx";
import { Settings } from "./settings.tsx";
import { Pane } from "./reader/pane.tsx";

export const App = () => {
  return <Container>
    <Header />
    <Grid container spacing={0}>
      <Grid item xs={9}>
        <Pane />
      </Grid>
      <Grid item xs={3}>
        <Settings />
      </Grid>
    </Grid>
  </Container>
}
