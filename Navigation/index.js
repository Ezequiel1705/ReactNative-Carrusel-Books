import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { SimpleLineIcons, MaterialIcons, MaterialCommunityIcons} from "@expo/vector-icons";

import User from '../Images/carlitos.jpg'
import Home from '../Screens/Home';
import Categories from '../Screens/Categories'
import Contact from '../Screens/Contact'
import Settings from '../Screens/Settings'

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      drawerContent={
        (props) => {
          return (
            <SafeAreaView>
              <View
                style={{
                  height: 300,
                  width: '100%',
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomColor: "#f4f4f4",
                  borderBottomWidth: 1
                }}
              >
                <Image
                  source={User}
                  style={{
                    height: 130,
                    width: 130,
                    borderRadius: 65
                  }}
                />
                <Text
                  style={{
                    fontSize: 22,
                    marginVertical: 6,
                    fontWeight: "bold",
                    color: "#111"
                  }}
                >Carlos Garcia</Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#111"
                  }}
                >Pianista/ Artista</Text>
              </View>
              <DrawerItemList {...props} />
            </SafeAreaView>
          )
        }
      }
      
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#5ce1e6",
          width: 250
        },
        headerStyle: {
          backgroundColor: "#635985",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25
        },
        drawerLabelStyle: {
          color: "#000"
        }
      }}>
        
        <Drawer.Screen 
          name='Home' 
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={25} color="#000" />
            )
          }} 
          component={Home}
        />
        <Drawer.Screen name='Categories' options={{
          drawerLabel: 'Categories',
          title: 'Categories',
          drawerIcon: () => (
            <MaterialIcons name="category" size={25} color="#000" />
          )
        }}
          component={Categories}
        />
        <Drawer.Screen name='Contact' options={{
            drawerLabel: "Contact",
            title: "Contact",
            drawerIcon: () => (
              <MaterialCommunityIcons name="message-alert-outline" size={25} color="#000" />
            )
          }}
          component={Contact}
          />
        <Drawer.Screen name='Settings' options={{
            drawerLabel: "Settings",
            title: "Settings",
            drawerIcon: () => (
              <SimpleLineIcons name="settings" size={25} color="#000" />
            )
          }}
          component={Settings}
          />        
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})