import { useState } from "react";
import { View, TextInput } from "react-native";
import { styleApp } from "../style/app.styles";
import FontAwesome from "@react-native-vector-icons/fontawesome";

export function Search() {
  const [value, setValue] = useState("");

  return (
    <View style={styleApp.searchContainer}>
      <FontAwesome
        name="search"
        size={20}
        color="#2563eb"
        style={styleApp.searchIcon}
      />
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="Rechercher une crypto"
        placeholderTextColor="#6b7280"
        style={styleApp.searchInput}
      />
    </View>
  );
}
