import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/gameGrid";

function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //large 1024px
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">Aside</GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
