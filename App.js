import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {

var [Real, setTotalReal] = useState('');
var [Dollar, setTotalDollar] = useState('');
var [cotacao, setCotacao] = useState('');

function CalcularTotal(){

Dollar = parseFloat(Real) / parseFloat(cotacao);

alert("Você terá um total de US$" + Dollar.toFixed(2) + " para investir!");

 }
  return (
    <View style={styles.container}>

      <Image style={styles.Albert_dollar} resizeMode='center'
      source={require('./assets/Albert_dollar.png')}></Image>

      <Text style={styles.titulo}>Converterei o R$ em US$!</Text>

      <TextInput style={styles.campoCotacao} placeholder= "Diga-me a cotação do dólar:" 
      keyboardType="numeric"
      onChangeText={(cotacao) => setCotacao(cotacao)}/>

      <TextInput style={styles.campoInvestimento} placeholder= "Quantos R$ investirá em US$?" 
      keyboardType="numeric"
      onChangeText={(Real) => setTotalReal(Real)}
      />
  
      <TouchableOpacity style={styles.botao} onPress={CalcularTotal}>

      <Text style={styles.textoBotao}>
      Resposta do investidor
      </Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor:"#C1FAFB",
},

Albert_dollar:{
  width: 300,
  height: 400,
  alignSelf: 'center',
},

titulo:{
  fontSize: 30,
  textAlign: 'center', 
  color: '#0800ff',
  fontWeight: 'bold',  //colocando o texto em negrito//
},

campoCotacao:{
  fontSize: 20,
  textAlign: 'center',
  marginTop: 30,
  backgroundColor: '#ffffff', 
  borderRadius: 10,
  padding: 15,
  color: '#0800ff',
  margin: 30,
},

campoInvestimento:{
  fontSize: 20,
  textAlign: 'center',
  marginTop: 5,
  backgroundColor: '#ffffff', 
  borderRadius: 10,
  padding: 15,
  color: '#0800ff',
  marginLeft: 30,
  marginRight: 30,
},

botao:{
  fontSize: 20,
  textAlign: 'center',
  marginTop: 30,
  backgroundColor: '#0800ff', 
  borderRadius: 9,
  padding: 10,
  margin: 100,
},

textoBotao:{
  fontSize: 18,
  textAlign: 'center',
  color: '#fff',
},

});