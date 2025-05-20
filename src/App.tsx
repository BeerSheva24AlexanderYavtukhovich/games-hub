import { Grid, GridItem, Stack } from '@chakra-ui/react'
import './App.css'
import Nav from './components/Nav'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'

function App() {

  return (
    <>
    <Grid templateAreas={{
          base: `'nav' 'main'`,
          md: `'nav nav' 'aside main'`
        }} >
          <GridItem area="nav" >
            <Nav></Nav>
          </GridItem>
          <Stack hideBelow={"md"}>
             <GridItem area="aside" paddingX={5}><GenreList onSelectGenre={(genreName:string) => console.log(genreName)}/></GridItem>
          </Stack>
         
          <GridItem area="main" paddingX="5" ><GameGrid/></GridItem>

    </Grid>
    </>
  )
}

export default App
