import React from 'react';
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

export default function HomeScreen() {
  const router = useRouter();

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
          onPress={() => router.push('/tollestimate')}
        />
        <ActionButton
          icon={<Feather name="plus" size={24} color="white" />}
          label="Add Vehicle"
          onPress={() => router.push('/vehicles')}
        />
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
});