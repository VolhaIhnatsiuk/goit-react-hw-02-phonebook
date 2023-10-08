import styled from "styled-components";
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const Label = styled.label`
    font-size: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const StyledField = styled(Field)`
    max-width: 200px;
    height: 35px;
    border-radius: 5px;
`
export const Button = styled.button`
    font-size: 15px;
    max-width: 130px;
    border-radius: 5px;
    padding: 6px 10px;
    cursor: pointer;
`
export const StyledErrorMessage = styled.span`
    font-size: 15px;
    width: 300px;
    color: red;
`