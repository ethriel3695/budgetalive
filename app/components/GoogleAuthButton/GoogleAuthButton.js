import React from 'react'
import PropTypes from 'prop-types'
import { button } from './styles.css'

GoogleAuthButton.propTypes = {
  //onAuth: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

export default function GoogleAuthButton (props) {
  return (
    <button onClick={props.onAuth} className={button}>
      {props.isFetching === true
        ? 'Loading'
        : 'Login with Google'}
    </button>
  )
}