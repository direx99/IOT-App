import { StyleSheet, Text, View, Switch, TextInput, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { getDatabase } from 'firebase/database';
import { db } from './config';
import {ref,update,set,onValue} from 'firebase/database'


 

const Home = () => {
  const [Test, setTest] = useState("");
  const [voulme, setvoulme] = useState(20);
  const [detect, setDetect] = useState(0);


  useEffect(() => {
    readData();
    detectObject();
  },[]);
function readData(){
  const startCountRef = ref(db,'/');
  onValue(startCountRef,(snapshot) => {
    const data = snapshot.val();

    setvoulme(data.BIN_VOLUME)
    console.log(voulme);
  });

}
function detectObject(){
  const startCountRef = ref(db,'/');
  onValue(startCountRef,(snapshot) => {
    const data = snapshot.val();

    setDetect(data.OBJECT_DETECT)
    console.log(detect);
  });

}

  function create(){
    update(ref(db, '/'),{
      Test: Test
      
    })
  }
  
  const value = 19;
  const [toggleValue, setToggleValue] = useState(false);

  


  const Bincolor = () => {
    if (voulme > -1 && voulme <= 6) {
      return (
        <View>
          <View style={styles.dustbinView}>
            <View
              style={[styles.level5, { backgroundColor: "#fff" }]}
            ></View>
            <View
              style={[styles.level4, { backgroundColor: "#fff" }]}
            ></View>
            <View
              style={[styles.level3, { backgroundColor: "#fff" }]}
            ></View>
            <View
              style={[styles.level2, { backgroundColor: "#fff" }]}
            ></View>
            <View style={styles.level1}></View>
          </View>
        </View>
      );
    } else if (6 < voulme && voulme <= 12) {
      return (
        <View>
          <View style={styles.dustbinView}>
            <View
              style={[styles.level5, { backgroundColor: "#fff" }]}
            ></View>
            <View
              style={[styles.level4, { backgroundColor: "#fff" }]}
            ></View>
            <View
              style={[styles.level3, { backgroundColor: "#fff" }]}
            ></View>
            <View style={styles.level2}></View>
            <View style={styles.level1}></View>
          </View>
        </View>
      );
    } else if (12 < voulme && voulme <= 18) {
      return (
        <View>
          <View style={styles.dustbinView}>
            <View
              style={[styles.level5, { backgroundColor: "#fff" }]}
            ></View>
            <View
              style={[styles.level4, { backgroundColor: "#fff" }]}
            ></View>
            <View style={styles.level3}></View>
            <View style={styles.level2}></View>
            <View style={styles.level1}></View>
          </View>
        </View>
      );
    } else if (18 < voulme && voulme <= 24) {
      return (
        <View>
          <View style={styles.dustbinView}>
            <View
              style={[styles.level5, { backgroundColor: "#fff" }]}
            ></View>
            <View style={styles.level4}></View>
            <View style={styles.level3}></View>
            <View style={styles.level2}></View>
            <View style={styles.level1}></View>
          </View>
        </View>
      );
    } else if (24 < voulme ) {
      return (
        <View>
          <View style={styles.dustbinView}>
            <View style={styles.level5}></View>
            <View style={styles.level4}></View>
            <View style={styles.level3}></View>
            <View style={styles.level2}></View>
            <View style={styles.level1}></View>
          </View>
        </View>
      );
    }
  };

  const handleToggle = () => {
    setToggleValue(!toggleValue);
  };

  return (
    <View style={{flex:1,width:'100%', height:'100%', alignContent:'center',alignSelf:'center',justifyContent:'flex-start'}}>
        <Text style={styles.maintitle}>e-Waste Smart Bin</Text>
        
      <Bincolor/>
      
      <View style={{flexDirection:'row',justifyContent:'center',margin:10,alignItems:'center'}}>
      <Text>Connected </Text>
      <View style={{height:10,width:10,borderRadius:10,backgroundColor:'green'}}></View>
      <Text></Text>

      </View>
    

        <Text>Bin is {detect}% full</Text>
        <Text>Bin is {voulme}% full</Text>

      <View>
        <Text>{toggleValue ? "Bin is open" : "Bin is closed"}</Text>
        <Switch value={toggleValue} onValueChange={handleToggle} />
      </View>

      <View>
     
    </View>
    <View>
      <Text>Status</Text>
      <Text>OPEN</Text>

    </View>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  dustbinView: {
    alignSelf:'center',
    width: '62%',
    backgroundColor: "#fff",
    borderRadius: 40,
    padding: 15,
    borderColor: '#000',
    borderWidth:5,

  },
  level5: {
    width: "100%",
    height: 60,
    backgroundColor: "#E34900",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  level4: {
    width: "100%",
    height: 60,
    backgroundColor: "#F47802",
    marginTop: 10,

  },

  level3: {
    width: "100%",
    height: 60,
    backgroundColor: "#F99438",
    marginTop: 10,

    
  },

  level2: {
    width: "100%",
    height: 60,
    backgroundColor: "#F9C400",
    marginTop: 10,
  },
  level1: {
    width: "100%",
    height: 60,
    backgroundColor: "#00D065",
    marginTop: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  maintitle:{
    fontSize:26,
    marginBottom:20,
    marginTop:20
    


  }
});
