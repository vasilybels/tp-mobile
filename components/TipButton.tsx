import { Pressable, StyleSheet, Text } from "react-native";

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


const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 8,
    },
    button: {
        backgroundColor: "#2196F3",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: "center",
    },
});
