import React from 'react';
import PropTypes from 'prop-types';
import styles from './MessageInput.module.scss';

const MessageInput = (props) => (
  <input type='text' className={styles.MessageInput}
  data-testid="MessageInput" onChange={props.onChange} value={props.value} />
);

MessageInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

MessageInput.defaultProps = {};

export default MessageInput;
