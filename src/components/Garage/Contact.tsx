import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import color from '../../assets/color';
import {IconButton} from 'react-native-paper';
import {images} from '../../assets/images/images';

const Contact = () => {
  return (
    <View style={styles.infoSection}>
      <Text style={styles.sectionTitle}>Contact Info</Text>

      <View style={styles.contactCard}>
        <Image source={images.contactImage} style={styles.contactImage} />
        <View style={styles.contactDetails}>
          <Text style={styles.contactName}>Jason Anderson</Text>
          <View style={styles.phoneContainer}>
            <IconButton
              icon="phone-in-talk-outline"
              size={16}
              iconColor={color.primary}
              style={styles.phoneIcon}
            />
            <Text style={styles.contactPhone}>+1 1048285215</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.callButton}
          onPress={() => Linking.openURL('tel:+11048285215')}>
          <Text style={styles.callButtonText}>Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  infoSection: {
    padding: 16,
    borderTopWidth: 8,
    borderTopColor: '#F5F5F5',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
  },
  contactImage: {
    marginRight: 12,
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  contactDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  contactName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  contactPhone: {
    fontSize: 14,
    color: '#666666',
  },
  callButton: {
    backgroundColor: '#666666',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 10,
    marginRight: 16,
  },
  callButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneIcon: {
    margin: 0,
    padding: 0,
    marginLeft: -8,
  },
});
