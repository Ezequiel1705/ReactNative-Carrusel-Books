import { Image, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Banner, Card, Text, Button } from 'react-native-paper'

const Categories = () => {

  return (
    <Card>
    <Card.Content>
      <Text variant="titleLarge">Científicos</Text>
      <Text variant="bodyMedium">"Explorando los límites del conocimiento: Libros científicos que te desafían a pensar más allá"</Text>
      <Button icon="more" mode='contained' onPress={() => console.log('Presionado')}>More</Button>
    </Card.Content>
    <Card.Content>
      <Text variant="titleLarge">Poéticos</Text>
      <Text variant="bodyMedium">Sumérgete en la belleza de las palabras: Libros que despiertan emociones en versos</Text>
      <Button icon="more" mode='contained' onPress={() => console.log('Presionado')}>More</Button>
    </Card.Content>
    <Card.Content>
      <Text variant="titleLarge">Misterio</Text>
      <Text variant="bodyMedium">Sumérgete en la intriga: Libros que te mantendrán en vilo hasta la última página</Text>
      <Button icon="more" mode='contained' onPress={() => console.log('Presionado')}>More</Button>
    </Card.Content>
    <Card.Content>
      <Text variant="titleLarge">Comedia</Text>
      <Text variant="bodyMedium">Risas aseguradas: Libros que te harán estallar en carcajadas</Text>
      <Button icon="more" mode='contained' onPress={() => console.log('Presionado')}>More</Button>
    </Card.Content>
    <Card.Content>
      <Text variant="titleLarge">Ficcion</Text>
      <Text variant="bodyMedium">Viaja a mundos inimaginables: Descubre la magia de la ficción literaria</Text>
      <Button icon="more" mode='contained' onPress={() => console.log('Presionado')}>More</Button>
    </Card.Content>
    
  </Card>
  );
};

export default Categories

const styles = StyleSheet.create({})