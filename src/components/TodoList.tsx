import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {Colors} from '../styles';

interface ToDoList {
  todo: ToDoTypes;
  onPress?: () => void;
}
export const ToDoList: React.FC<ToDoList> = props => {
  const {todo, onPress} = props;

  return (
    <Pressable key={todo.id} style={styles.todoItem} onPress={onPress}>
      <View style={styles.content}>
        <Text style={[styles.text, todo.isComplated && styles.isComplatedText]}>
          {todo.id}
        </Text>
        <Text
          style={[styles.text, todo.isComplated && styles.isComplatedText]}
          numberOfLines={1}>
          {todo.text}
        </Text>
      </View>
      <View
        style={[
          styles.isComplate,
          {backgroundColor: todo.isComplated ? Colors.GREEN : Colors.RED},
        ]}
      />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  todoItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.TODO,
    marginBottom: 5,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
  },
  isComplate: {
    width: 15,
    height: 15,
    borderRadius: 50,
  },
  isComplatedText: {
    textDecorationLine: 'line-through',
  },
});
