import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Login from './src/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home'
import ProductList from './src/ProductList';
import ProductDetail from './src/ProductDetail';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Giriş Ekranı'}}
        />
        <Stack.Screen
          name="Product"
          component={ProductList}
          options={{title: 'Ürünler'}}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{title: 'Detay'}}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Anasayfa'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App