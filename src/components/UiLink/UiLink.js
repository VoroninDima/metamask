import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const UiLink = ({ href, children }) => (
    <Link to={ href } className='ui-link'>{ children }</Link>
);

UiLink.propTypes = {
    href: PropTypes.string,
};

UiLink.defaultProps = {
    href: '',
};

export default UiLink;