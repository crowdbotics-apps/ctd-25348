import React, {PureComponent} from 'react';
import {View, Platform, StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-ui-kitten';

export default class Root extends PureComponent {
  static navigationOptions = {
    title: 'Profiles Blueprint'.toUpperCase(),
    headerBackTitle: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('Profile1')}
          style={styles.item}>
          Profile V1
        </Button>

        <Button
          onPress={() => this.props.navigation.navigate('Profile2')}
          style={styles.item}>
          Profile V2
        </Button>

        <Button
          onPress={() => this.props.navigation.navigate('Profile3')}
          style={styles.item}>
          Profile V3
        </Button>

        <Button
          onPress={() => this.props.navigation.navigate('SlideShow')}
          style={styles.item}>
          Photo Slide Show
        </Button>

        <Button
          onPress={() => this.props.navigation.navigate('SplashScreen')}
          style={styles.item}>
          Main Menu
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  statusbar: {
    height: Platform.select({ios: 20, android: 0}),
  },
  item: {
    borderBottomWidth: 1,
    marginTop: 20,
    borderBottomColor: 'gray',
  },
});
