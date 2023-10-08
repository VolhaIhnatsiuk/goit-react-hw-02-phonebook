import { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StyledForm, Label, StyledField, Button, StyledErrorMessage } from './ContactForm.styled';

const phoneRegex = RegExp(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/);

const schema = Yup.object().shape({
  name: Yup.string().min(2, 'Must be at least 2 characters long').max(70, 'Must be no more than 70 characters long'),
  number: Yup.string().matches(phoneRegex, "Invalid phone").required("Phone is required")
});

export class ContactForm extends Component {

handleInputChange = evt => {
const { value, name } = evt.target;
this.setState({ [name]: value.trim() });
};
    
handleSubmit = (values, { resetForm }) => {
this.props.onSubmit(values);
resetForm();
};
    
    render() {
        return (
                <Formik
                    initialValues={{
                        name: '',
                        number: ''
                    }}
                    validationSchema={schema}
                    onSubmit={this.handleSubmit}>
                    
                    <StyledForm autoComplete="off">
                        <Label htmlFor="name">
                            Name
                            <StyledField
                                onInput={this.handleInputChange}
                                type="text"
                                name="name"
                                required />
                            <StyledErrorMessage><ErrorMessage name="name" /></StyledErrorMessage>
                        </Label>
                        <Label htmlFor="number">
                            Number
                            <StyledField
                                onInput={this.handleInputChange}
                                type="tel"
                                name="number"
                                placeholder="+48 000 000 000"
                                required />
                            <StyledErrorMessage><ErrorMessage name="number" /></StyledErrorMessage>
                        </Label>
                        <Button type="submit">Add contacts</Button>
                    </StyledForm>
                </Formik>
        )
    }
}
