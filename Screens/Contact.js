import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, {useState} from 'react'

const Contact = () => {


  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  const handleNombreChange = (text) => {
    setNombre(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleSubmit = () => {
    console.log('Nombre:', nombre);
    console.log('Email:', email);
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, textAlign: "center"}}>Contactanos</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={handleNombreChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
})