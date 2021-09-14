import React from 'react';
import styles from './TChat.module.scss';
import FlexContainer from '../../components/FlexContainer/FlexContainer';
import MessagesList from '../../components/MessagesList/MessagesList';
import UserList from '../../components/UserList/UserList';
import FormMessage from '../../components/FormMessage/FormMessage';

const TChat = () => (
  <div className={styles.TChat} data-testid="TChat">
    <FlexContainer type="horizontal" style={{ height: '98vh' }}>
      {/*partie superieur*/}
      <FlexContainer type="vertical">
        <MessagesList />
        <UserList />
      </FlexContainer>
      {/*partie inferieur*/}
      <FormMessage />
    </FlexContainer>
  </div>
);

export default TChat;
