import Bill from '@/components/bill_display/Bill';
import Dashboard from '@/components/Dashboard';
import { ScrollView, View } from 'react-native';

export default function Index() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 40,
      }}
    >
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Bill
          dishes={{ Pasta: 12.99, Salad: 8.99, Soda: 2.5 }}
          totalAmount={100}
          serverName="John Doe"
        />
        <Dashboard
          totalAmount={100}
          standardTips={[15, 20, 25]}
        />
      </View>
    </ScrollView>
  );
}
