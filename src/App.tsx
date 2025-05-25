import { Grid, GridItem, Spinner, Stack } from '@chakra-ui/react'
import './App.css'
import Nav from './components/Nav'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'

import usePlatforms from './components/hooks/usePlatforms'
import PlatformMenu from './components/PlatformMenu'
import type GameQuery from './models/game-query'
import { text } from 'framer-motion/client'

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const { data: platforms, error, isLoading } = usePlatforms();
  return (isLoading) ? <Spinner /> :
    (<>
      <Grid templateAreas={{
        base: `'nav' 'main'`,
        md: `'nav nav' 'aside main'`
      }} >
        <GridItem area="nav" >
          <Nav searchSubmitter={(text) => setGameQuery({...gameQuery, search: text})}></Nav>
        </GridItem>
        <Stack hideBelow={"md"}>
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genreName}
              onSelectGenre={(genreName: string | null) =>
                setGameQuery({ ...gameQuery, genreName })
              }
            />
          </GridItem>
        </Stack>
        <GridItem area="main" paddingX="5" >
          <PlatformMenu onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
            selectedPlatform={gameQuery.platform} />
          <GameGrid gameQuery={gameQuery} /></GridItem>
      </Grid>
    </>
    )
}

export default App
