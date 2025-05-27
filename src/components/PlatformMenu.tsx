import { Button, Menu, Portal, Spinner } from '@chakra-ui/react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';
import usePlatforms from './hooks/usePlatforms';
import ComponentMotion from './Motion';
import { useGamesQueryStore } from './state-manager/store';

const PlatformMenu = () => {
  const selectedPlatform = useGamesQueryStore(s => s.gameQuery.platform)
  const setPlaform = useGamesQueryStore(s => s.setPlatform)
  const { error, isLoading, data: platforms } = usePlatforms();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const duration = 0.5;
  return (
    <>
      {
        isLoading ? (
          <Spinner/>
        ) : (
          !error && (
            <Menu.Root onExitComplete={() => setIsOpen(false)}>
              <Menu.Trigger asChild>
                <Button variant="outline" size="sm" focusRing={"none"} cursor={'pointer'} onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <ComponentMotion duration={duration} ><FaChevronUp /></ComponentMotion>
                    : <FaChevronDown />}{selectedPlatform?.name} Platform
                </Button>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <ComponentMotion duration={duration} >
                    <Menu.Content>
                      <Menu.Item
                        key={"p.id"}
                        onClick={() => {
                          setPlaform(null);
                        }}
                        value={""}
                        cursor={'pointer'}
                      >
                        All
                      </Menu.Item>
                      {platforms?.map((p) => (
                        <Menu.Item
                          key={p.id}
                          onClick={() => {
                            setPlaform(p);
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
          )
        )}
    </>
  )


};

export default PlatformMenu;