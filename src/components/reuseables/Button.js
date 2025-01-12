import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { COLOR, FONT } from '../../data/StyleGuides';

export default function Button({ title ,marginTop,onPress,ButtonContainer,ButtonText,disable,marginBottom}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonContainer,{marginTop:marginTop,marginBottom:marginBottom},ButtonContainer]} disabled={disable}>
      <Text style={[styles.buttonText,ButtonText]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 58,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: COLOR.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: COLOR.white,
    fontFamily: FONT.Urbanist_Medium,
  },
});
