import { Card, Image, Text, Badge, HStack, Center } from '@chakra-ui/react'
import React from 'react'
import type { Game } from '../models/fetch-game-types'
import Star from './Star'
import { FaImage } from 'react-icons/fa'
interface Props {
    game: Game
}
function getColors(metacritic: number): { color: string, bg: string } {
    return metacritic > 90 ? { color: "white", bg: "green" } : { color: "black", bg: "lightgray" }
}
const GameCard: React.FC<Props> = ({ game }) => {
    return (<Card.Root maxW="sm" overflow="hidden">

        {game.background_image ? (
            <Image
                src={game.background_image}
                alt={`image of game ${game.name}`}
                objectFit="cover"
                height="100%"
            />
        ) : (
            <Center height="100%" bg="gray.100">
                <FaImage size="40px" color="gray" />
            </Center>
        )}

        <Card.Body>
            <Card.Title>{game.name}</Card.Title>

        </Card.Body>
        <Card.Footer d="flex" flexDir="column" alignItems="flex-start">
            <HStack justifyContent={"space-between"} width="100%">
                <Text >{game.parent_platforms.map(p => p.platform.name).join("; ")}</Text>
                {game.metacritic && <Badge {...getColors(game.metacritic)}>{game.metacritic}</Badge>}
            </HStack>
            <HStack mt={2}>
                {[...Array(5)].map((_, i) => {
                    const fill = Math.max(0, Math.min(100, (game.rating - i) * 100));
                    return <Star key={i} fillPercentage={fill} />;
                })}
            </HStack>
        </Card.Footer>

    </Card.Root>
    )
}

export default GameCard