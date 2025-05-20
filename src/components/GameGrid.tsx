import type { GamesResponse } from '../models/fetch-game-types'
import { Text, SimpleGrid } from '@chakra-ui/react'
import GameCard from './GameCard'
import useFetch from './hooks/useFetch'

const GameGrid = () => {
    const { data, error } = useFetch<GamesResponse>('/games');
    return (
        <>
            {error ? (
                <Text color="red" fontSize={"2.5rem"}>{error}</Text>
            ) : (
                <SimpleGrid
                    paddingEnd={8}
                    maxHeight="85vh"
                    overflow="auto"
                    marginTop="2vh"
                    columns={{ base: 1, sm: 2, md: 3 }}
                    gap={5}
                >
                    {data?.results.map(g => <GameCard key={g.id} game={g} />)}
                </SimpleGrid>
            )}
        </>
    );
}

export default GameGrid