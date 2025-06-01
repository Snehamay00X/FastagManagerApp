import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function VehicleCard({ vehicle, onEdit, onDelete }) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image
          source={require('../assets/car.png')} // Place a placeholder car image in `assets/car.png`
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.title}>{vehicle.name}</Text>
          <Text style={styles.sub}>{vehicle.number}</Text>
        </View>
        <TouchableOpacity onPress={onEdit}>
          <Feather name="edit-2" size={20} color="#007bff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={{ marginLeft: 12 }}>
          <Feather name="trash-2" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  image: { width: 50, height: 50, resizeMode: 'contain', marginRight: 12 },
  info: { flex: 1 },
  title: { fontWeight: 'bold', fontSize: 16 },
  sub: { color: '#666' },
});