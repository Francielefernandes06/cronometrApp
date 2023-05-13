import React , {useState}from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';

export default function App() {

  const [numero, setNumero] =useState(0);
  const [botao, setBotao] =useState('Iniciar')

  function iniciar(){
   
  }

  function limpar(){

  }
  return (
    <View style={styles.container}>

      <Image source={require('./src/images/crono.png')}  />
      <Text style={styles.timer}>{numero}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={iniciar}>
          <Text style={styles.btnText}>{botao}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={limpar}>
          <Text style={styles.btnText}>Limpar</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.areaUltima}>
        <Text style={styles.textoCorrida}>Ultima tempo: 00:05:00</Text>

      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333D54',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer:{
    marginTop: -170,
    fontSize: 45,
    fontWeight: 'bold',
    color: '#FFF',
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 110,
    height: 40,
  },
  btn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333D54',
  },
  areaUltima:{
    marginTop: 40,
  },
  textoCorrida:{
    fontSize: 25,
    fontStyle: 'italic',
    color: '#FFF',
  }
  
});
