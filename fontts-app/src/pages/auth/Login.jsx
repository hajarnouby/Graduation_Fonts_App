import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { C, F, SZ } from '../../styles/tokens';

const Login = ({ navigation }) => {
  return (
    <View style={ss.wrapscr}>
      <Text style={ss.tit}>Login</Text>
    </View>
  );
};

const ss = StyleSheet.create({
  wrapscr: {
    flex:            1,
    backgroundColor: C.lnavy,
    justifyContent:  'center',
    alignItems:      'center',
  },
  tit: {
    fontFamily: F.semi,
    fontSize:   SZ.s28,
    color:      C.white,
  },
});

export default Login;
