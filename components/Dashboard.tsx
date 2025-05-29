import DashboardStyles from '@/styles/DashboardStyles';
import globalStyles from '@/styles/globalStyles.css';
import React from 'react';
import { Text, View } from 'react-native';
import TipButton from './TipButton';

type DashboardProps = {
    totalAmount: number;
    standardTips: number[];
};

export default function Dashboard({ totalAmount, standardTips }: DashboardProps) {
    return (
        <View style={DashboardStyles.container}>
            <Text style={globalStyles.title}>Add a Tip</Text>
            <Text style={DashboardStyles.totalAmount}>
                Total Amount: ${totalAmount.toFixed(2)}
            </Text>
            <View style={DashboardStyles.buttonContainer}>
                {standardTips.map((tip, index) => (
                    <TipButton
                        key={index}
                        tipAmount={tip}
                        totalAmount={totalAmount}
                    />
                ))}
                <TipButton tipAmount={0} totalAmount={totalAmount} />
            </View>
        </View>
    );
}
