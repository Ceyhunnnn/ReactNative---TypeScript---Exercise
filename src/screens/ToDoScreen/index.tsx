import {View} from 'react-native';
import AppBar from '../../components/AppBar';
import React from 'react';

export const ToDoScreen: React.FC<any> = () => {
  return (
    <View>
      <AppBar date="January 11, 2024" />
    </View>
  );
};
