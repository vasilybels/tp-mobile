import Dashboard from '@/components/Dashboard';
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Dashboard
        totalAmount={100}
        standardTips={[15, 20, 25]}
      />
      <Text>Welcome to the Tip Calculator!</Text>
      <Text>Choose a tip amount to calculate your total.</Text>
    </View>
  );
}
