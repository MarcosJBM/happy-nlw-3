import React from "react";
import { View, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

export default function Header({ title, showCancel = true }: HeaderProps) {
  const navigate = useNavigation();

  function handleGoBackToHomePage() {
    navigate.navigate("OrphanagesMap");
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigate.goBack}>
        <Feather name='arrow-left' size={24} color='#15b6d6' />
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>

      {showCancel ? (
        <BorderlessButton onPress={handleGoBackToHomePage}>
          <Feather name='x' size={24} color='#ff669d' />
        </BorderlessButton>
      ) : (
        <View />
      )}
    </View>
  );
}
