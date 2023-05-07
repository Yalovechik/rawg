import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import SwitchMode from "./switchButton"



function NavBar () {
    return (
        <HStack justifyContent="space-between" padding="10px">
            <Image src={logo} boxSize='60px' />
            <SwitchMode />
        </HStack>
    )
}

export default NavBar