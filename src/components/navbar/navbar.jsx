import * as C from "./style.js"
import { RiMenu4Fill } from "react-icons/ri"
import { BiSolidDownArrow } from "react-icons/bi"
import { useDrawer } from "../../context/drawerContext/DrawerContext.jsx"
import { Tooltip } from "@chakra-ui/react"

export const Navbar = () => {

    const { onOpen } = useDrawer();

    return (
        <>
            <C.Container>
                <C.Container2>
                    <C.Logo>
                        <div>
                            <RiMenu4Fill size={35} color="white" onClick={onOpen} />
                        </div>
                        <C.textFont>
                            T.E.S.I - DENSENVOLVIMENTO DE SI
                        </C.textFont>
                    </C.Logo>

                    <C.textFont>
                        <Tooltip hasArrow label="Seja bem vindo!">
                            <BiSolidDownArrow />
                        </Tooltip>
                    </C.textFont>
                </C.Container2>
            </C.Container>
        </>
    )
}
