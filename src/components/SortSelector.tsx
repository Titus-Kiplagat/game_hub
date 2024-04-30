import {
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);

  const selectedSortOrder = sortOrders.find((order) => order.value === sortOrder)?.value;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoChevronDown />}>
        {`Order by: ${selectedSortOrder || "Relevance"}`}
      </MenuButton>
      <MenuList>
        <MenuOptionGroup defaultValue="" title="Order by" type="radio">
          {sortOrders.map((order) => (
            <MenuItemOption key={order.value} value={order.value} onClick={() => setSortOrder(order.value)} >
              {order.label}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
