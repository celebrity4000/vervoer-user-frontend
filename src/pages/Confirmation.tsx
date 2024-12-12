import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {Icon, IconButton} from 'react-native-paper';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import colors from '../assets/color';
import {images} from '../assets/images';
import SessionDetails from '../components/LiveSession/SessionDetails';
import Contact from '../components/LiveSession/Contact';
import LocationCard from '../components/LiveSession/LocationCard';
import {RootStackParamList} from '../../App';

const Confirmation = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const renderContent = () => {
    return (
      <View style={styles.content}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          {/* Custom Header */}
          <View style={styles.customHeader}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <IconButton
                icon="arrow-left"
                size={24}
                iconColor={colors.primary}
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Booking Confirmation</Text>
          </View>

          {/* Map Image */}
          <View style={styles.mapContainer}>
            <Image
              source={images.BookingConfirmationMap}
              style={styles.mapImage}
              resizeMode="cover"
            />
          </View>

          {/* Bottom Sheet */}
          <View style={styles.bottomSheet}>
            {/* Location Card */}
            <LocationCard />

            {/* Session Details */}
            <View style={styles.sectionContainer}>
              <SessionDetails />
            </View>

            {/* Contact Info */}
            <View style={styles.sectionContainer}>
              <Contact />
            </View>

            {/* Wallet and Total Fare */}
            <View style={styles.fareSection}>
              <TouchableOpacity style={styles.walletButton}>
                <Image source={images.wallet} style={{width: 24, height: 24}} />
                <Text style={styles.walletText}>Wallet</Text>
                <Text style={styles.balanceText}>
                  (Balance : <Text style={styles.balanceAmount}>$2500.00</Text>)
                </Text>
                <Icon source="chevron-right" size={24} color="#000000" />
              </TouchableOpacity>

              <View style={styles.totalFareContainer}>
                <View style={styles.fareDetails}>
                  <View>
                    <Text style={styles.totalFareLabel}>
                      Total Fare (*approx)
                    </Text>
                    <Text style={styles.totalFareAmount}>$140.00</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.confirmButton}
                    onPress={() => navigation.navigate('Payment')}>
                    <Text style={styles.confirmButtonText}>
                      Confirm Booking
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        notificationCount={4}
        onNavigate={(screen: string) => {
          navigation.navigate(screen as never);
        }}
        renderContent={renderContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
  },
  mapContainer: {
    height: 280,
    width: '100%',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  bottomSheet: {
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    marginTop: -20,
  },
  sectionContainer: {
    marginTop: 16,
  },
  fareSection: {
    marginTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },
  walletButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  walletText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    marginLeft: 8,
  },
  balanceText: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
  balanceAmount: {
    color: colors.primary,
    fontWeight: '500',
  },
  totalFareContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  fareDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  totalFareLabel: {
    fontSize: 14,
    color: '#666666',
  },
  totalFareAmount: {
    fontSize: 24,
    color: colors.primary,
    fontWeight: '600',
    marginTop: 4,
  },
  confirmButton: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    paddingHorizontal: 24,
    // height: '100%', // This will make it match the height of fare details
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Confirmation;
