// import Header from "components/Header";
import ActionItem from "@/components/ActionItem";
import Header from "@/components/Header";
import ServiceItem from "@/components/ServiceItem";
import { Actions, Services } from "@/constants";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [activeBannerIndex, setActiveBannerIndex] = useState(0);
  const router = useRouter()

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-white">
      <Header showLogo title="Home" showNotification />

      <View className="px-2 mt-4" style={{
        marginTop: 16,
      }}>
        <Image
          source={require("../../assets/images/card1.png")}
          style={{
            width: "100%",
            height: 200,
            borderRadius: 16,
          }}
          resizeMode="cover"
        />
      </View>

      <View className="px-4 mt-6">
        <Text className="text-xl font-bold text-primary mb-4">
          Quick Actions
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-2">
          {Actions.map((cat: any) => (
              <ActionItem key={cat.id}
                item={cat} isSelected={false}
                onPress={() => router.push({
                  pathname: cat.path,
                  // params: { category: cat.id === 'all' ? '' : cat.name }
                })} />
            ))}
        </ScrollView>
      </View>

      <View className="px-4 mt-8">
        <Text className="text-xl font-bold text-primary mb-4">
          Services
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-2">
          {Services.map((cat: any) => (
              <ServiceItem key={cat.id}
                item={cat} isSelected={false}
                onPress={() => router.push({
                  pathname: "/(tabs)",
                  // params: { category: cat.id === 'all' ? '' : cat.name }
                })} />
            ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}