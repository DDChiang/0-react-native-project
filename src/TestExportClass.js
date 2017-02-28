import React, { Component } from 'react';
import TestChild from './TestChild';
import { View } from 'react-native';

export default function TextExportClass() {
  return (
    <View>
      <TestChild val='render child!' />
    </View>
  );
};
