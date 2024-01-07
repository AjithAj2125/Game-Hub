import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
} from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../hooks/useGames";
import { BsChevronDown } from "react-icons/bs";

interface IProps {
  handlePlatformSelect: (p: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformList = ({ handlePlatformSelect, selectedPlatform }: IProps) => {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <Box paddingX={10}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data.map((d) => (
            <MenuItem key={d.id} onClick={() => handlePlatformSelect(d)}>
              {d.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>

      {/* <Select width="500px" placeholder="Filter by Platform">
        {data.map((d) => (
          <option key={d.id} onChange={() => handlePlatformSelect(d)}>
            {d.name}
          </option>
        ))}
      </Select> */}
    </Box>
  );
};

export default PlatformList;
