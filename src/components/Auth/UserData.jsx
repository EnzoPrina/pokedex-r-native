import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { size } from "lodash";
import useAuth from "../../hooks/useAuth";
import { getPokemonsFavoriteApi } from "../../api/favorite";

export default function UserData() {
  const { auth, logout } = useAuth();
  const [total, setTotal] = useState(0);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getPokemonsFavoriteApi();
          setTotal(size(response));
        } catch (error) {
          setTotal(0);
        }
      })();
    }, [])
  );

  return (
    <View style={styles.bgContent}>
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido,</Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu title="Nombre" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title="Username" text={auth.username} />
        <ItemMenu title="Email" text={auth.email} />
        <ItemMenu title="Total Favoritos" text={`${total} pokemons`} />
      </View>

      <Button title="Desconectarse" onPress={logout} style={styles.btnLogoun} />
    </View>
    </View>
  );
}

function ItemMenu(props) {
  const { title, text } = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text style={styles.descriptionText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bgContent:{
    backgroundColor: '#121212',
    height: '100%',
    color: '#fff'
  },
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
    color: '#fff'
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    color: '#ffffff'
  },
  dataContent: {
    marginBottom: 20,
    color: '#3a3a3a'
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 12,
    fontSize: 13,
    width: 120,
    color: '#696969'
  },
  btnLogoun: {
    paddingTop: 20,
    color: '#000'
  },
  descriptionText: {
    color: '#ffffff'
  }
});