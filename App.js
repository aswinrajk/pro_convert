import React, { useState } from 'react';

import { StyleSheet, Button, View, SafeAreaView, Text, Alert,TextInput} from 'react-native';



const Separator = () => (
  <View style={styles.separator} />
);

const App = () => {

const [celsius, setcel] = useState('');
const [faren,setfar] =useState('');
const [kelvin,setkelv] =useState('');
const [mile, ml] =useState('');

var onchange=(show)=>{
  setcel( (show*1609.344).toString());
 
}


  return( 
    
  <SafeAreaView style={styles.container}>
    
       
    <View>
   
    
     <Text style={styles.title}>
  celsius
 </Text> 
 

      <TextInput
       placeholder="celsius"
       onChangeText={onchange}      
      />
      <Separator />
      <Text style={styles.title1}>
        faren
      </Text>
      
      
      <TextInput
       placeholder="faran"
       value={mile}
       onChangeText={onchange}

      

      />
      
     
      
    </View>
    <Separator />
    
    <View>
     
      <Button
        title="CONVERT"
        color="#f194ff"
        onPress={() => alert(celsius)}
      />
     

    </View>
   
 
      
    
  </SafeAreaView>
  );
}
 

const styles = StyleSheet.create({
  container: {
     
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    marginHorizontal: 20,
    
  },
  
  
  space: {
    
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 15,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
 
    
    
  
  
  
});



export default App;
