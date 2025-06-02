import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Tabs } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>FASTag</Text>

      {/* Balance Card */}
      <LinearGradient colors={["#5b67f3", "#619bff"]} style={styles.balanceCard}>
        <View>
          <Text style={styles.balanceLabel}>FASTag Balance</Text>
          <Text style={styles.balanceAmount}>₹170.00</Text>
        </View>
        <TouchableOpacity style={styles.rechargeButton}>
          <Text style={styles.rechargeText}>Recharge</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <View style={styles.actionItem}>
          <Ionicons name="cart-outline" size={28} color="#5b67f3" />
          <Text style={styles.actionLabel}>Buy FASTag</Text>
        </View>
        <View style={styles.actionItem}>
          <MaterialIcons name="calculate" size={28} color="#5b67f3" />
          <Text style={styles.actionLabel}>Estimate Toll</Text>
        </View>
        <View style={styles.actionItem}>
          <FontAwesome5 name="car" size={28} color="#5b67f3" />
          <Text style={styles.actionLabel}>Add Vehicle</Text>
        </View>
      </View>

      {/* Transaction History */}
      <View style={styles.transactionBox}>
        <Text style={styles.transactionTitle}>Transaction History</Text>
        {[
          { title: "Toll-Station", amount: "-₹200", color: styles.negative },
          { title: "Toll-Station", amount: "-₹200", color: styles.negative },
          { title: "Recharge", amount: "+₹200", color: styles.positive },
          { title: "Toll-Station", amount: "-₹200", color: styles.negative },
        ].map((item, index) => (
          <View key={index} style={styles.transactionRow}>
            <View>
              <Text>{item.title}</Text>
              <Text style={styles.transactionDate}>21 October 2022 | 16:54</Text>
            </View>
            <Text style={[styles.transactionAmount, item.color]}>{item.amount}</Text>
          </View>
        ))}
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View all ➔</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4ff',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  balanceCard: {
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  balanceLabel: {
    color: '#fff',
    fontSize: 14,
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 4,
  },
  rechargeButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
  },
  rechargeText: {
    color: '#5b67f3',
    fontWeight: '600',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  actionItem: {
    alignItems: 'center',
  },
  actionLabel: {
    marginTop: 8,
    fontSize: 12,
  },
  transactionBox: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  transactionTitle: {
    fontWeight: '600',
    marginBottom: 8,
  },
  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 12,
    color: '#999',
  },
  transactionAmount: {
    fontWeight: '600',
  },
  negative: {
    color: '#f43f5e',
  },
  positive: {
    color: '#10b981',
  },
  viewAllButton: {
    marginTop: 8,
  },
  viewAllText: {
    color: '#3b82f6',
    fontSize: 14,
    textAlign: 'right',
  },
});

HomeScreen.getLayout = function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Tabs>
        <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} /> }} />
        <Tabs.Screen name="vehicles" options={{ title: 'Vehicles', tabBarIcon: ({ color, size }) => <FontAwesome5 name="car" color={color} size={size} /> }} />
        <Tabs.Screen name="history" options={{ title: 'History', tabBarIcon: ({ color, size }) => <MaterialIcons name="history" color={color} size={size} /> }} />
        <Tabs.Screen name="settings" options={{ title: 'Settings', tabBarIcon: ({ color, size }) => <Ionicons name="settings" color={color} size={size} /> }} />
      </Tabs>
    </>
  );
};