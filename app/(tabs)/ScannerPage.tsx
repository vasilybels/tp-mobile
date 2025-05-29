import { Text, View } from "react-native";

export default function ScannerPage() {
    return (
        <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
        >
        <Text>Scanner Page</Text>
        <Text>Scan a QR code to get started.</Text>
        </View>
    );
    }