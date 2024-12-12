import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper';
import color from '../../assets/color';

const SessionDetails = () => {
  return (
    <View style={styles.detailsSection}>
      <View style={styles.titleContainer}>
        <Text style={styles.sectionTitle}>Current Session Details</Text>
      </View>
      <View style={styles.detailsContent}>
        <View style={styles.detailsRow}>
          {/* Zone Section */}
          <View style={styles.detailsColumn}>
            <Text style={[styles.detailLabel, styles.primaryText]}>Zone</Text>
            <View style={styles.valueRow}>
              <IconButton
                icon="car"
                size={20}
                iconColor="white"
                style={styles.iconBox}
              />
              <Text style={[styles.detailValue, styles.primaryValue]}>A</Text>
            </View>
          </View>

          {/* Parking Number Section */}
          <View style={styles.detailsColumn}>
            <Text style={[styles.detailLabel, styles.primaryText]}>
              Parking Number
            </Text>
            <View style={styles.valueRow}>
              <IconButton
                icon="alpha-p"
                size={20}
                iconColor="white"
                style={styles.iconBox}
              />
              <Text style={[styles.detailValue, styles.primaryValue]}>21</Text>
            </View>
          </View>
        </View>

        {/* Starting From Section */}
        <View style={styles.detailsColumn}>
          <Text style={[styles.detailLabel, styles.primaryText]}>
            Starting From
          </Text>
          <View style={styles.valueRow}>
            <IconButton
              icon="calendar-range"
              size={20}
              iconColor="white"
              style={styles.iconBox}
            />
            <Text style={[styles.detailValue, styles.primaryValue]}>
              26 May 2021, 10:00 AM
            </Text>
          </View>
        </View>

        {/* Duration Section */}
        <View style={styles.detailsColumn}>
          <Text style={[styles.detailLabel, styles.primaryText]}>Duration</Text>
          <View style={styles.valueRow}>
            <IconButton
              icon="calendar-range"
              size={20}
              iconColor="white"
              style={styles.iconBox}
            />
            <Text style={[styles.detailValue, styles.primaryValue]}>
              0 Days 1 Hours 58 Minutes
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SessionDetails;

const styles = StyleSheet.create({
  detailsSection: {
    marginBottom: 16,
  },
  titleContainer: {
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  detailsContent: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    gap: 16,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderRadius: 12, // This adds curved edges
    marginHorizontal: 16, // This adds horizontal spacing from screen edges
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  detailsColumn: {
    flex: 1,
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },
  primaryText: {
    color: color.primary,
  },
  iconBox: {
    backgroundColor: '#F99006',
    borderRadius: 12,
  },
  primaryValue: {
    color: color.black,
    fontWeight: '400',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  detailIcon: {
    width: 24,
    height: 24,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666666',
    marginLeft: 8,
  },
  detailValue: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
  },
});
