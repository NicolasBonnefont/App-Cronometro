import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextBase } from 'react-native';
import cronometro from './src/assets/cronometro.png'

export default function App() {

  const [numero, setNumero] = useState(0)
  const [timer, setTimer] = useState(null)
  const [textBtn, setTextBtn] = useState('GO')
  const [ultimo, setUltimo] = useState('')

  function handleGo() {
    let n = numero

    if (timer != null) {
      clearInterval(timer)
      setTimer(null)
      setTextBtn('GO')
    } else {
      setTimer(setInterval(() => { setNumero(n += 0.1) }, 100))
      setTextBtn('PAUSE')
    }

  }

  function handleStop() {
    clearInterval(timer)
    setUltimo(`Ultimo tempo : ${numero.toFixed(1)} s`)
    setNumero(0)
    setTextBtn('GO')
    setTimer(null)


  }

  return (
    <View style={styles.container}>
      <Image style={styles.cronometro} source={cronometro} />

      <Text style={styles.timer}>{numero.toFixed(1)}</Text>

      <View style={styles.btnArea}>

        <TouchableOpacity style={styles.btn} onPress={() => handleGo()}>
          <Text style={styles.btnTexto}>{textBtn}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => handleStop()}>
          <Text style={styles.btnTexto}>STOP</Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.txtUltimo}>{ultimo != '' ? ultimo : ''}</Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    width: 150,
    margin: 7,
    borderRadius: 9
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'

  },

  cronometro: {
    width: 250,
    height: 300,
  },
  txtUltimo: {
    marginTop: 35,
    color: '#fff',
    fontWeight: 'bold',
    fontSize:16
  }
});
