import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FormMessage.module.scss';
import UISelectUser from '../UISelectUser/UISelectUser';
import MessageInput from '../MessageInput/MessageInput';
import Button from '../Button/Button';

export const formMessageInitialState = {
  text: '',
  destId: 2,
}

const FormMessage = (props) => {
  const [formMessageState, setFormMessageState] = useState(formMessageInitialState);
  return (
    <div className={styles.FormMessage} data-testid="FormMessage">
      {JSON.stringify(formMessageState)}
      <form onSubmit={(evt) => {
        evt.preventDefault();
      }}>
        <MessageInput value={formMessageState.text} onChange={
          (evt) => {
            setFormMessageState({...formMessageState, text:evt.target.value})
          }} />
        <UISelectUser value={formMessageState.destId} onChange={
          (evt) => {
            setFormMessageState({...formMessageState, destId:Number(evt.target.value)})
          }} />
        <Button type='submit'>Envoyer</Button>
      </form>
    </div>
  )
};

FormMessage.propTypes = {};

FormMessage.defaultProps = {};

export default FormMessage;
