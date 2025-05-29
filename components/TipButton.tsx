import { Dimensions, Pressable, StyleSheet, Text } from "react-native";

type TipButtonProps = {
    tipAmount: number;
    totalAmount: number;
};

const handlePress = (tipAmount: number, totalAmount: number) => {
    // TODO: implement what should happen when the button is pressed
    console.log(`You tipped: ${totalAmount * tipAmount / 100}`);
};

export default function TipButton ({ tipAmount, totalAmount } : TipButtonProps) {

    return (
        <Pressable style={styles.button} onPress={() => handlePress(tipAmount, totalAmount)}>
            <Text>{`Tip ${tipAmount}`}</Text>
        </Pressable>
    );
}


const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        paddingHorizontal: 16,
        paddingVertical: 16,
        gap: 24,
    },
    button: {
        backgroundColor: "#ffffff",
        paddingVertical: height * 0.08, // 8% of screen height
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#000000",
        alignItems: "center",
        justifyContent: "center",
        width: width * 0.9, // 90% of screen width
        maxWidth: 500,
        marginVertical: 12,
        elevation: 2,
    },
});
