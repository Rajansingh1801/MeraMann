import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const submit = () => {
    if (username === 'rajansinghnahne@gmail.com' && password === '12345') {
      navigation.navigate('MainHome');
    } else {
      alert('plase Enter valid detail');
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/log.png')}
        resizeMode="cover"
        color="white"
        style={styles.image}>
        <View style={{width: '70%', paddingStart: 10}}>
          <KeyboardAvoidingView>
            <TextInput
              placeholder="Enter Your Email Address"
              style={styles.input}
              onChangeText={text => {
                setUsername(text);
              }}
              value={username}
            />
            <TextInput
              placeholder="Enter Your Password"
              secureTextEntry={true}
              style={[styles.input, {marginTop: 8}]}
              onChangeText={pass => {
                setPassword(pass);
              }}
              value={password}
            />
          </KeyboardAvoidingView>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={[
                styles.btn,
                {backgroundColor: username && password ? 'black' : 'gray'},
              ]}
              onPress={() => submit()}
              disabled={!username || !password}>
              <Text style={styles.txt}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Signup')}
              style={styles.btn}>
              <Text style={styles.txt}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  image: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#00337C',
    borderBottomColor: '#C7B8BF',
    borderBottomWidth: 2,
    padding: 5,
    borderTopEndRadius: 8,
    borderTopStartRadius: 8,
    color: 'white',
    fontFamily: 'LibreBaskerville-Bold',
  },
  btn: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    alignSelf: 'center',
    marginTop: 8,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'gray',
  },
  txt: {
    fontWeight: '600',
    color: 'white',
  },
});
