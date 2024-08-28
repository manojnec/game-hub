import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./colorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearchText: (onSearchText: string) => void;
}
const NavBar = ({ onSearchText }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      {" "}
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput onSearchText={onSearchText} />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
