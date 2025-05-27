import { Text, SimpleGrid, Spinner, Box } from '@chakra-ui/react'
import GameCard from './GameCard'
import useGames from './hooks/useGames';
import type { FC } from 'react';

const GameGrid: FC = () => {
    const { data: games, error, isLoading } = useGames();
    return (isLoading) ? (
      <Box display="flex" justifyContent="center" alignItems="center" height="90vh">
        <Spinner size="xl" />
      </Box>
    ) :
        (<>
            {error ? (
                <Text color="red" fontSize={"2.5rem"}>{error?.message}</Text>
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