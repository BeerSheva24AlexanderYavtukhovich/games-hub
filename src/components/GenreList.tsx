import type { FC } from "react";
import type { Genre, GenresResponse } from "../models/fetch-genre-types";
import { Text, List, HStack, Avatar, Button } from "@chakra-ui/react";
import useFetch from "./hooks/useFetch";

interface Props {
  onSelectGenre: (genre: string) => void
}

const GenreList: FC<Props> = ({onSelectGenre}) => {
  const { data, error } = useFetch<GenresResponse>("/genres");
  return (
    <>
      {error ? (
        <Text color="red" fontSize={"2.5rem"}>
          {error}
        </Text>
      ) : (
        <List.Root listStyle="none" maxHeight="85vh" overflow="auto">
          {data?.results.map((g: Genre) => (
            <List.Item key={g.id}>
              <HStack padding={2}>
                <Avatar.Root shape="rounded" size="lg" me="-1">
                  <Avatar.Fallback name={g.name} />
                  <Avatar.Image src={g.image_background} />
                </Avatar.Root>
                <Button
                  variant={"outline"}
                  borderWidth="0"
                  onClick={() => onSelectGenre(g.name)}
                >
                  {g.name}
                </Button>
              </HStack>
            </List.Item>
          ))}
        </List.Root>
      )}
    </>
  );
};

export default GenreList;