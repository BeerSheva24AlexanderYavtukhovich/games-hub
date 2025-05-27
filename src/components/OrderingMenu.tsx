import {
  Button,
  Menu,
  Portal,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import ComponentMotion from './Motion';
import orderingFields from '../config/order-fields.json';
import { BiFilter } from 'react-icons/bi';
import { useGamesQueryStore } from './state-manager/store';

type OrderDirection = 'asc' | 'desc';

const OrderingMenu = () => {
  const fields: { value: string; label: string }[] = orderingFields;
  const selectedOrdering = useGamesQueryStore(s => s.gameQuery.ordering)
  const setOrder = useGamesQueryStore(s => s.setOrdering)
  const currentDirection: OrderDirection = selectedOrdering?.startsWith('-') ? 'desc' : 'asc';
  const currentFieldObj = fields.find(f => f.value === selectedOrdering?.replace(/^-/, '')) || fields[0];
  
  const [direction, setDirection] = useState<OrderDirection>(currentDirection);
  const [field, setField] = useState(currentFieldObj.value);

  const handleSelect = (field: string, direction: OrderDirection) => {
    const ordering = direction === 'desc' ? `-${field}` : field;
    setOrder(ordering);
  };

  useEffect(() => {
    handleSelect(field, direction);
  }, [field, direction]);

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          variant="outline"
          size="sm"
          focusRing="none"
          cursor="pointer"
        >
          <BiFilter /> {currentFieldObj.label ? `Ordered by ${currentFieldObj.label.toLowerCase()}` : 'Order by'}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <ComponentMotion duration={0.5}>
            <Menu.Content>
              <Menu.RadioItemGroup
                value={direction}
                onValueChange={(e) => {
                  setDirection(e.value as OrderDirection);
                }}
              >
                <Menu.ItemGroupLabel>Order</Menu.ItemGroupLabel>
                <Menu.RadioItem value="asc" cursor={'pointer'}>
                  Ascending
                  <Menu.ItemIndicator />
                </Menu.RadioItem>
                <Menu.RadioItem value="desc" cursor={'pointer'}>
                  Descending
                  <Menu.ItemIndicator />
                </Menu.RadioItem>
              </Menu.RadioItemGroup>

              <Menu.ItemGroup>
                <Menu.Separator />
                <Menu.ItemGroupLabel>Field</Menu.ItemGroupLabel>
                {fields.map((f) => (
                  <Menu.CheckboxItem
                    key={f.value}
                    value={f.value}
                    checked={field === f.value}
                    onCheckedChange={() => setField(f.value)}
                    cursor={'pointer'}
                  >
                    {f.label}
                    <Menu.ItemIndicator />
                  </Menu.CheckboxItem>
                ))}
              </Menu.ItemGroup>
            </Menu.Content>
          </ComponentMotion>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default OrderingMenu;