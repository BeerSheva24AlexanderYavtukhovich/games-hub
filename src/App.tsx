import { Grid, GridItem, Spinner, Stack } from '@chakra-ui/react'
import './App.css'
import Nav from './components/Nav'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'

import usePlatforms from './components/hooks/usePlatforms'
import PlatformMenu from './components/PlatformMenu'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const { data: platforms, error, isLoading } = usePlatforms();
  return (isLoading) ? <Spinner /> :
    (<>
      <Grid templateAreas={{
        base: `'nav' 'main'`,
        md: `'nav nav' 'aside main'`
      }} >
        <GridItem area="nav" >
          <Nav></Nav>
        </GridItem>
        <Stack hideBelow={"md"}>
          <GridItem area="aside" paddingX={5}>
            <GenreList
              onSelectGenre={(genreName: string) => setSelectedGenre(genreName)}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Stack>
        <GridItem area="main" paddingX="5" >
          <PlatformMenu platforms={platforms} />
          <GameGrid selectedGenre={selectedGenre} /></GridItem>
      </Grid>
    </>
    )
}

export default App
