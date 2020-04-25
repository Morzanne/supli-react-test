import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Form, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SEARCH_FORM = {
    name: 'search',
    fields: {
        query: 'query',
    },
};

const renderField = field => (
    <InputGroup>
        <InputGroupAddon addonType="prepend">
            <InputGroupText className={styles.prependText}>
                <FontAwesomeIcon icon={faSearch} />
            </InputGroupText>
        </InputGroupAddon>
        <Input
            placeholder={field.placeholder}
            type="text"
            autoComplete="off"
            className={styles.input}
            {...field.input}
        />
    </InputGroup>
);

const SearchForm = ({ handleSubmit }) => (
    <div className={styles.formWrapper}>
        <Form onSubmit={handleSubmit}>
            <Field
                id='query'
                name='query'
                component={renderField}
                placeholder="Search"
            />
        </Form>
    </div>

)




export default reduxForm({
    form: SEARCH_FORM.name,
    initialValues: {
        [SEARCH_FORM.fields.query]: '',
    },
})(SearchForm)
