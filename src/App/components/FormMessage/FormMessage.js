import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FormMessage.module.scss';
import UISelectUser from '../UISelectUser/UISelectUser';
import MessageInput from '../MessageInput/MessageInput';
import Button from '../Button/Button';
import store, { initialState } from '../../store/store';

export const formMessageInitialState = {
  text: '',
  destId: 2,
}

const FormMessage = (props) => {
  const [formMessageState, setFormMessageState] = useState(formMessageInitialState);
  const [userListState, setUserListState] = useState(initialState.users);
  useEffect(() => { // permet de gerer le chargement du composant
    store.subscribe(() => {
      setUserListState(store.getState().tchat.users);
    })
  }, []) // si [] on de gerer le init et pas update
  return (
    <div className={styles.FormMessage} data-testid="FormMessage">
      {JSON.stringify(formMessageState)}
      <form onSubmit={(evt) => {
        evt.preventDefault();
      }}>
        <MessageInput value={formMessageState.text} onChange={
          (evt) => {
            setFormMessageState({ ...formMessageState, text: evt.target.value })
          }} />
        <UISelectUser value={formMessageState.destId} users={userListState} onChange={
          (evt) => {
            setFormMessageState({ ...formMessageState, destId: Number(evt.target.value) })
          }} />
        <Button type='submit'>Envoyer</Button>
      </form>
    </div>
  )
};

FormMessage.propTypes = {};

FormMessage.defaultProps = {};

export default FormMessage;
