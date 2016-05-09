import React,{
    Component,
    StyleSheet,
    Platform,
    View,
    Text,
    Navigator,
    TouchableOpacity,
} from 'react-native';

export default class NavigationVC extends Component {
    constructor(props) {
      super(props);
    }

    _navigationBar() {
      return {

        LeftButton: function(route, navigator, index, navState) {
          if (index === 0) {
            return null;
          }

          var previousRoute = navState.routeStack[index - 1];
          return (
            <TouchableOpacity
              onPress={() => navigator.pop()}
              style={styles.navBarLeftButton}>
              <Text style={[styles.navBarText, styles.navBarButtonText]}>
                {previousRoute.title}
              </Text>
            </TouchableOpacity>
          );
        },

        RightButton: function(route, navigator, index, navState) {
          return (
            <TouchableOpacity
              onPress={() => route.rightButton && route.rightButton.clicked && route.rightButton.clicked()}
              style={styles.navBarRightButton}>
              <Text style={[styles.navBarText, styles.navBarButtonText]}>
                {route.rightButton && route.rightButton.title}
              </Text>
            </TouchableOpacity>
          );
        },

        Title: function(route, navigator, index, navState) {
          return (
            <Text style={[styles.navBarText, styles.navBarTitleText]}>
              {route.title}
            </Text>
          );
        },
      }
    }

    render() {
        return (
        <Navigator
          sceneStyle={{paddingTop: (Platform.OS === 'android' ? 66 : 64)}}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={this._navigationBar()}
              style={styles.navBar}
            />
          }
          initialRoute={{ title:this.props.title, component: this.props.component}}
          configureScene={(route) => {
            return Navigator.SceneConfigs.PushFromRight;
          }}
          renderScene={(route, navigator) => {
            let scene = <route.component {...route.params} route={route} navigator={navigator}/>;
            return scene;
          }} />
        );
    }
}

var styles = StyleSheet.create({
  messageText: {
    fontSize: 17,
    fontWeight: '500',
    padding: 15,
    marginTop: 50,
    marginLeft: 15,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CDCDCD',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
  navBar: {
    backgroundColor: '#EBEBEB',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: '#373E4D',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: '#373E4D',
  },
  scene: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#EAEAEA',
  },
});
