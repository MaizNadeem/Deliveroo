import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const ConfirmationModal = ({ isVisible, message, onConfirm, onCancel }) => {
  return (
    <Modal isVisible={isVisible}>
      <View className="bg-white p-8 rounded-lg">
        <Text className="text-md font-medium">{message}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <TouchableOpacity className="px-4 py-2" onPress={onCancel}>
            <Text className="text-md font-medium">Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#00B8C0] px-4 py-2 rounded-md" onPress={onConfirm}>
            <Text className="text-white text-md font-medium">Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationModal;
