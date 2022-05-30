import { View, Text, StyleSheet, Image,Button,Alert} from 'react-native'
import React, {useState}from 'react';
import { TextInput } from 'react-native-paper';

const Login = ({navigation} ) => {
  const [userError, setUserError] = useState(false);
  
  return (
    <View style={styles.mainBox}>
      <View style={styles.box1}>
        <Image 
        style={styles.boxImage}
        source={require('./img/Login.jpg')}></Image>
      </View>
      <View style={styles.box2}>
      <TextInput
          label="Kullanıcı Adı"
          style={{margin: 10}}
          error={userError}
          mode="outlined"
        />
        <TextInput
          label="Şifre"
          secureTextEntry
          mode="outlined"
          style={{margin: 10}}
        />
      </View>
      <View style={styles.box3}>
        <Button
          color="#936af4"
          title="Giriş Yap"
          onPress={() => navigation.navigate("ProductList")}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  mainBox:{
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    backgroundColor:'white'
    
  },
  box1:{
    flex:2,
  },
  boxImage:{
    flex:2,
    resizeMode: 'contain',
    width: 372,
  },
  box2:{
    flex:1,
  },
  box3: {
    flex:1,
    paddingHorizontal: 32,
    justifyContent:'center',
    
  },

});

export default Login