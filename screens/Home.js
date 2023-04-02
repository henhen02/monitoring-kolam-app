import {
  SafeAreaView, 
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

const data = [
  {label: 'Blok A', value: '1'},
  {label: 'Blok B', value: '2'},
  {label: 'Blok C', value: '3'},
  {label: 'Blok A1', value: '4'},
  {label: 'Blok A2', value: '5'},
];

const Home = () => {
  const [dropdown, setDropdown] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.floatBoxContainer, styles.shadowProp]}>
        <View style={{
          alignItems: "center"}}>
          <Image source={require('../assets/LogoABM.png')}/>
          <Text style={{
            fontSize: 50,
            fontWeight: "bold",
            color: "#fff",
            textAlign: "center"
          }}
          >PT ABM</Text>
          <Text style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#fff",
            textAlign: "center"
          }}
          >Cultivated Pond</Text>
        </View>
        <View style={styles.dropdownContainer}>
          <Dropdown
            style={styles.dropdown}
            containerStyle={styles.shadow}
            data={data}
            search
            searchPlaceholder="Cari Blok"
            labelField="label"
            valueField="value"
            placeholder="Pilih Blok"
            value={dropdown}
            
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 18
            }}>AKSES</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  floatBoxContainer: {
    flex: .7,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#EF2323",
  },
  shadowProp: {
    shadowColor: "#000",
    shadowOffset:{
      width: 0,
      height: 6 },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
  },
  dropdownContainer: {
    width: '80%',
    height: 100
  },
  dropdown: {
    backgroundColor: 'white',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginTop: 20,
    padding: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
    width: 0,
    height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  }
});

export default Home;