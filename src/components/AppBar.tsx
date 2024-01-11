import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../styles';

interface IAppbarProps {
  date: string;
}

const AppBar: React.FC<IAppbarProps> = props => {
  const {date} = props;
  return (
    <View style={styles.appBarArea}>
      <SafeAreaView>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.todo}>My Todo List</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  appBarArea: {
    height: 200,
    backgroundColor: Colors.APPCOLOR,
  },
  date: {
    marginTop: 10,
    color: Colors.WHITE,
    textAlign: 'center',
  },
  todo: {
    fontWeight: '700',
    marginTop: 40,
    color: Colors.WHITE,
    textAlign: 'center',
    fontSize: 30,
  },
});

export default AppBar;
