import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Router from './src/Navigation';

export default class App extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Router />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
