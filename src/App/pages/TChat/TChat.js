import React from 'react';
import styles from './TChat.module.scss';
import FlexContainer from '../../components/FlexContainer/FlexContainer';
import MessagesList from '../../components/MessagesList/MessagesList';
import UserList from '../../components/UserList/UserList';
import FormMessage from '../../components/FormMessage/FormMessage';

const TChat = (props) => (
  <div className={styles.TChat} data-testid="TChat">
    <FlexContainer type="horizontal" style={{ height: '98vh' }}>
      {/*partie superieur*/}
      <FlexContainer type="vertical">
        <MessagesList />
        <UserList users={props.users} />
      </FlexContainer>
      {/*partie inferieur*/}
      <FormMessage users={props.users} />
    </FlexContainer>
  </div>
);

export default TChat;
