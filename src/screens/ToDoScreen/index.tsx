import {
  Button,
  FlatList,
  Modal,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import AppBar from '../../components/AppBar';
import React, {useState} from 'react';
import CustomButton from '../../components/CustomButton';
import {styles} from './styles';
import {ToDoList} from '../../components/TodoList';
import {monthList} from '../../utils/monthList';

export const ToDoScreen: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<ToDoTypes[]>([]);
  const [text, setText] = useState<string>('');
  const date: Date = new Date();
  const dateTitle =
    monthList[date.getMonth()] +
    ' ' +
    date.getDay() +
    ', ' +
    date.getFullYear();

  const addTodoItem = () => {
    if (text.length > 0) {
      let todoObject: ToDoTypes = {
        isComplated: false,
        id: todoList.length + 1,
        text: text,
      };
      setTodoList([...todoList, todoObject]);
      setModal(false);
      setText('');
    }
  };
  const complateTodo = (data: ToDoTypes) => {
    if (!data.isComplated) {
      let tempArr = [...todoList];
      tempArr[data.id - 1];
      tempArr[data.id - 1].isComplated = true;
      setTodoList(tempArr);
    }
  };

  return (
    <>
      <View style={styles.content}>
        <StatusBar barStyle="light-content" />
        <View>
          <AppBar date={dateTitle} />
          {todoList.length > 0 ? (
            <View style={styles.todoArea}>
              <FlatList
                style={styles.flatList}
                data={todoList}
                renderItem={value => (
                  <ToDoList
                    todo={value.item}
                    onPress={(): void => complateTodo(value.item)}
                  />
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          ) : (
            <Text style={styles.notTodo}>There are no todos attached yet</Text>
          )}
        </View>
        <SafeAreaView style={styles.safeAre}>
          <CustomButton
            title="Add New Task"
            onPress={(): void => setModal(true)}
          />
        </SafeAreaView>
      </View>
      <Modal visible={modal} animationType="fade" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>Add New Task</Text>
            <TextInput
              onChangeText={e => setText(e)}
              style={styles.input}
              placeholder="Add new task"
            />
            <Button title="Add" onPress={addTodoItem} />
          </View>
        </View>
      </Modal>
    </>
  );
};
