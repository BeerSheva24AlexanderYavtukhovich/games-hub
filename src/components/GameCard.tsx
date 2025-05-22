import { Card, Image, Text, Badge, HStack } from '@chakra-ui/react'
import React from 'react'
import type { Game } from '../models/fetch-game-types'
import Star from './Star'
interface Props {
    game: Game
}
function getColors(metacritic: number): { color: string, bg: string } {
    return metacritic > 90 ? { color: "white", bg: "green" } : { color: "black", bg: "lightgray" }
}
const GameCard: React.FC<Props> = ({ game }) => {
    return (<Card.Root maxW="sm" overflow="hidden">
        <Image
            src={game.background_image}
            alt={`image of game ${game.name}`}
            objectFit={"cover"}
            height="100%"
        />
        <Card.Body>
            <Card.Title>{game.name}</Card.Title>

        </Card.Body>
        <Card.Footer d="flex" flexDir="column" alignItems="flex-start">
            <HStack justifyContent={"space-between"} width="100%">
                <Text >{game.parent_platforms.map(p => p.platform.name).join("; ")}</Text>
                <Badge {...getColors(game.metacritic)}>{game.metacritic}</Badge>
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