import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import colors from '../assets/color';
import {images} from '../assets/images/images';
import { responsiveWidth } from 'react-native-responsive-dimensions';

type CardType = 'Debit Card' | 'Credit Card';

const Payment = () => {
  const navigation = useNavigation();
  const [selectedCard, setSelectedCard] = useState<CardType>('Debit Card');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const SuccessModal = () => {
    if (!showSuccessModal) return null;

    const handleOkPress = () => {
      setShowSuccessModal(false);
      // Navigate to LiveSession screen
      navigation.navigate('LiveSession' as never);
    };

    return (
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.successIcon}>
            <IconButton icon="check" size={40} iconColor="#FFFFFF" />
          </View>
          <Text style={styles.modalTitle}>Book Successfully</Text>
          <Text style={styles.modalSubtitle}>Your Car Is Saved.</Text>
          <TouchableOpacity style={styles.okButton} onPress={handleOkPress}>
            <Text style={styles.okButtonText}>Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
    
          {/* Custom Header */}
          <View style={styles.customHeader}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <IconButton
                icon="arrow-left"
                size={30}
                iconColor={colors.primary}
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Payment</Text>
          </View>
          <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          {/* Ticket Summary Card */}
          <View style={styles.ticketCard}>
            <View style={styles.ticketRow}>
              <Text style={styles.ticketLabel}>TICKET NUMBER</Text>
              <Text style={styles.ticketNumber}>#DC58223</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.ticketRow}>
              <Text style={styles.fareLabel}>Sub Total</Text>
              <Text style={styles.fareAmount}>$125.00</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.ticketRow}>
              <Text style={styles.fareLabel}>Fees</Text>
              <Text style={styles.fareAmount}>$15.00</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.ticketRow}>
              <Text style={styles.totalLabel}>Total Payment (*Approx)</Text>
              <Text style={styles.totalAmount}>$140.00</Text>
            </View>
          </View>

          {/* Payment Method Section */}
          <View style={styles.paymentMethodContainer}>
            <Text style={styles.sectionTitle}>Payment Method</Text>
            <View style={styles.paymentOptions}>
              <TouchableOpacity style={styles.addCardButton}>
                <IconButton icon="plus" size={24} iconColor="#666" />
              </TouchableOpacity>
              <Image source={images.applePay} style={styles.paymentIcon} />
              <Image source={images.mastercard} style={styles.paymentIcon} />
              <Image source={images.visa} style={styles.paymentIcon} />
              <Image source={images.waylet} style={styles.paymentIcon} />
            </View>
          </View>

          {/* Card Selection and Form */}
          <View style={styles.cardDetailsContainer}>
            <View style={styles.cardTypeContainer}>
              <TouchableOpacity
                style={styles.cardTypeButton}
                onPress={() => setSelectedCard('Debit Card')}>
                <View
                  style={[
                    styles.radioButton,
                    selectedCard === 'Debit Card' && styles.radioButtonSelected,
                  ]}>
                  <View
                    style={
                      selectedCard === 'Debit Card' ? styles.radioInner : null
                    }
                  />
                </View>
                <Text style={styles.cardTypeText}>Debit Card</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cardTypeButton}
                onPress={() => setSelectedCard('Credit Card')}>
                <View
                  style={[
                    styles.radioButton,
                    selectedCard === 'Credit Card' &&
                      styles.radioButtonSelected,
                  ]}>
                  <View
                    style={
                      selectedCard === 'Credit Card' ? styles.radioInner : null
                    }
                  />
                </View>
                <Text style={styles.cardTypeText}>Credit Card</Text>
              </TouchableOpacity>
            </View>

            {/* Card Form */}
            <View style={styles.cardForm}>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Card Holder Name"
                  style={styles.input}
                  placeholderTextColor="#999"
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Card Number"
                  style={styles.input}
                  placeholderTextColor="#999"
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Expires MM/YY"
                  style={styles.input}
                  placeholderTextColor="#999"
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="CVV"
                  style={styles.input}
                  placeholderTextColor="#999"
                  keyboardType="numeric"
                  secureTextEntry
                />
              </View>
            </View>

            {/* Pay Now Button */}
            <TouchableOpacity
              style={styles.payButton}
              onPress={() => setShowSuccessModal(true)}>
              <Text style={styles.payButtonText}>Pay Now</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <SuccessModal />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  customHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    height: 60,
    marginTop: '20%',
    backgroundColor: 'transparent',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
  },
  ticketCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    margin: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  ticketRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  ticketLabel: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '500',
  },
  ticketNumber: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: '600',
  },
  fareLabel: {
    fontSize: 14,
    color: '#666666',
  },
  fareAmount: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '500',
  },
  totalLabel: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '500',
  },
  totalAmount: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: '600',
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 8,
  },
  paymentMethodContainer: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    marginTop: 16,
    width: responsiveWidth(90),
    alignSelf: 'center',
    
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 16,
  },
  paymentOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 24,
  },
  addCardButton: {
    width: 48,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentIcon: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  cardDetailsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    margin: 16,
  },
  cardTypeContainer: {
    flexDirection: 'row',
    gap: 24,
    marginBottom: 24,
  },
  cardTypeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#666666',
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    borderColor: colors.primary,
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.primary,
  },
  cardTypeText: {
    fontSize: 16,
    color: '#000000',
  },
  cardForm: {
    gap: 16,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
    color: '#000000',
  },
  payButton: {
    backgroundColor: colors.primary,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  payButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    width: '80%',
  },
  successIcon: {
    backgroundColor: colors.primary,
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 24,
  },
  okButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 48,
    borderRadius: 24,
  },
  okButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Payment;
