import { Box, Grid, Show, GridItem, Flex } from "@chakra-ui/react"
import GameGrid from "../components/GameGrid"
import GameHeading from "../components/GameHeading"
import GenreList from "../components/GenreList"
import PlatformSelector from "../components/PlatformSelector"
import SortSelector from "../components/SortSelector"

const HomePage = () => {
	return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "300px 1fr",
      }}
      gap="1"
      fontWeight="bold"
    >
      <Show above="lg">
        <GridItem paddingX={5} pl="2" area={"aside"}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex paddingLeft={2} marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
	)
}

export default HomePage