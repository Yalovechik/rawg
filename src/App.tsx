import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/gameGrid";
import ListGenres from "./components/ListGenres";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, SetSelectedGenre] = useState<Genres | null>(null);
  const [selectedPlatform, SetSelectedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //large 1024px
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem paddingX={6} area="aside">
            <ListGenres
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => SetSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => SetSelectedPlatform(platform)}
          />
          <GameGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
