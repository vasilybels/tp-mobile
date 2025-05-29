import { Dimensions, Pressable, StyleSheet, Text } from "react-native";

type TipButtonProps = {
    tipAmount: number;
    totalAmount: number;
};

const handlePress = (tipAmount: number, totalAmount: number) => {
    const tipValue = (totalAmount * tipAmount) / 100;
    console.log(`You tipped: $${tipValue.toFixed(2)}`);
};

export default function TipButton({ tipAmount, totalAmount }: TipButtonProps) {
    const label = tipAmount === 0 ? "No Tip" : `${tipAmount}%`;

    return (
        <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={() => handlePress(tipAmount, totalAmount)}>
            <Text style={styles.text}>{label}</Text>
        </Pressable>
    );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#4B77F3",
        paddingVertical: height * 0.06, // a bit smaller than before
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        width: width * 0.9,
        maxWidth: 500,
        marginVertical: 10,
        elevation: 3,
    },
    pressed: {
        opacity: 0.85,
    },
    text: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "600",
    },
});
