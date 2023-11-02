import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    Input,
} from '@chakra-ui/react'
import * as C from "./style.js"
import { useEffect, useState } from 'react';

export const ModalEdit = ({ nomeFuncionario, matricula, cpf, setor, funcao, isOpen, onClose, atualizarFuncionario, id }) => {

    const [nomeFuncionarioEdit, setNomeFuncionarioEdit] = useState(nomeFuncionario);
    const [matriculaEdit, setMatriculaEdit] = useState(matricula);
    const [cpfEdit, setCpfEdit] = useState(cpf);
    const [setorEdit, setSetorEdit] = useState(setor);
    const [funcaoEdit, setFuncaoEdit] = useState(funcao);

    useEffect(() => {
        setNomeFuncionarioEdit(nomeFuncionario);
        setMatriculaEdit(matricula);
        setCpfEdit(cpf);
        setSetorEdit(setor);
        setFuncaoEdit(funcao);
    }, [nomeFuncionario, matricula, cpf, setor, funcao, isOpen]);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit Funcionário</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text mb='8px' mt={2}>Nome:</Text>
                    <Input
                        value={nomeFuncionarioEdit}
                        onChange={(e) => setNomeFuncionarioEdit(e.target.value)}
                        focusBorderColor='violet'
                    />
                    <Text mb='8px' mt={2}>Matrícula:</Text>
                    <Input
                        value={matriculaEdit}
                        onChange={(e) => setMatriculaEdit(e.target.value)}
                        focusBorderColor='violet'
                    />
                    <Text mb='8px' mt={2}>CPF:</Text>
                    <Input
                        value={cpfEdit}
                        onChange={(e) => setCpfEdit(e.target.value)}
                        focusBorderColor='violet'
                    />
                    <Text mb='8px' mt={2}>Setor:</Text>
                    <Input
                        value={setorEdit}
                        onChange={(e) => setSetorEdit(e.target.value)}
                        focusBorderColor='violet'
                    />
                    <Text mb='8px' mt={2}>Funcão:</Text>
                    <Input
                        value={funcaoEdit}
                        onChange={(e) => setFuncaoEdit(e.target.value)}
                        focusBorderColor='violet'
                    />
                </ModalBody>

                <ModalFooter>
                    <C.ButtonModal
                        backgroundColor={'blueviolet'}
                        color={'aliceblue'}
                        mr={3}
                        onClick={() => {
                            const updatedData = {
                                nomeFuncionario: nomeFuncionarioEdit,
                                matricula: matriculaEdit,
                                cpf: cpfEdit,
                                setor: setorEdit,
                                funcao: funcaoEdit,
                                id: id
                            };
                            atualizarFuncionario(updatedData); // Chame a função de callback
                        }}
                    >
                        Editar
                    </C.ButtonModal>
                    <Button onClick={onClose} >Cancelar</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
