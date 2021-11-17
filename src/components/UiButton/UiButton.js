import React from 'react';
import PropTypes from 'prop-types';

const UiButton = ({ onClick, children, type }) => (
    <button onClick={ onClick } type={type} className='ui-button'>{ children }</button>
);

UiButton.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string,
};

UiButton.defaultProps = {
    onClick: () => {},
    type: 'button',
};

export default UiButton;