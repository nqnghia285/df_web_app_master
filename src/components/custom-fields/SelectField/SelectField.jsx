import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { FormGroup, Label } from 'reactstrap';

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
};

SelectField.defaultProps = {
    label: '',
    placeholder: '',
    disabled: false,
    options: [],
}

function SelectField(props) {
    const {
        field, options,
        label, placeholder, disabled
    } = props

    const { name, onBlur } = field

    const handleSelectedOptionChange = (selectOption) => {
        const selectValue = selectOption ? selectOption.value : selectOption

        // console.log(selectOption);
        // console.log(selectValue);

        const changeEvent = {
            target: {
                name: name,
                value: selectValue
            }
        }

        field.onChange(changeEvent)
    }

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}

            <Select
                id={name}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                options={options}
                onBlur={onBlur}

                onChange={handleSelectedOptionChange}
            />
        </FormGroup>
    );
}

export default SelectField;