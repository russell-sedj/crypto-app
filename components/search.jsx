import { useState } from "react";
import { View, TextInput } from "react-native";
import { styleApp } from "../style/app.styles";

export function Search() {
  const [value, setValue] = useState("");

  return (
    <View style={{ width: "100%" }}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="Rechercher une crypto"
        placeholderTextColor="#6b7280"
        style={styleApp}
      />
    </View>
  );
}
