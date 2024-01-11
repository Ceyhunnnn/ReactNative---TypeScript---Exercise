import {StyleSheet} from 'react-native';
import {Colors} from '../../styles';

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  centeredView: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '60%',
    gap: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: Colors.WHITE,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 0.5,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    borderColor: 'gray',
  },
  title: {marginHorizontal: 20, fontSize: 18},
  flatList: {position: 'absolute', width: '100%', top: -20},
  todoArea: {
    position: 'relative',
    marginHorizontal: 20,
  },
  notTodo: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  safeAre: {marginBottom: 10},
});
