import globalStyles from '@/styles/globalStyles.css';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type BillProps = {
  dishes: { [dishName: string]: number };
  totalAmount: number;
  serverName: string;
};

export default function Bill({ dishes, totalAmount, serverName }: BillProps) {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.title}>Bill Summary</Text>
      <Text style={styles.serverName}>Server: {serverName}</Text>
      <View style={styles.dishesContainer}>
        {Object.entries(dishes).map(([dishName, price], index) => (
          <View key={index} style={styles.dishRow}>
            <Text style={styles.dishName}>{dishName}</Text>
            <Text style={styles.dishPrice}>${price.toFixed(2)}</Text>
          </View>
        ))}
      </View>
      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Total:</Text>
        <Text style={styles.totalAmount}>${totalAmount.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    maxWidth: 500,
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
    marginVertical: 20,
  },
  serverName: {
    fontSize: 16,
    color: '#555',
    marginBottom: 12,
  },
  dishesContainer: {
    marginBottom: 16,
  },
  dishRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  dishName: {
    fontSize: 16,
    color: '#333',
  },
  dishPrice: {
    fontSize: 16,
    color: '#333',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 12,
    marginTop: 10,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
