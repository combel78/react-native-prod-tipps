import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
} from "react-native";
import Constants from "expo-constants";
import prodtipps from "./assets/prodtipps";

const ProdTippsApp: React.FC = () => {
  const [name, setName] = useState<string>();
  const [prodTipp, setProdTipp] = useState<string>();

  const datasetNumber = (max: number) => {
    let min: number = 0;
    return Math.floor(Math.random() * (+max - +min)) + +min;
  };

  const prodTippHandler = () => {
    if (!name) {
      setName("Du");
    }
    setProdTipp(prodtipps[datasetNumber(prodtipps.length)]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headline}>Dein Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="z.B. Marie"
        onChangeText={(value) => setName(value)}
      />
      <View style={styles.buttonContainer}>
        <Button title="Los!" onPress={prodTippHandler} color="#1B4F72" />
      </View>
      {prodTipp && (
        <React.Fragment>
          <View style={styles.prodTippContainer}>
            <Text style={styles.prodTippText}>
              Hallo {name}, hier ist ein neuer Produktivitäts-Tipp für Dich:
              {"\n"}
            </Text>
            <Text style={styles.prodTippText}>{prodTipp}</Text>
          </View>
        </React.Fragment>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#EAECEE",
    alignItems: "center",
    justifyContent: "center",
  },
  headline: {
    padding: 10,
    fontSize: 24,
    color: "#1B4F72",
  },
  input: {
    borderWidth: 1,
    borderColor: "#1B4F72",
    padding: 8,
    margin: 10,
    width: 260,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
    borderRightColor: "#1B4F72",
    width: 140,
  },
  prodTippContainer: {
    padding: 20,
    margin: 10,
    height: 400,
    borderWidth: 1,
    borderColor: "#1B4F72",
  },
  prodTippText: {
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 24,
    color: "#1B4F72",
  },
});

export default ProdTippsApp;
