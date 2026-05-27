import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function RegisterScreen({navigation}) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    console.log(email)
    console.log(senha)
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.subtitle}>Registrar</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.inputLabel}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder='seu-email@email.com.br'
          placeholderTextColor='#999'
          keyboardType='email-address'
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.inputLabel}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder='sua senha'
          placeholderTextColor='#999'
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />

       
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Ja tenho conta </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.registerText}>Logar</Text>
        </TouchableOpacity>
      </View>



    </View>

  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24
  },
  headerContainer: {
    marginBottom: 40,
    backgroundColor: '#a5a5a5ff',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1c1e',
    marginBottom: 8
  },
  subtitle: {
    fontSize: 16,
    color: '#ffffffff'
  },
  formContainer: {
    backgroundColor: '#ffffffff',
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3 //sombra para android
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#344054',
    marginBottom: 6
  },
  input: {
    height: 48,
    borderColor: '#d0d5dd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#1a1c1e',
    backgroundColor: '#f9fafb',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#0066cc',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 22
  },
  forgotPasswordText: {
    color: '#0066cc',
    fontSize: 14,
    fontWeight: '500'
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24
  },
  footerText: {
    fontSize: 14,
    color: '#6c727f'
  },
  registerText: {
    fontSize: 14,
    color: '#0066cc',
    fontWeight: 'bold'
  }


});