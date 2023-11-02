import { Button, Input } from "@chakra-ui/react";
import styled from "styled-components";

export const ButtonModal = styled(Button)`
    &:hover {
        color: black;
    }
`

export const InputModal = styled(Input)`
  outline: none;
  border: 1px solid transparent; /* Define a borda transparente */

  &:active,
  &:focus {
    outline: none; /* Remove o contorno padrão de foco (não é recomendado) */
    border: 1px solid transparent; /* Mantém a borda transparente no foco */
  }
`

export const TextoErro = styled(Text)`
  
`