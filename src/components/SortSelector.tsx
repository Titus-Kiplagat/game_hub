import {
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";

interface Props {
	onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ onSelectSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuOptionGroup defaultValue="" title="Order by" type="radio">
          {sortOrders.map((order) => (
            <MenuItemOption key={order.value} value={order.value} onClick={() => onSelectSortOrder(order.value)} >
              {order.label}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
