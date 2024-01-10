import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

interface IButtonProps {
  title: string;
  onPress: () => void;
}
const CustomButton: React.FC<IButtonProps> = props => {
  const {title, onPress} = props;
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: '#212124',
  },
});

export default CustomButton;
