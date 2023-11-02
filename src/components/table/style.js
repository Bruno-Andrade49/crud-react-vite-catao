import styled from "styled-components";
import { FaSearch } from 'react-icons/fa';
import { Th } from '@chakra-ui/react'
import { BiMessageSquareEdit, BiMessageSquareX } from "react-icons/bi"
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"


export const ButtonAdd = styled.button`
    border-radius: 50%;
    background-color: #603D9F;
    padding: 0.5em;
    text-align: right;
    transition: 1s;

    &:hover {
        transform: scale(1.5);
        transition: 0.3s;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    input {
        &::placeholder {
            color: white;
        }
    }
`
export const ContainerAll = styled.div`
    max-width: 1500px;
    margin: 3rem auto;
    padding: 0 25px;
`

// Estilize o container que envolverá o input e o ícone
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 350px;
  padding: 0.5rem 2rem 0.5rem 1rem; 
  border: 1px solid #ccc;
  border-radius: 15px;
  font-size: 16px;
  transition: 0.5;
  border: none;
  background-color:  #b2a9d3;
  color: aliceblue;
  transition: 1s;

  &:focus,
  &:active {
    outline: none;
    border: none;  
    transition: 0.5s;
    background-color: #603D9F;
    }

    &::placeholder {
        color: aliceblue;
    }
`;

// Estilize o ícone de lupa
export const SearchIcon = styled(FaSearch)`
  position: relative;  
  right: 30px;
  top: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: 0.5;
  transition: 1s;
  color: aliceblue;

`;

export const ContainerTable = styled.div`
  margin-top: 25px;
`

export const ThTable = styled(Th)`
    width: 20px;
`

export const Edit = styled(BiMessageSquareEdit)`
    
    transition: 0.5s;
    
    &:hover {
        transform: scale(1.2)
    }
`
export const Delete = styled(BiMessageSquareX)`

    transition: 0.5s;

    &:hover {
        transform: scale(1.2)
    }
`

export const Pagination = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    margin: 15px;
`

export const ButtonPrev = styled(MdNavigateBefore)`
    font-size: 35px;
    color: #604d9f;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        transform: scale(1.4);
    }
`

export const ButtonNext = styled(MdNavigateNext)`
    font-size: 35px;
    color: #604d9f;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        transform: scale(1.4);
    }
`
