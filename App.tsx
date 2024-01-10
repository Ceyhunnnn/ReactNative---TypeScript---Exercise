/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import CustomButton from './src/components/CustomButton';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <CustomButton
        title="Learn Typescript!"
        onPress={function (): void {
          console.log('Learn Typescript!');
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
export default App;
