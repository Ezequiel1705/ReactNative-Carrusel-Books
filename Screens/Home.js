import { StyleSheet, Text, View, Dimensions, Image, FlatList, SafeAreaView, Animated, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';

import EGP from '../Images/369.jpg';
import hp2 from '../Images/hp2.jpg';
import hp3 from '../Images/hp3.jpg';
import hp4 from '../Images/hp4.jpg';
import stepehn1 from '../Images/stepehn1.jpg';
import stepehn2 from '../Images/stepehn2.jpg';
import { Searchbar, Button } from 'react-native-paper';


const imagenes = [
  EGP,
  hp2,
  hp3,
  hp4,
  stepehn1,
  stepehn2
];

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ANCHO_CONTENEDOR = width * 0.7;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;
const ESPACIO = 10;
const ALTURA_BACKDROP = height * 0.9;


//FUNCION PARA IMAGEN SUPERIOR 
function BackDrop({ scrollX }) {
  return(
      <View style={[
              {
                position: 'absolute',
                width: width,
                height: ALTURA_BACKDROP,
                top: 0
              },
              StyleSheet.absoluteFillObject
            ]}
            >
          {imagenes.map((imagen, index) =>{
            const inputRange = [
              (index - 1) * ANCHO_CONTENEDOR,
              index * ANCHO_CONTENEDOR,
              (index + 1) * ANCHO_CONTENEDOR
            ];
            
            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0, 1, 0]
            });

              return(
                <Animated.Image 
                    source={imagen}
                    key={index}
                    blurRadius={10}
                    style={[{height: ALTURA_BACKDROP, width: width, opacity}, StyleSheet.absoluteFillObject]}
                
                />
              );
          }) }
          <LinearGradient 
              colors={['transparent', 'white']}
              style={{height: ALTURA_BACKDROP, width, position: 'absolute', bottom: 0}}
          />
      </View>
  )
}

 
//COMPONENTE CARRUSEL 
const Home = () => {

    //con esto guardariamos el deslizamiento en X
    const scrollX = React.useRef(new Animated.Value(0)).current; //Valor animado que va a empezar desde 0 y esto lo vamos a envolver en una referencia de React para que no se pierda.
    
    const [ searchQuery, setSearchQuery ] = useState('');
    const onChangeSearch = query => setSearchQuery(query);


    return(

    <SafeAreaView style={styles.container}>
      {/* <StatusBar hidden /> */}
      <BackDrop scrollX={scrollX} /> 
      <Searchbar placeholder='Search' onChange={onChangeSearch} value={searchQuery}/>
      <Animated.FlatList
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: { x: scrollX}}}],
          { useNativeDriver: true}
        )}
        data={imagenes}
        horizontal={true}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingTop: 200, paddingHorizontal: ESPACIO_CONTENEDOR}}
        decelerationRate={0}
        snapToInterval={ANCHO_CONTENEDOR}
        scrollEventThrottle={16}
        keyExtractor={(item ) => item}
        renderItem= {({item, index}) => {
          const inputRange = [
          (index - 1 ) * ANCHO_CONTENEDOR, //elemento anterio
          index * ANCHO_CONTENEDOR, //elemento en curso
          (index + 1) * ANCHO_CONTENEDOR //elemento que sigue
          ];
  
          const scrollY = scrollX.interpolate({
            inputRange,
            outputRange: [ 0, -50, 0],
          });
  
          return (
            <View style={{width: ANCHO_CONTENEDOR}}>
              <Animated.View style={{
                marginHorizontal: ESPACIO,
                padding: ESPACIO,
                borderRadius: 34,
                backgroundColor: '#DDE6ED',
                alignItems: 'center',
                transform: [{ translateY: scrollY }]
              }}>
                <Image 
                  source={item} /* {{uri: item}} */
                  style={styles.posterImage}
                />
                <Text style={styles.textCards}>Destacados</Text>
                <Button mode='contained' style={{backgroundColor: '#5ce1e6'}} onPress={() => console.log('Presionado')}>Comprar</Button>
              </Animated.View>
            </View>
            
          );
        }}
      />
    </SafeAreaView>
  )
  
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  posterImage: {
    width: '100%',
    height: ANCHO_CONTENEDOR * 1.2,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
    marginBottom: 10
  },
  textCards: {
    fontSize: 20,
    fontFamily: 'sans-serif'
  }
})