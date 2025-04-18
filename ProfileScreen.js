import React from 'react';
import { View, Text } from 'react-native';

export default function ProfileScreen({ route }) {
  const { username } = route.params;
  return (
    <View style={{ padding: 20 }}>
      <Text testID="welcomeText">Welcome, {username}!</Text>
    </View>
  );
}
