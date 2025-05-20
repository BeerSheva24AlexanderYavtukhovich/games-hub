import { HStack,Image } from '@chakra-ui/react'
import logo from '../assets/image.png'
import { ColorModeButton } from './ui/color-mode'

const Nav = () => {
    return (
        <HStack justifyContent={"space-between"}>
            <Image src={logo} boxSize={"36px"}></Image>
            <ColorModeButton></ColorModeButton>
        </HStack>
    )
}

export default Nav