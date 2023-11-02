import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 70px;
    background-color: #604D9F;
    padding: 5px 0px;
    border: 0px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;`

export const Container2 = styled.div`
    max-width: 1700px;
    margin: auto;
    padding: 0 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;

    svg {
        position: relative;
        top: 1px;
        cursor: pointer;
        transition: 1s;

        &:hover {
            transition: 1s;
            background-color: #603D9F;
            border-radius: 50%;
            padding: 0.5em;
        }
    }
`

export const textFont = styled.div`
    font-size: 1.3rem;
    color: antiquewhite;
`