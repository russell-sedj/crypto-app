import { View, Text, ImageBackground } from "react-native";
import backgroundgImage from "../assets/backgroundgImage.jpg";
import { styleApp } from "../style/app.styles";
import { Search } from "../components/search";

export function Home() {
  return (
    <ImageBackground
      source={backgroundgImage}
      style={styleApp.image}
      imageStyle={{ opacity: 0.35 }}
    >
      <View style={styleApp.container}>
        {/* Header */}
        <View style={styleApp.header}>
          <Text style={styleApp.title}>Cryptos Listing</Text>
          <Search />
        </View>

        {/* Body */}
        <View style={styleApp.body}>
          <Text style={styleApp.bodyText}>Body</Text>
        </View>

        <View style={styleApp.pageTitle}>
          <Text style={styleApp.pageTitle}>Cryptos</Text>
        </View>

        {/* Footer en bas */}
        <View style={styleApp.footer}>
          <Text style={styleApp.footerItem}>Cryptos</Text>
          <Text style={styleApp.footerItem}>Mes favoris</Text>
          <Text style={styleApp.footerItem}>Profil</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
