import { useEffect, useState } from "react";
import { View, Text, ImageBackground, FlatList } from "react-native";
import axios from "axios";
import backgroundgImage from "../assets/backgroundgImage.jpg";
import { styleApp } from "../style/app.styles";
import { Search } from "../components/search";

export function Home() {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 20,
              page: 1,
              sparkline: false,
            },
            timeout: 10000,
          },
        );

        setCryptos(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.log("API error:", err?.response?.status, err?.message);
        const apiMessage =
          err?.response?.status === 429
            ? "Trop de requetes API (429). Reessaie dans 1 minute."
            : "Erreur de chargement API.";
        setError(apiMessage);
        setCryptos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptos();
  }, []);

  const filteredCryptos = cryptos.filter((crypto) => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return true;
    }

    const name = crypto.name?.toLowerCase() ?? "";
    const symbol = crypto.symbol?.toLowerCase() ?? "";

    return name.includes(query) || symbol.includes(query);
  });

  return (
    <ImageBackground
      source={backgroundgImage}
      style={styleApp.image}
      imageStyle={{ opacity: 0.35 }}
    >
      <View style={styleApp.container}>
        <View style={styleApp.header}>
          <Text style={styleApp.title}>Cryptos Listing</Text>
          <Search value={searchQuery} onChangeText={setSearchQuery} />
        </View>
        <View style={styleApp.body}>
          {loading ? (
            <Text style={styleApp.bodyText}>Chargement...</Text>
          ) : error ? (
            <Text style={styleApp.bodyText}>{error}</Text>
          ) : filteredCryptos.length === 0 ? (
            <Text style={styleApp.bodyText}>Aucune crypto trouvee.</Text>
          ) : (
            <FlatList
              data={filteredCryptos}
              keyExtractor={(item) => item.id}
              style={styleApp.cryptoList}
              renderItem={({ item }) => (
                <View style={styleApp.cryptoRow}>
                  <Text style={styleApp.cryptoText}>
                    {item.name} ({item.symbol?.toUpperCase()}) : $
                    {item.current_price}
                  </Text>
                </View>
              )}
            />
          )}
        </View>

        <View style={styleApp.pageTitle}>
          <Text style={styleApp.pageTitle}>Cryptos</Text>
        </View>

        <View style={styleApp.footer}>
          <Text style={styleApp.footerItem}>Cryptos</Text>
          <Text style={styleApp.footerItem}>Mes favoris</Text>
          <Text style={styleApp.footerItem}>Profil</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
