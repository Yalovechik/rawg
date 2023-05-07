import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";

function GameGrid() {
  const { games, error } = useGames();

  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding="15px"
      >
        {games.map((game) => (
          <GameCards key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
}

export default GameGrid;
