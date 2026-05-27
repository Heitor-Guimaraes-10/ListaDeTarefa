import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen({navigation}) {

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
        <Text style={styles.subtitle}>Faça login para continuar</Text>
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

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Esqueceu a senha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Todo')}>
          <Text style={styles.buttonText}>Lista de tarefas</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 24, alignItems: 'center' }}>
        <Text style={{ color: '#6c727f' }}>Ou entre com</Text>
        <TouchableOpacity style={{ marginTop: 18, backgroundColor: '#d84437', padding: 12, borderRadius: 8, width: '100%', alignItems: 'center' }}>
          <Text style={{ fontSize: 16, color: '#fff' }}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 18, backgroundColor: '#4267b2', padding: 12, borderRadius: 8, width: '100%', alignItems: 'center' }}>
          <Text style={{ fontSize: 16, color: '#fff' }}>Facebook</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Não tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Cadastre-se</Text>
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