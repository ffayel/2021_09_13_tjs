import React, { useState } from 'react';

import styles from './UserList.module.scss';
import UIUser from '../UIUser/UIUser';

const UserList = (props) => {
  return (
    <div className={styles.UserList} data-testid="UserList">
      <h2>UserList</h2>
      <div style={{ height: 'calc(100% - 40px)', overflowY: 'scroll' }}>
        {
          props.users.map((e, i) => <UIUser user={e} key={`usr-${i}`} />)
        }
      </div>
    </div>
  )
};

export default UserList;
