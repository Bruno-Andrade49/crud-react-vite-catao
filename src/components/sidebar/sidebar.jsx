import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
} from '@chakra-ui/react'
import { useDrawer } from '../../context/drawerContext/DrawerContext';
import * as C from "./style"

export const Sidebar = () => {

    const { isOpen, onClose } = useDrawer();

    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Apresentação do Grupo</DrawerHeader>

                    <DrawerBody>
                        <C.TextoInicial>
                            Olá! Somos um grupo de estudantes que faz parte do projeto da cadeira de T.E.S.I - Desenvolvimento de SI.
                            <br></br><br></br>
                            O nosso grupo é composto por quatro membros:
                        </C.TextoInicial>
                        <ul style={{marginLeft: "20px", marginTop: "10px"}}>
                            <li>Bruno Andrade</li>
                            <li>Allan Dellon</li>
                            <li>Thiago Azevedo</li>
                            <li>Angelo Ganso</li>
                        </ul>
                        <p>
                            <br></br>
                            Estamos empolgados em trabalhar juntos neste projeto e ansiosos para desenvolver soluções
                            de sistemas de informação que contribuirão para o nosso aprendizado e crescimento profissional.
                        </p>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Fechar
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
