import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'test' && password === '1234') {
      navigation.navigate('Profile', { username });
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        testID="usernameInput"
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        testID="passwordInput"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} testID="loginButton" />
    </View>
  );
}
