import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
        Order by : Relevance
        <MenuList>
          <MenuItem>Item1</MenuItem>
          <MenuItem>Item1</MenuItem>
          <MenuItem>Item1</MenuItem>
        </MenuList>
      </MenuButton>
    </Menu>
  );
};

export default SortSelector;
