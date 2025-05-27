import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/image.png'
import { ColorModeButton } from './ui/color-mode'
import SearchBar from './SearchBar'
import type { FC } from 'react'

const Nav: FC = () => {
    return (
        <HStack padding={3} >
            <Image src={logo} boxSize={"36px"} />
            <SearchBar />
            <ColorModeButton />
        </HStack>
    )
}

export default Nav