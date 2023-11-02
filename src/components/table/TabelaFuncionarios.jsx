import { IoIosAdd } from "react-icons/io"
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

import * as B from "./style.js"
import { useEffect, useState } from "react";
import api from "../../api/Api.js";
import { ModalEdit } from "./modal/ModalEdit.jsx";
import { ModalCreate } from "./modal/ModalCreate.jsx";
import { GrFormPrevious, GrFormNext} from "react-icons/gr"

export const TabelaFuncionarios = () => {

  const [funcionarios, setFuncionarios] = useState([]);
  const [paginacao, setPaginacao] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [funcionarioSelected, setFuncionarioSelected] = useState(null)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [page, setPage] = useState(0); // Página atual
  const [pageSize, setPageSize] = useState(10); // Tamanho da página


  const openEditModal = (funcionario) => {
    setIsEditModalOpen(true);
    setFuncionarioSelected(funcionario)
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const addFuncionario = (novoFuncionario) => {
    setFuncionarios([...funcionarios, novoFuncionario]);
    closeCreateModal();
  };

  const handleEditFuncionario = async (updatedData) => {
    try {
      const response = await api.put(`/api/funcionarios/${updatedData.id}`, updatedData);

      if (response.status === 200) {

        const indexOfFuncionarioSelected = funcionarios.findIndex(
          (funcionario) => funcionario.id === funcionarioSelected.id
        );

        if (indexOfFuncionarioSelected !== -1) {
          const updatedFuncionarios = [...funcionarios];
          updatedFuncionarios[indexOfFuncionarioSelected] = updatedData;

          setFuncionarios(updatedFuncionarios);
        }

        setIsEditModalOpen(false);
      } else {
        console.error('Falha ao editar o funcionário.');
      }
    } catch (error) {
      console.error('Erro de rede ao editar o funcionário:', error);
    }
  };

  const handleDeleteFuncionario = async (id) => {
    try {
      const response = await api.delete(`/api/funcionarios/${id}`);

      if (response.status === 204) {
        // A exclusão foi bem-sucedida, atualize o estado local para refletir a remoção do funcionário
        setFuncionarios(funcionarios.filter((funcionario) => funcionario.id !== id));
      } else {
        console.error('Falha ao excluir o funcionário.');
      }
    } catch (error) {
      console.error('Erro de rede ao excluir o funcionário:', error);
    }
  };

  const getFuncionarios = async () => {
    try {
      const response = await api.get(`/api/funcionarios/pages?pageNumber=${page}&pageSize=${pageSize}`);
      setFuncionarios(response.data.content);
      setPaginacao(response.data)
    } catch (err) {
      console.error(err);
    } finally {
      console.log("Fim da requisição!");
    }
  };

  // Botão para página anterior
  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  // Botão para próxima página
  const handleNextPage = () => {
    if (paginacao && paginacao.pageable) {
      const { totalPages, number } = paginacao;

      if (number < totalPages - 1) {
        setPage(number + 1);
      }
    }
  };

  useEffect(() => {
    getFuncionarios();
  }, [page, pageSize]);

  console.log(funcionarios)

  return (
    <>
      <ModalEdit
        nomeFuncionario={funcionarioSelected ? funcionarioSelected.nomeFuncionario : ''}
        matricula={funcionarioSelected ? funcionarioSelected.matricula : ''}
        cpf={funcionarioSelected ? funcionarioSelected.cpf : ''}
        setor={funcionarioSelected ? funcionarioSelected.setor : ''}
        funcao={funcionarioSelected ? funcionarioSelected.funcao : ''}
        id={funcionarioSelected ? funcionarioSelected.id : ''}
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        atualizarFuncionario={handleEditFuncionario}
      />

      <ModalCreate
        nomeFuncionario={''}
        matricula={''}
        cpf={''}
        setor={''}
        funcao={''}
        isOpen={isCreateModalOpen}
        onClose={closeCreateModal}
        addFuncionario={addFuncionario}
      />


      <B.ContainerAll>
        <B.Container>
          <B.SearchContainer>
            <B.SearchInput
              type="text"
              placeholder="Pesquisar funcionário..."
              onChange={(e) => setSearchText(e.target.value)}
            />
            <B.SearchIcon />
          </B.SearchContainer>
          <div>
            <B.ButtonAdd onClick={openCreateModal}>
              <IoIosAdd size={30} color="white" />
            </B.ButtonAdd>
          </div>
        </B.Container>

        <B.ContainerTable>
          <TableContainer>
            <Table variant='striped' size={"lg"} colorScheme='purple' style={{ backgroundColor: '#f0f0f0', border: '1px solid transparent', borderRadius: '14px' }}>
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th isNumeric>Matrícula</Th>
                  <Th isNumeric>CPF</Th>
                  <Th>Setor</Th>
                  <B.ThTable></B.ThTable>
                  <B.ThTable></B.ThTable>

                </Tr>
              </Thead>
              <Tbody>

                {funcionarios && funcionarios ? (
                  funcionarios
                    .filter(({ nomeFuncionario }) =>
                      nomeFuncionario
                        ?.toLowerCase()
                        .trim()
                        .includes(searchText.toLowerCase().trim())
                    )
                    .map((funcionario, index) => (
                      <Tr key={index}>
                        <Td>{funcionario.nomeFuncionario}</Td>
                        <Td isNumeric>{funcionario.matricula}</Td>
                        <Td isNumeric>{funcionario.cpf}</Td>
                        <Td>{funcionario.setor}</Td>
                        <Td>
                          <B.Edit
                            size={25}
                            cursor={"pointer"}
                            onClick={() => openEditModal(funcionario)}
                          />
                        </Td>
                        <Td>
                          <B.Delete
                            size={25}
                            cursor={"pointer"}
                            onClick={() => handleDeleteFuncionario(funcionario.id)}
                          />
                        </Td>
                      </Tr>
                    ))
                ) : (
                  <Tr>
                    <Td colSpan="4">Carregando...</Td>
                  </Tr>
                )}

              </Tbody>
            </Table>
            <B.Pagination>
              <B.ButtonPrev onClick={handlePreviousPage}/>
              <B.ButtonNext onClick={handleNextPage} color="#604d9f"/>
            </B.Pagination>
          </TableContainer>
        </B.ContainerTable>
      </B.ContainerAll>
    </>
  )
}
