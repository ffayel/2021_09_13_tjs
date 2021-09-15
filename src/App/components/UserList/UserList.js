import React, { useEffect, useState } from 'react';

import styles from './UserList.module.scss';
import UIUser from '../UIUser/UIUser';
import store, { initialState } from '../../store/store';

const UserList = () => {
  const [userListState, setUserListState] = useState(initialState.users);
  useEffect(() => { // permet de gerer le chargement du composant
    store.subscribe(() => {
      setUserListState(store.getState().tchat.users);
    })
  }, []) // si [] on de gerer le init et pas update

  return (
    <div className={styles.UserList} data-testid="UserList">
      <h2>UserList</h2>
      <div style={{ height: '100vh', overflowY: 'scroll' }}>
        {
          userListState.map((e, i) => <UIUser user={e} key={`usr-${i}`} />)
        }
      </div>
    </div>
  )
};

export default UserList;
