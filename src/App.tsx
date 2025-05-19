import { Grid, GridItem, Stack } from '@chakra-ui/react'
import './App.css'
function App() {

  return (
    <>
      <Grid gridTemplateAreas={{
        base: `'nav' 'main'`,
        md: `'nav nav' 'aside main'`
      }}>
        <GridItem area="nav" bg="gold">NAV</GridItem>
        <Stack hideBelow={"md"}>
          <GridItem area="aside" bg="coral">ASIDE</GridItem>
        </Stack>
        <GridItem area="main" bg="dodgerblue">MAIN</GridItem>
      </Grid>
    </>
  )
}

export default App
