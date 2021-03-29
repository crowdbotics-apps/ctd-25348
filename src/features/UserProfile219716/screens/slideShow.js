import React from 'react';
import {View, Image} from 'react-native';
import {withStyles, ViewPager} from 'react-native-ui-kitten';
import {Gallery} from '../components/gallery';
import {data} from '../../../data';
import formatNumber from '../utils/textUtils';

class _SlideShow extends React.Component {
  static navigationOptions = {
    title: 'Slide Show'.toUpperCase(),
  };

  state = {
    data: data.getUser(),
    selectedIndex: 0,
  };

  onIndexChange = selectedIndex => {
    this.setState({selectedIndex});
  };

  componentDidMount(){
    const selectedIndex = this.props.navigation.getParam('index', 0)
    this.setState({selectedIndex});
  }

  render = () => {
    const {themedStyle} = this.props;

    return (
      <ViewPager
        style={themedStyle.root}
        selectedIndex={this.state.selectedIndex}
        onSelect={this.onIndexChange}>
        {this.state.data.images.map((item, i) => {
          return (
            <View key={i}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  padding: 5,
                }}
                source={item}
              />
            </View>
          );
        })}
      </ViewPager>
    );
  };
}

export default SlideShow = withStyles(_SlideShow, theme => ({
  root: {
    backgroundColor: theme['color-basic-100'],
  },
  header: {
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 17,
  },
  userInfo: {
    flexDirection: 'row',
    paddingVertical: 18,
  },
  bordered: {
    borderBottomWidth: 1,
    borderColor: theme['color-basic-400'],
  },
  section: {
    flex: 1,
    alignItems: 'center',
  },
  space: {
    marginBottom: 3,
    color: theme['color-basic-1000'],
  },
  separator: {
    backgroundColor: theme['color-basic-400'],
    alignSelf: 'center',
    flexDirection: 'row',
    flex: 0,
    width: 1,
    height: 42,
  },
  buttons: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  button: {
    marginTop: 18,
    alignSelf: 'center',
    width: 140,
  },
  text: {
    color: theme['color-basic-1000'],
  },
}));
