import { View, TextInput } from "react-native";
import { styleApp } from "../style/app.styles";
import { FontAwesome } from "@expo/vector-icons";

export function Search({ value, onChangeText }) {
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
        onChangeText={onChangeText}
        placeholder="Rechercher une crypto"
        placeholderTextColor="#6b7280"
        style={styleApp.searchInput}
      />
    </View>
  );
}
