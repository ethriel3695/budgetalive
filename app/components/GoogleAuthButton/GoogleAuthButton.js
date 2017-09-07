import React from 'react';
import PropTypes from 'prop-types';
import { button } from './styles.css';

GoogleAuthButton.propTypes = {
    // onAuth: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
};

export default function GoogleAuthButton ({onAuth, isFetching}) {
    return (
        <button onClick={onAuth} className={button}>
            {isFetching === true
                ? 'Loading'
                : 'Login with Google'}
        </button>
    );
}
