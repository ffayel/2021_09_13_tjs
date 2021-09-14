import React from 'react';
import PropTypes from 'prop-types';
import styles from './UIUser.module.scss';

const UIUser = (props) => (
  <div className={styles.UIUser} data-testid="UIUser">
    <img src={props.user.img} alt={props.user.nick} />
    <div className={styles.userNick}>{props.user.nick}</div>
  </div>
);

UIUser.propTypes = {
  user: PropTypes.object.isRequired
};

UIUser.defaultProps = {};

export default UIUser;
