import React,{useState,} from 'react'; "7.2K (gzipped:2.9K)";
import {View,Text,TextInput,TouchableOpacity,ScrollView,} from 'react-native';
import styles from './WorksCard.styles';

function Workscard(props) {
    const [count, setCount] = useState(0);
    const [text,setText]= useState();
    const [textItems,setTextItems] = useState([]);
    
    function handleAdd() {
        

           if (!text!=("  ")) {
            alert('Please Enter Message');
            return;
          }
          if (!text==("")){
            
                setTextItems([...textItems,text])
                   setText(null);
                   setCount(count + 1 );
          }
    }
    
    return(
        
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.text1}>Yapılacaklar</Text>
                <Text style={styles.islemsayisi}>{count}</Text>
                
            </View>
            <ScrollView>
           <View style={styles.body}>
               
                     {textItems.map((item,id)=>{ 
                          return <Text key={id} style={styles.body_Text} >{props.index}{"  "}{item}</Text> 	
                         
                    })}
             
           </View>
           </ScrollView>

                <View style={styles.inputbox}>

                     <TextInput style={styles.textinput } 
                        placeholder='Yapılacak...' 
                        placeholderTextColor={'#808080'}
                        value={text}
                        onChangeText={(value) => setText(value)}
                     /> 
                    
                    <TouchableOpacity  onPress={() =>handleAdd() } >
                        <View style={styles.button }  >
                            <Text style={styles.buttontext } >KAYDET</Text>
                        </View>
                        
                    </TouchableOpacity>
                </View>
            
        </View>
    )
}

export default Workscard;