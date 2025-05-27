import { Box, Grid, GridItem, Stack } from '@chakra-ui/react'
import './App.css'
import Nav from './components/Nav'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import PlatformMenu from './components/PlatformMenu'
import OrderingMenu from './components/OrderingMenu'
import GenreMenu from './components/GenreMenu'

function App() {

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
          <Nav/>
        </GridItem>
        <Stack hideBelow={"md"}>
          <GridItem area="aside" paddingX={5} >
            <GenreList/>
          </GridItem>
        </Stack>
        <GridItem area="main" paddingX="5">
          <Box display={'flex'} gap={2} width="100%">
            <PlatformMenu/>
            <OrderingMenu/>
            <Stack hideBelow={"sm"} hideFrom={"md"}>
              <GenreMenu/>
            </Stack>
          </Box>
          <GameGrid /></GridItem>
      </Grid>
    </>
  )
}

export default App
