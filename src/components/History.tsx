// components/History/History.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {IconButton, Card} from 'react-native-paper';
import colors from '../assets/color';
import {historyData} from './constants/HistoryData';

interface HistoryItemProps {
  initial: string;
  location: string;
  address: string;
  duration: string;
  rating: number;
  price: number;
  sessionId: string;
  startTime: string;
  endTime: string;
  timeUsed: string;
  pricePerHour: number;
}

const HistoryItem = ({
  initial,
  location,
  address,
  duration,
  rating,
  price,
  sessionId,
  startTime,
  endTime,
  timeUsed,
  pricePerHour,
}: HistoryItemProps) => (
  <Card style={styles.card}>
    <View style={styles.locationSection}>
      <View
        style={[
          styles.initialCircle,
          {backgroundColor: initial === 'G' ? colors.primary : '#FF9800'},
        ]}>
        <Text style={styles.initialText}>{initial}</Text>
      </View>
      <View style={styles.locationInfo}>
        <Text style={styles.locationName}>{location}</Text>
        <Text style={styles.locationAddress}>{address}</Text>
        <View style={styles.metaInfo}>
          <Text style={styles.duration}>{duration}</Text>
          <Text style={styles.rating}>⭐ {rating}</Text>
          <Text style={styles.price}>${price.toFixed(2)}</Text>
        </View>
      </View>
    </View>

    <View style={styles.detailsSection}>
      <DetailRow label="Session ID" value={`#${sessionId}`} />
      <DetailRow label="Started At" value={startTime} />
      <DetailRow label="End At" value={endTime} />
      <DetailRow label="Time Used" value={timeUsed} />
      <DetailRow
        label="Price Per Hour"
        value={`$${pricePerHour.toFixed(2)}/H`}
      />
    </View>
  </Card>
);

const DetailRow = ({label, value}: {label: string; value: string}) => (
  <View style={styles.detailRow}>
    <Text style={styles.detailLabel}>{label}</Text>
    <Text style={styles.detailValue}>{value}</Text>
  </View>
);

const History = ({onBack}: {onBack: () => void}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <IconButton icon="arrow-left" size={24} iconColor={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.title}>History</Text>
      </View>

      <ScrollView style={styles.content}>
        {historyData.map((item, index) => (
          <HistoryItem key={index} {...item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 8,
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    marginHorizontal: 10,
  },
  locationSection: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  initialCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  initialText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  locationInfo: {
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
  metaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  duration: {
    fontSize: 14,
    color: '#666666',
  },
  rating: {
    fontSize: 14,
    color: '#666666',
  },
  price: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
  backButton: {
    marginRight: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333333',
  },
  detailsSection: {
    padding: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666666',
  },
  detailValue: {
    fontSize: 14,
    color: '#333333',
    fontWeight: '500',
  },
});

export default History;
