import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FormMessage.module.scss';
import UISelectUser from '../UISelectUser/UISelectUser';
import MessageInput from '../MessageInput/MessageInput';
import Button from '../Button/Button';
import store, { ACTIONS, initialState } from '../../store/store';
import {useParams} from 'react-router-dom';

export const formMessageInitialState = {
  text: '',
  destId: -1,
  userId: 0,
}

const FormMessage = (props) => {
  const [formMessageState, setFormMessageState] = useState(formMessageInitialState);
  const [userListState, setUserListState] = useState(initialState.users);

  const userParam = Number(useParams().id);
  useEffect(() => { // permet de gerer le chargement du composant
    setFormMessageState({...formMessageState, userId:userParam})
    store.subscribe(() => {
      setUserListState(store.getState().tchat.users);
    })
  }, []) // si [] on de gerer le init et pas update
  return (
    <div className={styles.FormMessage} data-testid="FormMessage">
      {JSON.stringify(formMessageState)}
      <form onSubmit={(evt) => {
        evt.preventDefault();
        if(formMessageState.destId){
        store.dispatch({type: ACTIONS.SAVE_MESSAGE, value: {...formMessageState, date: new Date().toString()}})
        }else{
          alert('pas de user')
        }
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
