// FASTag History Screen
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';

const transactions = [
  {
    id: '1',
    type: 'Toll-Station',
    stationName: 'NH-48 Toll Plaza',
    vehicle: 'MH12AB1234',
    date: '21 October 2022 | 16:54',
    icon: 'car',
    amount: -200,
  },
  {
    id: '2',
    type: 'Toll-Station',
    stationName: 'Expressway Toll Plaza',
    vehicle: 'MH12AB1234',
    date: '20 October 2022 | 10:22',
    icon: 'car',
    amount: -180,
  },
  {
    id: '3',
    type: 'Recharge',
    stationName: '',
    vehicle: '',
    date: '18 October 2022 | 14:30',
    icon: 'credit-card',
    amount: 500,
  },
  {
    id: '4',
    type: 'Toll-Station',
    stationName: 'City Toll Plaza',
    vehicle: 'MH12AB1234',
    date: '17 October 2022 | 09:45',
    icon: 'car',
    amount: -220,
  },
  {
    id: '5',
    type: 'Toll-Station',
    stationName: 'Highway Toll Plaza',
    vehicle: 'MH12AB1234',
    date: '16 October 2022 | 12:15',
    icon: 'car',
    amount: -210,
  },
  {
    id: '6',
    type: 'Recharge',
    stationName: '',
    vehicle: '',
    date: '15 October 2022 | 11:00',
    icon: 'credit-card',
    amount: 1000,
  },
  {
    id: '7',
    type: 'Toll-Station',
    stationName: 'Bridge Toll Plaza',
    vehicle: 'MH12AB1234',
    date: '14 October 2022 | 08:30',
    icon: 'car',
    amount: -190,
  },
];

export default function HistoryScreen() {
  const [expanded, setExpanded] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Transaction History</Text>
      <ScrollView style={styles.transactionList}>
        {transactions.map(tx => (
          <View key={tx.id} style={styles.txRow}>
            <FontAwesome5
              name={tx.icon}
              size={18}
              color="#007bff"
              style={{ marginRight: 12 }}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.txTitle}>{tx.type}</Text>
              {tx.stationName ? (
                <Text style={styles.txDetails}>{tx.stationName}</Text>
              ) : null}
              {tx.vehicle ? (
                <Text style={styles.txDetails}>Vehicle: {tx.vehicle}</Text>
              ) : null}
              <Text style={styles.txDate}>{tx.date}</Text>
            </View>
            <Text
              style={[
                styles.txAmount,
                { color: tx.amount > 0 ? 'green' : 'red' },
              ]}
            >
              {tx.amount > 0 ? '+' : '-'}₹{Math.abs(tx.amount)}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f6ff',
    padding: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  transactionList: {
    maxHeight: '100%',
  },
  txRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  txTitle: { fontWeight: '600', fontSize: 14 },
  txDetails: { fontSize: 12, color: '#555' },
  txDate: { fontSize: 12, color: '#888', marginTop: 2 },
  txAmount: {
    fontWeight: 'bold',
    fontSize: 14,
    minWidth: 60,
    textAlign: 'right',
  },
});