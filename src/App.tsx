import { Box, Button } from '@chakra-ui/react'
import './App.css'
import { ColorModeButton } from './components/ui/color-mode'
import { Tooltip } from './components/ui/tooltip'
import { Toaster, toaster } from './components/ui/toaster'
function App() {

  return (
    <>
      <ColorModeButton>
      </ColorModeButton>
      <Toaster></Toaster>
      <Tooltip content="box description" showArrow contentProps={{ backgroundColor: "blue" }}>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus facilis vitae quia temporibus cum. Soluta, rem deserunt dolorem iure a, dignissimos animi harum culpa sint unde labore, accusamus cupiditate.
        </Box>
      </Tooltip>
      <Button onClick={() => toaster.create({
        description: "File not saved",
        type: "warning",
        action: {
          label: "X",
          onClick: () => { }
        },

      })}>Save file</Button>
    </>
  )
}

export default App
