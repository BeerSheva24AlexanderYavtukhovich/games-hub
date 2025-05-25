import { Button, Menu, Portal, Spinner } from '@chakra-ui/react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { easeInOut, motion } from 'framer-motion';
import type ParentPlatform from '../models/parent-platform';
import { useState } from 'react';
import usePlatforms from './hooks/usePlatforms';
import ComponentMotion from './Motion';

interface Props {
  selectedPlatform: ParentPlatform | null;
  onSelectPlatform: (platform: ParentPlatform | null) => void;
}

const PlatformMenu = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { error, isLoading, data: platforms } = usePlatforms();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (

    <>
      {
        isLoading ? (
          <Spinner></Spinner>
        ) : (
          !error && (
            <Menu.Root>
              <Menu.Trigger asChild>
                <Button variant="outline" size="sm" focusRing={"none"} cursor={'pointer'} onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <ComponentMotion duration={0.5} ><FaChevronUp /></ComponentMotion>
                    : <FaChevronDown />}{selectedPlatform?.name} Platform
                </Button>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <ComponentMotion duration={0.5} >
                    <Menu.Content>
                      <Menu.Item
                        key={"p.id"}
                        onClick={() => {
                          onSelectPlatform(null);
                          setIsOpen(false);
                        }}
                        value={""}
                        cursor={'pointer'}
                      >
                        All
                      </Menu.Item>
                      {platforms.map((p) => (
                        <Menu.Item
                          key={p.id}
                          onClick={() => {
                            onSelectPlatform(p);
                            setIsOpen(false);
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