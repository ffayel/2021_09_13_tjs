import React from 'react';
import PropTypes from 'prop-types';
import styles from './UISelectUser.module.scss';
import { userListInitialState } from '../UserList/UserList';

const UISelectUser = (props) => (
  <select className={styles.UISelectUser} data-testid="UISelectUser" onChange={props.onChange} value={props.value}>
    {
      props.users.map((e, i) => <option value={e.id} key={`opt-usr-${i}`}>{e.nick}</option>)
    }
  </select>
);

UISelectUser.propTypes = {
  value: PropTypes.number,
  users: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

UISelectUser.defaultProps = {
  onChange: () => { }
};

export default UISelectUser;
