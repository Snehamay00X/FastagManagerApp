import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

// Expanded transaction history for scrollable list
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

export default function HomeScreen() {
  const router = useRouter();
  const [historyExpanded, setHistoryExpanded] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>FASTag</Text>

      {/* Balance Card */}
      <LinearGradient
        colors={['#007bff', '#005fcc']}
        style={styles.balanceCard}
        start={[0, 0]}
        end={[1, 1]}
      >
        <View>
          <Text style={styles.balanceLabel}>FASTag Balance</Text>
          <Text style={styles.balanceAmount}>₹170.00</Text>
        </View>
        <TouchableOpacity style={styles.rechargeBtn}>
          <Text style={styles.rechargeText}>Recharge</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* Action Buttons */}
      <View style={styles.actionRow}>
        <ActionButton
          icon={<Feather name="shopping-bag" size={24} color="white" />}
          label="Buy FASTag"
          onPress={() => {}}
        />
        <ActionButton
          icon={<MaterialIcons name="map" size={24} color="white" />}
          label="Estimate Toll"
          onPress={() => {}}
        />
        <ActionButton
          icon={<Feather name="plus" size={24} color="white" />}
          label="Add Vehicle"
          onPress={() => router.push('/vehicles')}
        />
      </View>

      {/* Transaction History - Collapsible */}
      <View style={styles.historyCard}>
        <TouchableOpacity
          onPress={() => setHistoryExpanded(!historyExpanded)}
          style={styles.historyHeader}
          activeOpacity={0.7}
        >
          <Text style={styles.historyTitle}>Transaction History</Text>
          <Feather
            name={historyExpanded ? 'chevron-up' : 'chevron-down'}
            size={20}
            color="#007bff"
          />
        </TouchableOpacity>

        {historyExpanded && (
          <ScrollView style={styles.transactionList} nestedScrollEnabled>
            {transactions.map(tx => (
              <View key={tx.id} style={styles.txRow}>
                <FontAwesome5
                  name={tx.icon as any}
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
        )}
      </View>
    </ScrollView>
  );
}

function ActionButton({
  icon,
  label,
  onPress,
}: {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.actionButton}>
      <View style={styles.iconCircle}>{icon}</View>
      <Text style={styles.actionText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f6ff', padding: 16 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  balanceCard: {
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  balanceLabel: { color: '#cce0ff' },
  balanceAmount: { fontSize: 28, color: '#fff', fontWeight: 'bold', marginTop: 4 },
  rechargeBtn: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  rechargeText: { color: '#007bff', fontWeight: '600' },
  actionRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 },
  actionButton: { alignItems: 'center', flex: 1 },
  iconCircle: {
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 50,
    marginBottom: 8,
  },
  actionText: { fontSize: 12, textAlign: 'center', color: '#000' },

  historyCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 8,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    marginBottom: 12,
  },
  historyTitle: { fontWeight: 'bold', fontSize: 16 },
  transactionList: {
    maxHeight: 300, // limits height for scrollability
  },
  txRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  txTitle: { fontWeight: '600', fontSize: 14 },
  txDetails: { fontSize: 12, color: '#555' },
  txDate: { fontSize: 12, color: '#888', marginTop: 2 },
  txAmount: { fontWeight: 'bold', fontSize: 14, minWidth: 60, textAlign: 'right' },
});