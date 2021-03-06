import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MessagesList.module.scss';
import UIMessage from '../UIMessage/UIMessage';
import Moment from 'react-moment';
import store, { initialState } from '../../store/store';

//export const messagesListInitialState = [
//  {
//    id: 0,
//    text: 'blabalba',
//    dateTime: new Date(),
//    userId: 0,
//    user: {
//      id: 0,
//      nick: 'FF',
//      img: 'https://avatars.githubusercontent.com/u/7956612?s=60&v=4'
//    }
//  },
//  {
//    id: 1,
//    text: 'text 2',
//    dateTime: new Date(),
//    userId: 0,
//    user: {
//      id: 2,
//      nick: 'pas champix',
//      img: 'data:image/jpeg;base64,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'
//    }
//  }
//]

const MessagesList = (props) => {
  const [messagesListState, setMessagesListState] = useState(initialState.messages);
  const [usersListState, setUsersListState] = useState(initialState.users);

  useEffect(() => { // permet de gerer le chargement du composant ou 
    setMessagesListState(store.getState().tchat.messages); // init pour recuperer les donn??e avant le init du composant
    setUsersListState(store.getState().tchat.users); // init pour recuperer les donn??e avant le init du composant
    store.subscribe(() => {
      setMessagesListState(store.getState().tchat.messages);
      setUsersListState(store.getState().tchat.users);
    })
  }, []) // si [] on de gerer le init et pas update

  return (
    <div className={styles.MessagesList} data-testid="MessagesList">
      <h2>MessagesList</h2>
      <div style={{ height: 'calc(100% - 40px)', overflowY: 'scroll' }}>
        {
          messagesListState.map((e, i) => {
            const uu = usersListState.find((u) => e.userId === u.id) // gestion du chargement des users a posteriorie
            return <UIMessage message={
              { ...e, user: uu ? uu : {} }
            } key={`mess-${i}`} />
          })
        }
      </div>
    </div>
  )
};

MessagesList.propTypes = {};

MessagesList.defaultProps = {};

export default MessagesList;
