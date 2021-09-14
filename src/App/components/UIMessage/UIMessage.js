import React from 'react';
import PropTypes from 'prop-types';
import styles from './UIMessage.module.scss';
import Moment from 'react-moment';


const UIMessage = (props) => (
  <div className={styles.UIMessage} data-testid="UIMessage">
    <img src={props.message.user.img} alt={props.message.user.nick}/>
    <div>
      <div className={styles.messageHeader}> <Moment format="YYYY/MM/DD hh:mm" date={props.message.dateTime}/></div>
      <div className={styles.messageText}>{props.message.text}</div>
    </div>
  </div>
);

UIMessage.propTypes = {
  message: PropTypes.object.isRequired
};

export default UIMessage;
