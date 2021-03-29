import React from 'react';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {SignInForm2Data} from '../../components/auth';
import {SignIn2} from './signIn2.component';
import {connect} from 'react-redux';
import * as emailAuthActions from '../../redux/actions';

export class _SignIn2Container extends React.Component {
  static navigationOptions = {
    header: null,
  };

  navigationKey = 'SignIn2Container';

  onSignInPress = data => {
    //this.props.navigation.goBack();
  };

  onSignUpPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Sign Up 2',
    });
  };

  onForgotPasswordPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Forgot Password',
    });
  };

  render() {
    return (
      <SignIn2
        onSignInPress={this.props.login}
        onSignUpPress={this.onSignUpPress}
        onForgotPasswordPress={this.onForgotPasswordPress}
        errorMsg={this.props.signInErrors}

      />
    );
  }
}

const mapStateToProps = state => ({
  signInErrors: state.SignIn02Blueprint.errors.SignIn,
});

const mapDispatchToProps = {
  login: emailAuthActions.login
}

export const SignIn2Container =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_SignIn2Container);