import globalStyles from '@/styles/globalStyles.css';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TipButton from './TipButton';

type DashboardProps = {
    totalAmount: number;
    standardTips: number[];
};

export default function Dashboard({ totalAmount, standardTips }: DashboardProps) {

    return (
        <View style={styles.container}>
            <Text style={globalStyles.title}>PLACEHOLDER TEXT</Text>
            <Text style={styles.totalAmount}>Total Amount: ${totalAmount.toFixed(2)}</Text>
            <View style={styles.buttonContainer}>
                {standardTips.map((tip, index) => (
                    <TipButton key={index} tipAmount={tip} totalAmount={totalAmount} />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    totalAmount: {
        fontSize: 18,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginTop: 20,
    },
});
