import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

export default function SortSelector() {
  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by: relevance
        </MenuButton>
        <MenuList>
          <MenuItem as="a" href="#">
            Relevance
          </MenuItem>
          <MenuItem as="a" href="#">
            Date Added
          </MenuItem>
          <MenuItem as="a" href="#">
            Name
          </MenuItem>
          <MenuItem as="a" href="#">
            Release date
          </MenuItem>
          <MenuItem as="a" href="#">
            Popularity
          </MenuItem>
          <MenuItem as="a" href="#">
            Average Rating
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
