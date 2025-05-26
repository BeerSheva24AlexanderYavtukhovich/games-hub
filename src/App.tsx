import { Box, Grid, GridItem, Stack } from '@chakra-ui/react'
import './App.css'
import Nav from './components/Nav'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import PlatformMenu from './components/PlatformMenu'
import type GameQuery from './models/game-query'
import OrderingMenu from './components/OrderingMenu'
import GenreMenu from './components/GenreMenu'

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid templateAreas={{
        base: `'nav' 'main'`,
        md: `'nav nav' 'aside main'`
      }}
        gridTemplateColumns={{
          base: '1fr',
          md: 'auto 1fr'
        }} >
        <GridItem area="nav" >
          <Nav searchSubmitter={(text) => setGameQuery({ ...gameQuery, search: text })}></Nav>
        </GridItem>
        <Stack hideBelow={"md"}>
          <GridItem area="aside" paddingX={5} >
            <GenreList
              selectedGenre={gameQuery.genreName}
              onSelectGenre={(genreName: string | null) =>
                setGameQuery({ ...gameQuery, genreName })
              }
            />

          </GridItem>
        </Stack>
        <GridItem area="main" paddingX="5">
          <Box display={'flex'} gap={2} width="100%"><PlatformMenu onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
            selectedPlatform={gameQuery.platform} />
            <OrderingMenu
              selectedOrdering={gameQuery.ordering}
              onSelectOrdering={(ordering: string) =>
                setGameQuery({ ...gameQuery, ordering })
              }
            />
            <Stack hideBelow={"sm"} hideFrom={"md"}>
              <GenreMenu
                selectedGenre={gameQuery.genreName}
                onSelectGenre={(genreName: string | null) =>
                  setGameQuery({ ...gameQuery, genreName })
                }
              />
            </Stack>
          </Box>
          <GameGrid gameQuery={gameQuery} /></GridItem>
      </Grid>
    </>
  )
}

export default App
