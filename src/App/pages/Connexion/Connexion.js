//creation de class : rccp (le second)
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Connexion.module.scss'
import Button from '../../components/Button/Button';
import UISelectUser from '../../components/UISelectUser/UISelectUser';
import store from '../../store/store';
import { Link } from 'react-router-dom'

class Connexion extends Component {
  constructor() {
    super();
    this.state = { userId: null, user: {}, users: store.getState().tchat.users }
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({ users: store.getState().tchat.users });
    })
  }
  render() {
    return (
      <div className={styles.Connexion}>
        <div className={styles.authContainer}>
          <img src={this.state.user ? this.state.user.img : ''} alt='connexionIcon' />
          <UISelectUser
            value={this.state.userId}
            onChange={(evt) => {
              this.setState({ userId: Number(evt.target.value), user: this.state.users.find(e => e.id === Number(evt.target.value)) });
            }}
            users={this.state.users} />
          <hr />
          <Link to={'/Tchat/' + this.state.userId}><Button>Connexion</Button></Link>
          <Link to='/HelpMe'><Button bgColor='orange'>Aide</Button></Link>
        </div>

      </div>
    );
  }
}


Connexion.propTypes = {

};


export default Connexion;
