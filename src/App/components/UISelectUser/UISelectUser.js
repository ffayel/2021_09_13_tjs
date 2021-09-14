import React from 'react';
import PropTypes from 'prop-types';
import styles from './UISelectUser.module.scss';
import { userListInitialState } from '../UserList/UserList';

const UISelectUser = (props) => (
  <select className={styles.UISelectUser} data-testid="UISelectUser" onChange={props.onChange}>
    {
      props.users.map((e, i) => <option value={e.id} key={`opt-usr-${i}`}>{e.nick}</option>)
    }
  </select>
);

UISelectUser.propTypes = {
  users: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

UISelectUser.defaultProps = {
  users: userListInitialState,
  onChange: () => { }
};

export default UISelectUser;
