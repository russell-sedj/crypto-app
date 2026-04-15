import { View, Text, ImageBackground } from "react-native";
import backgroundgImage from "../assets/backgroundgImage.jpg";
import { styleApp } from "../style/app.styles";
import { Search } from "../components/search";
import { useEffect, useState } from "react";
import axios from "axios";

export function Home() {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets", {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 20,
          page: 1,
          sparkline: false,
        },
      })
      .then((res) => {
        setCryptos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        // gestion d’erreur
      });
  }, []);

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
          {loading ? (
            <Text style={styleApp.bodyText}>Chargement...</Text>
          ) : (
            cryptos.map((crypto) => (
              <Text key={crypto.id} style={styleApp.bodyText}>
                {crypto.name} ({crypto.symbol.toUpperCase()}) : $
                {crypto.current_price}
              </Text>
            ))
          )}
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
