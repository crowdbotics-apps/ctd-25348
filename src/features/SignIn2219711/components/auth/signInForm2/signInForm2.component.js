import React from 'react';
import {View, ViewProps} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  Icon,
  Input
} from 'react-native-ui-kitten';
import {Button} from 'react-native-ui-kitten';
import {textStyle, ValidationInput} from '../../common';
// import {
//   EyeOffIconFill,
//   PersonIconFill,
// } from '@src/assets/icons';
import {NameValidator, PasswordValidator} from '../../../core/validators';

class SignInForm2Component extends React.Component {
  state = {
    username: undefined,
    password: undefined,
  };

  onForgotPasswordButtonPress = () => {
    this.props.onForgotPasswordPress();
  };

  onUsernameInputTextChange = username => {
    this.setState({username});
  };

  onPasswordInputTextChange = password => {
    this.setState({password});
  };

  isValid = value => {
    const {username, password} = value;

    return username !== undefined && password !== undefined;
  };

  renderEyeOffIconFill = style => {
    const {themedStyle} = this.props;

    return <Icon {...style} name="eye-off" />;
  };

  renderPersonIconFill = style => {
    const {themedStyle} = this.props;

    return <Icon {...style} name="person" />;
  };

  render() {
    // const {style, themedStyle, ...restProps} = this.props;
    const {
      style,
      themedStyle,
      theme,
      onPasswordInputTextChange,
      onUsernameInputTextChange,
      username,
      password,
      ...restProps
    } = this.props;

    return (
      <View style={[themedStyle.container, style]} {...restProps}>
        <View style={themedStyle.formContainer}>
          {/* <ValidationInput
            textStyle={textStyle.paragraph}
            placeholder="User Name"
            //icon={this.renderPersonIconFill()}
            validator={NameValidator}
            onChangeText={this.onUsernameInputTextChange}
          /> */}
          <Input
            textStyle={textStyle.paragraph}
            placeholder="User Name"
            autoCapitalize="none"
            status={username && this.getStatus(NameValidator(username))}
            icon={this.renderPersonIconFill}
            value={username}
            onChangeText={onUsernameInputTextChange}
          />

          {/* <ValidationInput
            style={themedStyle.passwordInput}
            textStyle={textStyle.paragraph}
            placeholder="Password"
            //icon={this.renderEyeOffIconFill()}
            secureTextEntry={true}
            validator={PasswordValidator}
            onChangeText={this.onPasswordInputTextChange}
          /> */}
          <Input
          style={themedStyle.passwordInput}
            textStyle={textStyle.paragraph}
            placeholder="Password"
            icon={this.renderEyeOffIconFill}
            secureTextEntry={true}
            //status={password && this.getStatus(PasswordValidator(password))}
            value={password}
            onChangeText={onPasswordInputTextChange}
          />
          <View style={themedStyle.forgotPasswordContainer}>
            <Button
              style={themedStyle.forgotPasswordButton}
              textStyle={themedStyle.forgotPasswordText}
              appearance="ghost"
              activeOpacity={0.75}
              onPress={this.onForgotPasswordButtonPress}>
              Forgot your password?
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

export const SignInForm2 = withStyles(SignInForm2Component, theme => ({
  container: {},
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  passwordInput: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
  forgotPasswordText: {
    fontSize: 15,
    color: theme['text-hint-color'],
    ...textStyle.subtitle,
  },
}));
