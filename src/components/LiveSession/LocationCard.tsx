import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import color from '../../assets/color';

const LocationCard = () => {
  return (
    <View style={styles.locationCard}>
      <View style={styles.locationInitial}>
        <Text style={styles.initialText}>G</Text>
      </View>
      <View style={styles.locationDetails}>
        <Text style={styles.locationName}>
          Central Shopping Centre (Garage)
        </Text>
        <Text style={styles.locationAddress}>123, Lincon Street, New York</Text>
        <View style={styles.locationMeta}>
          <Text style={styles.meta}>5 min</Text>
          <Text style={styles.rating}>⭐ 4.2</Text>
          <Text style={styles.price}>$5.00/H</Text>
        </View>
      </View>
    </View>
  );
};

export default LocationCard;

const styles = StyleSheet.create({
  locationCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    flexDirection: 'row',
    marginBottom: 16,
    borderRadius: 12, // This adds curved edges
    marginHorizontal: 16, // This adds horizontal spacing from screen edges
  },
  locationInitial: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: color.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  initialText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  locationDetails: {
    flex: 1,
  },
  locationName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  locationAddress: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  locationMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  meta: {
    fontSize: 14,
    color: '#666666',
  },
  rating: {
    fontSize: 14,
    color: '#666666',
  },
  price: {
    fontSize: 14,
    color: color.primary,
    fontWeight: '600',
  },
});
