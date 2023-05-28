import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { getDatabase } from 'firebase/database';
import { db } from './config';
import {ref,update} from 'firebase/database'
const index = () => {
  const [Test, setBIN_VOLUME] = useState('');
  const [name, setName] = useState('user1');


  function create(){
    update(ref(db,'/'),{
      Test: Test
      
    });
  }
  
 
  
  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 , marginTop:100}}
        onChangeText={(text) => setBIN_VOLUME(text)}
        value={Test}
        placeholder="Enter a BIN_VOLUME"
      />
      <Button title="Update Database" onPress={create} />
    </View>
  );
};

export default index;
