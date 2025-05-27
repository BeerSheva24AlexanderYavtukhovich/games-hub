import { useState, type FC } from "react";
import { Text, Spinner, Button, Menu, Portal } from "@chakra-ui/react";
import useGenres from "./hooks/useGenres";
import ComponentMotion from "./Motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useGamesQueryStore } from "./state-manager/store";



const GenreMenu: FC = () => {
  const selectedGenre = useGamesQueryStore(s => s.gameQuery.genreName);
  const setGenre = useGamesQueryStore(s => s.setGenre)
  const { data: genres, error, isLoading } = useGenres();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (isLoading) ? <Spinner /> :
    (
      <>
        {error?.message ? (
          <Text color="red" fontSize={"2.5rem"}>
            {error?.message}
          </Text>
        ) : (
          <Menu.Root onExitComplete={() => setIsOpen(false)}>
            <Menu.Trigger asChild>
              <Button variant="outline" size="sm" focusRing={"none"} cursor={'pointer'} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <ComponentMotion duration={0.5} ><FaChevronUp /></ComponentMotion>
                  : <FaChevronDown />}Genre {selectedGenre}
              </Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <ComponentMotion duration={0.5} >
                  <Menu.Content>
                    <Menu.Item
                      key={"p.id"}
                      onClick={() => {
                        setGenre(null);
                      }}
                      value={""}
                      cursor={'pointer'}
                    >
                      All
                    </Menu.Item>
                    {genres?.map((p) => (
                      <Menu.Item
                        key={p.id}
                        onClick={() => {
                          setGenre(p.slug);
                        }}
                        value={String(p.id)}
                        cursor={'pointer'}
                      >
                        {p.name}
                      </Menu.Item>
                    ))}
                  </Menu.Content>
                </ComponentMotion>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        )}
      </>
    );


}



export default GenreMenu;