import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Text, Input, FormControl, FormLabel } from '@chakra-ui/react'
import * as C from "./style.js"
import { useState } from 'react'; 
import api from '../../../api/Api.js';

export const ModalCreate = ({ nomeFuncionario, matricula, cpf, setor, funcao, isOpen, onClose, addFuncionario }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        nomeFuncionario: nomeFuncionario || '',
        matricula: matricula || '',
        cpf: cpf || '',
        setor: setor || '',
        funcao: funcao || '',
    });

    const handleFieldChange = (fieldName, value) => {
        setFormData({
            ...formData,
            [fieldName]: value,
        });
    };

    const handleSubmit = async () => {
        setLoading(true);
        setError(null);

        if (!formData.nomeFuncionario || !formData.funcao) {
            setError('Preencha todos os campos obrigatórios.');
            setLoading(false);
            return;
        }
        
        if (!formData.matricula || !Number.isInteger(Number(formData.matricula))) {
            setError('Matrícula deve ser um número inteiro.');
            setLoading(false);
            return;
        }
        
        if (!formData.cpf || !/^\d+$/.test(formData.cpf)) {
            setError('CPF deve ser um número.');
            setLoading(false);
            return;
        }

        try {
            const response = await api.post('/api/funcionarios', formData)
                .then(() => {
                    addFuncionario(formData)
                })
        } catch (error) {
            setError('Ocorreu um erro. Verifique sua conexão e tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <FormControl isRequired>
                <ModalContent>
                    <ModalHeader>Adicionar Funcionário</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormLabel mb='8px' mt={2}>Nome:</FormLabel>
                        <Input
                            value={formData.nomeFuncionario}
                            onChange={(e) => handleFieldChange('nomeFuncionario', e.target.value)}
                            focusBorderColor='violet'
                            required
                        />

                        <FormLabel mb='8px' mt={2}>Matrícula:</FormLabel>
                        <Input
                            value={formData.matricula}
                            onChange={(e) => handleFieldChange('matricula', e.target.value)}
                            focusBorderColor='violet'
                            required
                        />

                        <FormLabel mb='8px' mt={2}>CPF:</FormLabel>
                        <Input
                            value={formData.cpf}
                            onChange={(e) => handleFieldChange('cpf', e.target.value)}
                            focusBorderColor='violet'
                            required
                        />

                        <FormLabel mb='8px' mt={2}>Setor:</FormLabel>
                        <Input
                            value={formData.setor}
                            onChange={(e) => handleFieldChange('setor', e.target.value)}
                            focusBorderColor='violet'
                        />

                        <FormLabel mb='8px' mt={2}>Função:</FormLabel>
                        <Input
                            value={formData.funcao}
                            onChange={(e) => handleFieldChange('funcao', e.target.value)}
                            focusBorderColor='violet'
                            required
                        />
                    </ModalBody>

                    <ModalFooter>
                        <C.ButtonModal
                            backgroundColor={'blueviolet'}
                            color={'aliceblue'}
                            onClick={handleSubmit} 
                            isLoading={loading} 
                            mr={2}
                        >
                            Adicionar
                        </C.ButtonModal>
                        <Button onClick={onClose}>Cancelar</Button>
                    </ModalFooter>
                    {error && <Text color="red.500" style={{
                        textAlign: "center",
                        marginBottom: "20px",
                        fontWeight: "500"
                    }}>{error}</Text>}
                </ModalContent>
            </FormControl>
        </Modal>
    );
};