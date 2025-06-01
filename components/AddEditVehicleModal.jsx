import { Modal, View, TextInput, Button, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

export default function AddEditVehicleModal({ visible, onClose, onSave, vehicle }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    setName(vehicle?.name || '');
    setNumber(vehicle?.number || '');
  }, [vehicle]);

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <TextInput placeholder="Vehicle Name" value={name} onChangeText={setName} style={styles.input} />
        <TextInput placeholder="Vehicle Number" value={number} onChangeText={setNumber} style={styles.input} />
        <Button title="Save" onPress={() => onSave({ id: vehicle?.id, name, number })} />
        <Button title="Cancel" onPress={onClose} color="gray" />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  input: { borderBottomWidth: 1, marginBottom: 20 },
});