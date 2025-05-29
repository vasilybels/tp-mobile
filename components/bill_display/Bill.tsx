import globalStyles from '@/styles/globalStyles.css';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type BillProps = {

    dishes: { [dishName: string]: number };
    totalAmount: number;
    serverName: string;
}

export default function Bill ({ dishes, totalAmount, serverName}: BillProps) {

    return (
        <View style={styles.container}>
            <Text style={globalStyles.title}>Bill Summary</Text>
            <Text style={styles.serverName}>Server: {serverName}</Text>
            <View style={styles.dishesContainer}>
                {Object.entries(dishes).map(([dishName, price], index) => (
                    <Text key={index} style={styles.dishItem}>{dishName}: ${price.toFixed(2)}</Text>
                ))}
            </View>
            <Text style={styles.totalAmount}>Total Amount: ${totalAmount.toFixed(2)}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    serverName: {
        fontSize: 18,
        marginBottom: 10,
    },
    dishesContainer: {
        marginBottom: 20,
    },
    dishItem: {
        fontSize: 16,
        marginVertical: 5,
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});


