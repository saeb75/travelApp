import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import Logo from "./assets/logo.svg";
import { useFonts } from "expo-font";
import Cloud from "./assets/cloud.svg";
import Flight from "./assets/flight.svg";
import Bus from "./assets/bus.svg";
import Other from "./assets/other.svg";
import Hotel from "./assets/hotel.svg";

export default function App() {
  /*   const [loaded] = useFonts({
    sfPro: require("./assets/font/SFPRODISPLAYMEDIUM.OTF"),
  });
  if (!loaded) {
    return null;
  } */
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F5F8FB",
        paddingTop:
          Platform.OS === "android" ? StatusBar.currentHeight + 20 : 0,
      }}
    >
      <ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Logo width={120} height={40} fill={"red"} />
        </View>
        <View
          style={{
            paddingHorizontal: 16,
          }}
        >
          <View
            style={{
              position: "absolute",
              right: -50,
              top: 30,
              zIndex: 9999,
              elevation: Platform.OS === "android" ? 50 : 0,
              scaleX: 1.2,
              scaleY: 1.2,
            }}
          >
            <Cloud />
          </View>
          <View
            style={{
              position: "absolute",
              left: -50,
              top: 120,
              zIndex: 9999,
              elevation: Platform.OS === "android" ? 50 : 0,
              scaleX: 1.2,
              scaleY: 1.2,
            }}
          >
            <Cloud />
          </View>
          <View
            style={{
              width: "100%",
              backgroundColor: "#EAF2FF",
              borderRadius: 20,
              marginTop: 35,
              paddingVertical: 30,
              paddingHorizontal: 44,
            }}
          >
            <Text
              style={{ fontSize: 19, fontWeight: "bold", textAlign: "center" }}
            >
              En Ucuz Uçak Bileti Uygunuda
            </Text>
            <Text
              style={{
                color: "#808A93",
                fontSize: 14,
                marginTop: 14,
                textAlign: "center",
              }}
            >
              Hemen uçuş ara lorem ipsum dolor
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 24,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#006CFF",
                  paddingVertical: 17,
                  paddingHorizontal: 32,
                  borderRadius: 10,
                  fontWeight: "bold",
                }}
              >
                <Text
                  style={{ fontSize: 14, color: "white", fontWeight: "bold" }}
                >
                  Uygunu Uçuş Ara
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: 16 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 32 }}>
            Kategoriler
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              style={{
                padding: 12,
                borderRadius: 999,
                marginTop: 20,
                borderWidth: 2,
                borderColor: "#EAF2FF",
              }}
              onPress={() => Alert.alert("hello saeb")}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#006CFF",
                  borderRadius: 999,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Flight />
              </View>
              <Text
                style={{
                  marginTop: 12,
                  fontSize: 14,
                  fontWeight: "bold",
                  textAlign: "center",
                  paddingBottom: 6,
                  color: "black",
                }}
              >
                Uçak
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 12,
                borderRadius: 999,
                marginTop: 20,
                borderWidth: 2,
                borderColor: "#EAF2FF",
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#F16D3C",
                  borderRadius: 999,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Hotel />
              </View>
              <Text
                style={{
                  marginTop: 12,
                  fontSize: 14,
                  fontWeight: "bold",
                  textAlign: "center",
                  paddingBottom: 6,
                  color: "black",
                }}
              >
                Otel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 12,
                borderRadius: 999,
                marginTop: 20,
                borderWidth: 2,
                borderColor: "#EAF2FF",
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#4F3CC9",
                  borderRadius: 999,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Bus />
              </View>
              <Text
                style={{
                  marginTop: 12,
                  fontSize: 14,
                  fontWeight: "bold",
                  textAlign: "center",
                  paddingBottom: 6,
                  color: "black",
                }}
              >
                Otobüs
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 12,
                borderRadius: 999,
                marginTop: 20,
                borderWidth: 2,
                borderColor: "#EAF2FF",
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#F72585",
                  borderRadius: 999,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Other />
              </View>
              <Text
                style={{
                  marginTop: 12,
                  fontSize: 14,
                  fontWeight: "bold",
                  textAlign: "center",
                  paddingBottom: 6,
                  color: "black",
                }}
              >
                Diğer
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingHorizontal: 16 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 32 }}>
            Popüler Konumlar
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flex: 1,
                marginTop: 20,
                backgroundColor: "white",
                borderRadius: 10,
                overflow: "hidden",
                marginRight: 16,
              }}
            >
              <View>
                <Image
                  source={require("./assets/travel2.jpg")}
                  style={{ width: "100%", height: 120, resizeMode: "cover" }}
                />
              </View>
              <View style={{ padding: 16 }}>
                <Text style={{ fontSize: 16 }}>Kapodokya</Text>
                <Text style={{ fontSize: 12, color: "#AEB4B8" }}>
                  Ankara Kalkışlı
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                marginTop: 20,
                backgroundColor: "white",
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <View>
                <Image
                  source={require("./assets/travel.jpg")}
                  style={{ width: "100%", height: 120, resizeMode: "cover" }}
                />
              </View>
              <View style={{ padding: 16 }}>
                <Text style={{ fontSize: 16 }}>Roma</Text>
                <Text style={{ fontSize: 12, color: "#AEB4B8" }}>
                  Ankara Kalkışlı
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
