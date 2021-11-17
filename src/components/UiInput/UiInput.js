import React from 'react';
import PropTypes from 'prop-types';

const UiInput = ({onChange, placeholder, type, value}) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <input type={type} onChange={handleChange} placeholder={placeholder} value={value} className='ui-input'/>
    );
};

UiInput.propTypes = {
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
};

UiInput.defaultProps = {
    onChange: () => {},
    placeholder: '',
    type: 'text',
    value: '',
};

export default UiInput;