import React, {Component, Fragment} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import _ from 'lodash';

import ProviderChoices from "./ProviderChoices";
import LocalUserRegister from "./LocalUserRegister";

const styles = theme => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing.unit * 2
    }
  },
  or: {
    textAlign: 'center'
  }
});

class Register extends Component {
  static propTypes = {
    onRegister: PropTypes.func,
    onRegisterWithProvider: PropTypes.func,
    providers: PropTypes.arrayOf(PropTypes.string),
    registerFailed: PropTypes.string
  };

  render() {
    const {
      classes,
      onRegister,
      onRegisterWithProvider,
      registerFailed,
      providers
    } = this.props;
    return (
        <div className={classes.root}>
          <LocalUserRegister onRegister={onRegister} registerFailed={registerFailed}/>

          {!_.isEmpty(providers) && <Fragment>
            <div className={classes.or}>or</div>

            <ProviderChoices register
                             onChoice={onRegisterWithProvider}
                             providers={providers}
            />
          </Fragment>}
        </div>
    );
  }
}

export default withStyles(styles)(Register);