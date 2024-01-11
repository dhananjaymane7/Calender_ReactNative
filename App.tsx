import React from 'react';
import { View } from 'react-native';
import MyDatePicker from './screens/MyDatePicker';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MyDatePicker />
    </View>
  );
};

export default App;