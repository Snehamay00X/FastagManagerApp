import React, { useState } from 'react';
import {
  View, Text, StyleSheet, FlatList, Image, TouchableOpacity,
  Alert, TextInput, Modal, Pressable
} from 'react-native';
import { Feather } from '@expo/vector-icons';

type Vehicle = {
  id: string;
  number: string;
  name: string;
  image: string;
};

export default function VehiclesScreen() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    {
      id: '1',
      number: 'DL8CAF5032',
      name: 'Hyundai Creta',
      image: 'https://via.placeholder.com/60',
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newVehicle, setNewVehicle] = useState({ name: '', number: '', image: '' });

  const handleDelete = (id: string) => {
    Alert.alert('Delete Vehicle', 'Are you sure you want to delete this vehicle?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => setVehicles(vehicles.filter(v => v.id !== id)),
      },
    ]);
  };

  const handleAddNew = () => {
    if (!newVehicle.name || !newVehicle.number || !newVehicle.image) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    const vehicle: Vehicle = {
      id: Math.random().toString(),
      ...newVehicle,
    };
    setVehicles([vehicle, ...vehicles]);
    setNewVehicle({ name: '', number: '', image: '' });
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registered Vehicles</Text>

      <FlatList
        data={vehicles}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.vehicleCard}>
            <Image source={{ uri: item.image }} style={styles.vehicleImage} />
            <View style={{ flex: 1 }}>
              <Text style={styles.vehicleNumber}>{item.number}</Text>
              <Text style={styles.vehicleName}>{item.name}</Text>
            </View>
            <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.iconBtn}>
              <Feather name="trash-2" size={20} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.addBtn}>
        <Feather name="plus" size={18} color="#fff" />
        <Text style={styles.addBtnText}>Add New Vehicle</Text>
      </TouchableOpacity>

      {/* Modal for adding vehicle */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Vehicle</Text>
            <TextInput
              placeholder="Vehicle Name"
              value={newVehicle.name}
              onChangeText={text => setNewVehicle(prev => ({ ...prev, name: text }))}
              style={styles.input}
            />
            <TextInput
              placeholder="Vehicle Number"
              value={newVehicle.number}
              onChangeText={text => setNewVehicle(prev => ({ ...prev, number: text }))}
              style={styles.input}
            />
            <TextInput
              placeholder="Image URL"
              value={newVehicle.image}
              onChangeText={text => setNewVehicle(prev => ({ ...prev, image: text }))}
              style={styles.input}
            />
            <View style={styles.modalActions}>
              <Pressable onPress={() => setModalVisible(false)} style={styles.cancelBtn}>
                <Text style={{ color: '#007bff' }}>Cancel</Text>
              </Pressable>
              <Pressable onPress={handleAddNew} style={styles.saveBtn}>
                <Text style={{ color: 'white' }}>Save</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f6ff', padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  vehicleCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 1,
  },
  vehicleImage: { width: 60, height: 60, borderRadius: 8, marginRight: 12 },
  vehicleNumber: { fontWeight: 'bold', fontSize: 16 },
  vehicleName: { color: '#666' },
  iconBtn: { padding: 6, marginLeft: 4 },
  addBtn: {
    marginTop: 16,
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBtnText: { color: 'white', marginLeft: 8, fontWeight: '600' },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
  },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
  cancelBtn: { padding: 10 },
  saveBtn: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 6,
  },
});