import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function TransactionHistory() {
  const [expanded, setExpanded] = useState(false);
  const data = [
    { type: 'Toll Station', amount: -200, date: '21 Oct 2022' },
    { type: 'Recharge', amount: 200, date: '21 Oct 2022' },
    { type: 'Toll Station', amount: -200, date: '21 Oct 2022' },
  ];

  const visibleData = expanded ? data : data.slice(0, 2);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={() => setExpanded(!expanded)}>
        <Text style={styles.title}>Transaction History</Text>
        <AntDesign name={expanded ? "up" : "down"} size={16} />
      </TouchableOpacity>

      {visibleData.map((item, i) => (
        <View key={i} style={styles.row}>
          <Text>{item.type}</Text>
          <Text style={{ color: item.amount > 0 ? 'green' : 'red' }}>
            {item.amount > 0 ? '+' : '-'}₹{Math.abs(item.amount)}
          </Text>
          <Text>{item.date}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  title: { fontWeight: 'bold', fontSize: 16 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
  },
});