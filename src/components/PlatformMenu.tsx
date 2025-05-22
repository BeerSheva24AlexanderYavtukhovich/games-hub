import { Button, Menu, Portal } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';

interface Platform {
  id: number;
  name: string;
}

interface Props {
  platforms?: Platform[];
}

const PlatformMenu = ({ platforms }: Props) => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <FaChevronDown />Platforms
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {platforms?.map((platform) => (
              <Menu.Item key={platform.id} value={platform.id.toString()}>
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformMenu;