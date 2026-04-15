import { View, Text, ImageBackground } from "react-native";
import backgroundgImage from "../assets/backgroundgImage.jpg";
import { styleApp } from "../style/app.styles";

export function Home() {
  return (
    <ImageBackground source={backgroundgImage} style={styleApp.image}>
      <View style={styleApp.container}>
        <View>
          <Text>Moteur de Recherche</Text>
        </View>

        <View>
          <Text>Cryptos</Text>
        </View>
        <View>
          <View>
            <Text>Cryptos</Text>
          </View>
          <View>
            <Text>Mes favoris</Text>
          </View>
          <View>
            <Text>Profil</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
