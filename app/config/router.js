import react from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './../screens/Home.js';
import Logs from './../screens/Logs.js';
import VisitorsLog from './../screens/VisitorsLog.js';
import LogConfirm from '../screens/LogConfirm.js';

const RootStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: ()=>null
    }
  },
  Logs: {
    screen: Logs,
    navigationOptions: {
      title: 'Logs',
      headerStyle: {
        backgroundColor: '#880E4F'
      },
      headerTintColor: '#F5FCFF'
    }
  },
  VisitorsLog: {
    screen: VisitorsLog,
    navigationOptions: {
      title: "Visitor's Log",
      headerStyle: {
        backgroundColor: '#880E4F'
      },
      headerTintColor: '#F5FCFF'
    }
  },
  LogConfirm: {
    screen: LogConfirm,
    navigationOptions: {
      header: ()=>null
    }
  }
}, {
  initialRouteName: 'Home',
});

export default RootStack;
