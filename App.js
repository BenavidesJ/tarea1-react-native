
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.section1}>
        <View style={styles.block1Section1}></View>
        <View style={styles.block2Section1}></View>
        <View style={styles.block3Section1}></View>
      </View>

      <View style={styles.section2}>
        <View style={styles.block1Section2}>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
        </View>
        <View style={styles.block2Section2}>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
        </View>
        <View style={styles.block3Section2}>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
        </View>
      </View>

      <View style={styles.section3}>
        <View style={styles.mainBlockSection3}>
          <View style={styles.box4}></View>
          <View style={styles.box5}></View>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'gray',
    flexDirection:'row' 
  },
  section1: {
    flex:1,
    backgroundColor:'green',
    width:'33.33%',
    alignItems: 'center'
  },
  section2: {
    flex:1,
    backgroundColor:'yellow',
    width:'33.33%',
    alignItems: 'center'
  },
  section3: {
    flex:1,
    backgroundColor:'red',
    width:'33.33%',
    justifyContent: 'center'
  },
  block1Section1: {
    flex:1,
    width:'75%',
    height: '33.33%',
    backgroundColor: 'pink'
  },
  block2Section1: {
    flex:1,
    width:'75%',
    height: '33.33%',
    backgroundColor: 'cyan'
  },
  block3Section1: {
    flex:1,
    width:'75%',
    height: '33.33%',
    backgroundColor: 'magenta'
  },
  block1Section2: {
    flex:1,
    width:'75%',
    height: '33.33%',
    backgroundColor: 'pink',
    flexDirection:'row',
    alignItems: 'center'
  },
  block2Section2: {
    flex:1,
    width:'75%',
    height: '33.33%',
    backgroundColor: 'cyan',
    flexDirection:'row',
    alignItems: 'center'
  },
  block3Section2: {
    flex:1,
    width:'75%',
    height: '33.33%',
    backgroundColor: 'magenta',
    flexDirection:'row',
    alignItems: 'center'
  },
  box1: {
    flex:1,
    backgroundColor:'gray',
    width:50,
    height:50
  },
  box2: {
    flex:1,
    backgroundColor:'blue',
    width:50,
    height:50
  },
  box3: {
    flex:1,
    backgroundColor:'black',
    width:50,
    height:50
  },
  box4: {
    backgroundColor:'blue',
    width:50,
    height:50
  },
  box5: {
    backgroundColor:'black',
    width:50,
    height:50
  },
  mainBlockSection3: {
    backgroundColor:'white',
    width: '100%',
    height: 200,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between'
  }
});
