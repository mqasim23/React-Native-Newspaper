import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Colors } from '../common';

const Screen = ({ style, children }) => {
  return (
    <SafeAreaView>
      <View style={{ ...styles.container, ...style }}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingBottom: 10,
    paddingVertical: 25,
  },
});

export default Screen;
