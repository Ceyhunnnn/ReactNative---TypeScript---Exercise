import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {Colors} from '../styles';

interface IButtonProps {
  title?: string;
  onPress: () => void;
}
const CustomButton: React.FC<IButtonProps> = props => {
  const {title = 'Custom Button', onPress} = props;
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 16,
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 0.2,
    backgroundColor: Colors.APPCOLOR,
  },
  text: {
    textAlign: 'center',
    fontWeight: '600',
    color: 'white',
  },
});

export default CustomButton;
