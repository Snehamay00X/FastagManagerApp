import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Toll Estimate Page</Text>
      {/* Settings options will go here */}
    </View>
  );
}

const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    backgroundColor: '#f0f4ff',
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});