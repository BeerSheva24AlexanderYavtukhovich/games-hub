import { Text, SimpleGrid, Spinner } from '@chakra-ui/react'
import GameCard from './GameCard'
import useGames from './hooks/useGames';
import type { FC } from 'react';

interface Props{
    selectedGenre: string | null;
}

const GameGrid: FC<Props> = ({ selectedGenre }) => {
    const { data: games, error, isLoading } = useGames(selectedGenre);
    return (isLoading) ? <Spinner /> :
        (<>
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
                    {games?.map(g => <GameCard key={g.id} game={g} />)}
                </SimpleGrid>
            )}
        </>)
}

export default GameGrid