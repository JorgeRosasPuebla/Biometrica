import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Screen1({ navigation }) {
  return (
    <View>
      <Text>Pantalla 1</Text>
      <Button
        title="Ir a Pantalla "
        onPress={() => navigation.navigate('Screen2')}></Button>
    </View>
  );
}
