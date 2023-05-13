import React , {useState}from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';

let timer= null;
let ss= 0;
let mm= 0;
let hh= 0;


export default function App() {

  const [numero, setNumero] =useState(0);
  const [botao, setBotao] =useState('Iniciar')
 
  const [ultimo, setUltimo] =useState(null)

  function iniciar(){
    if(timer !== null){
      clearInterval(timer);
      timer = null;
      setBotao('Iniciar');
    }else{
      
      timer = setInterval(() => {
        ss++;
        if(ss==60){
          ss=0;
          mm++;
        }
        if(mm==60){
          mm=0;
          hh++;
        }

        let format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm ) + ':' + (ss < 10 ? '0' + ss : ss);

        setNumero(format);
  

        
      }, 1000);
      setBotao('Parar');
    }
   
  }

  function limpar(){
    if(timer !== null){
      clearInterval(timer);
      timer = null;
    }

    setUltimo(numero);
    setNumero(0);
    ss=0;
    mm=0;
    hh=0;
    setBotao('Iniciar');

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
        <Text style={styles.textoCorrida}>
          {ultimo ? 'Ultimo tempo: ' + ultimo : ''}
        </Text>

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
