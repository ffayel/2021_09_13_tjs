import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FormMessage.module.scss';
import UISelectUser from '../UISelectUser/UISelectUser';

export const formMessageInitialState = {}

const FormMessage = (props) => {
  const [formMessageState, setFormMessageState] = useState(formMessageInitialState);
  return (
    <div className={styles.FormMessage} data-testid="FormMessage">
      <input type='text' />
      <UISelectUser/>
      <input type='submit' />
    </div>
  )
};

FormMessage.propTypes = {};

FormMessage.defaultProps = {};

export default FormMessage;
