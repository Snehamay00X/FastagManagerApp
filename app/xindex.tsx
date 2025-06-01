import { View, Text, StyleSheet, TouchableOpacity, ScrollView,FlatList, Image } from 'react-native';
import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';

export default function HomeScreen() {
  const router = useRouter();


  const transactions = [
  { id: '1', type: 'Toll-Station', date: '21 October 2022 | 16:54', amount: -200 },
  { id: '2', type: 'Toll-Station', date: '21 October 2022 | 16:54', amount: -200 },
  { id: '3', type: 'Recharge', date: '21 October 2022 | 16:54', amount: 200 },
  { id: '4', type: 'Toll-Station', date: '21 October 2022 | 16:54', amount: -200 },
];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>
  <Text style={{ color: '#d76f2c' }}>FAST</Text>
  <Text style={{ color: '#4b8d2f' }}>Tag</Text>
</Text>

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
          icon={<FontAwesome5 name="shopping-bag" size={24} color="white" />}
          label="Buy FASTag"
        />
        <ActionButton
          icon={<MaterialIcons name="map" size={24} color="white" />}
          label="Estimate Toll"
        />
        <ActionButton
          icon={<Feather name="plus" size={24} color="white" />}
          label="Add Vehicle"
          onPress={() => router.push('/vehicles')}
        />
      </View>

      {/* Transaction History */}
      <View style={styles.historyCard}>
        <Text style={styles.historyTitle}>Transaction History</Text>
        {[
          { type: 'Toll-Station', date: '21 Oct 2022 | 16:54', icon: 'car', amount: -200 },
          { type: 'Toll-Station', date: '21 Oct 2022 | 16:54', icon: 'car', amount: -200 },
          { type: 'Recharge', date: '21 Oct 2022 | 16:54', icon: 'credit-card', amount: 200 },
        ].map((tx, i) => (
          <View key={i} style={styles.txRow}>
            <FontAwesome5 name={tx.icon as any} size={18} color="#007bff" style={{ marginRight: 12 }} />
            <View style={{ flex: 1 }}>
              <Text style={styles.txTitle}>{tx.type}</Text>
              <Text style={styles.txDate}>{tx.date}</Text>
            </View>
            <Text style={[styles.txAmount, { color: tx.amount > 0 ? 'green' : 'red' }]}>
              {tx.amount > 0 ? '+' : '-'}₹{Math.abs(tx.amount)}
            </Text>
          </View>
        ))}
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all ›</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function ActionButton({ icon, label, onPress }: { icon: React.ReactNode; label: string; onPress?: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.actionButton}>
      <View style={styles.iconCircle}>{icon}</View>
      <Text style={styles.actionText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f6ff', padding: 16 },
 header: {
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: 16,

  // REMOVE any 'color' property here if present
},
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
  actionText: { fontSize: 12, textAlign: 'center', color: '#333' },
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
  historyTitle: { fontWeight: 'bold', fontSize: 16, marginBottom: 12 },
  txRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  txTitle: { fontWeight: '600' },
  txDate: { fontSize: 12, color: '#888' },
  txAmount: { fontWeight: 'bold' },
  viewAll: {
    color: '#007bff',
    textAlign: 'right',
    marginTop: 8,
    fontWeight: '500',
  },
});
