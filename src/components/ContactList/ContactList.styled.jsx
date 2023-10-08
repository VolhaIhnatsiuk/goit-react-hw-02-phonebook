import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-top: 20px;
`
export const Item = styled.li`
    position: relative;
    font-size: 20px;
    width: 300px;
`
export const Button = styled.button`
    position: absolute;
    top: 2px;
    right: 0;
    font-size: 15px;
    padding: 0 10px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #6b6bda};
` 
