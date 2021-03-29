import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Switch,
} from 'react-native';
import {Text, withStyles, Toggle, CheckBox} from 'react-native-ui-kitten';

const privacyUrl = 'https://www.crowdbotics.com/privacy-policy';

export class _Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings'.toUpperCase(),
  };

  state = {
    sendPush: true,
    shouldRefresh: false,
    twitterEnabled: true,
    googleEnabled: false,
    facebookEnabled: true,
  };

  onPushNotificationsSettingChanged = value => {
    this.setState({sendPush: value});
  };

  onRefreshAutomaticallySettingChanged = value => {
    this.setState({shouldRefresh: value});
  };

  gotoURL = url => {
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log("Can't handle url: " + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => console.error('An error occurred', err));
  };

  render = () => (
    <ScrollView style={this.props.themedStyle.container}>
      <View style={this.props.themedStyle.section}>
        <View
          style={[this.props.themedStyle.row, this.props.themedStyle.heading]}>
          <Text category="h6" style={this.props.themedStyle.text}>
            PROFILE SETTINGS
          </Text>
        </View>
        <View style={this.props.themedStyle.row}>
          <TouchableOpacity style={this.props.themedStyle.rowButton}>
            <Text category="s1" style={this.props.themedStyle.text}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
        <View style={this.props.themedStyle.row}>
          <TouchableOpacity style={this.props.themedStyle.rowButton}>
            <Text category="s1" style={this.props.themedStyle.text}>
              Change Password
            </Text>
          </TouchableOpacity>
        </View>
        <View style={this.props.themedStyle.row}>
          <Text category="s1" style={this.props.themedStyle.text}>
            Send Push Notifications
          </Text>
          <Switch
            style={this.props.themedStyle.switch}
            onValueChange={this.onPushNotificationsSettingChanged}
            value={this.state.sendPush}
          />
          
        </View>
        <View style={this.props.themedStyle.row}>
          <Text category="s1" style={this.props.themedStyle.text}>
            Refresh Automatically
          </Text>
    
          <Switch
            style={this.props.themedStyle.switch}
            onValueChange={this.onRefreshAutomaticallySettingChanged}
            value={this.state.shouldRefresh}
          />
        </View>
      </View>

      <View style={this.props.themedStyle.section}>
        <View
          style={[this.props.themedStyle.row, this.props.themedStyle.heading]}>
          <Text category="h6" style={this.props.themedStyle.text}>
            SUPPORT
          </Text>
        </View>
        <View style={this.props.themedStyle.row}>
          <TouchableOpacity style={this.props.themedStyle.rowButton}>
            <Text category="s1" style={this.props.themedStyle.text}>
              Help
            </Text>
          </TouchableOpacity>
        </View>
        <View style={this.props.themedStyle.row}>
          <TouchableOpacity
            style={this.props.themedStyle.rowButton}
            onPress={this.gotoURL.bind(this, privacyUrl)}>
            <Text category="s1" style={this.props.themedStyle.text}>
              Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>
        <View style={this.props.themedStyle.row}>
          <TouchableOpacity style={this.props.themedStyle.rowButton}>
            <Text category="s1" style={this.props.themedStyle.text}>
              Terms & Conditions
            </Text>
          </TouchableOpacity>
        </View>
        <View style={this.props.themedStyle.row}>
          <TouchableOpacity style={this.props.themedStyle.rowButton}>
            <Text category="s1" style={this.props.themedStyle.text}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Settings = withStyles(_Settings, theme => ({
  container: {
    backgroundColor: theme['color-basic-100'],
  },
  header: {
    paddingVertical: 25,
  },
  section: {
    marginVertical: 25,
  },
  heading: {
    paddingBottom: 12.5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 17.5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme['color-basic-400'],
    alignItems: 'center',
  },
  rowButton: {
    flex: 1,
    paddingVertical: 24,
  },
  switch: {
    marginVertical: 14,
  },
  text: {
    color: theme['color-basic-1000'],
  },
}));
