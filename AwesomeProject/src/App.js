import React,{useState} from 'react'; "7.2K (gzipped:2.9K)";
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';
import Workscard from './components/WorksCard/WorksCard';


function App() {


  return(
      <View style={styles.container}>
        <Workscard />
        <View style={styles.body}>
               
           </View>
       
      </View>

    )
};

export default App;

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#102027'
  },
  
  
      })