// components/FloorSelector.tsx
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../assets/color';

type FloorType = '1st Floor' | '2nd Floor' | '3rd Floor';

interface FloorSelectorProps {
  selectedFloor: FloorType;
  onSelectFloor: (type: FloorType) => void;
}

const FloorSelector: React.FC<FloorSelectorProps> = ({
  selectedFloor,
  onSelectFloor,
}) => (
  <View style={styles.floorSelectorContainer}>
    <View style={styles.floorTypeContainer}>
      <TouchableOpacity
        style={[
          styles.floorTypeButton,
          selectedFloor === '1st Floor' && styles.activeFloorType,
        ]}
        onPress={() => onSelectFloor('1st Floor')}>
        <Text
          style={
            selectedFloor === '1st Floor'
              ? styles.activeFloorTypeText
              : styles.floorTypeText
          }>
          1st Floor
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.floorTypeButton,
          selectedFloor === '2nd Floor' && styles.activeFloorType,
        ]}
        onPress={() => onSelectFloor('2nd Floor')}>
        <Text
          style={
            selectedFloor === '2nd Floor'
              ? styles.activeFloorTypeText
              : styles.floorTypeText
          }>
          2nd Floor
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.floorTypeButton,
          selectedFloor === '3rd Floor' && styles.activeFloorType,
        ]}
        onPress={() => onSelectFloor('3rd Floor')}>
        <Text
          style={
            selectedFloor === '3rd Floor'
              ? styles.activeFloorTypeText
              : styles.floorTypeText
          }>
          3rd Floor
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  floorSelectorContainer: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    borderRadius: 30,
    padding: 8,
    marginVertical: 16,
    alignSelf: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  floorTypeContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  floorTypeButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeFloorType: {
    backgroundColor: '#FFF3E9',
  },
  floorTypeText: {
    color: '#666666',
    fontSize: 14,
    fontWeight: '500',
  },
  activeFloorTypeText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default FloorSelector;
