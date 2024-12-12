import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Linking,
} from 'react-native';
import {Icon, IconButton} from 'react-native-paper';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import colors from '../assets/color';
import {images} from '../assets/images';
import color from '../assets/color';
import Contact from '../components/Garage/Contact';
import {RootStackParamList} from '../../App';

const GarageScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const ParkingInfoCard = () => (
    <View style={styles.parkingInfoCard}>
      <View style={styles.typeIndicator}>
        <Text style={styles.typeText}>G</Text>
      </View>
      <View style={styles.infoContent}>
        <Text style={styles.parkingTitle}>
          Central Shopping Centre (Garage)
        </Text>
        <Text style={styles.parkingAddress}>123, Lincon Street, New York</Text>
        <View style={styles.parkingMetrics}>
          <View style={styles.metric}>
            <Icon source="clock-outline" size={16} color="#666" />
            <Text style={styles.metricText}>5 min</Text>
          </View>
          <View style={styles.metric}>
            <Icon source="star" size={16} color={colors.primary} />
            <Text style={styles.metricText}>4.2</Text>
          </View>
          <Text style={styles.priceText}>$5.00/H</Text>
        </View>
      </View>
    </View>
  );

  const renderContent = () => {
    return (
      <View style={styles.content}>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <IconButton
                icon="arrow-left"
                size={24}
                iconColor={colors.primary}
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Parking Details</Text>
          </View>

          {/* Parking Image */}
          <View style={styles.imageWrapper}>
            <View style={styles.imageContainer}>
              <Image
                source={images.garage}
                style={styles.parkingImage}
                resizeMode="cover"
              />
            </View>
          </View>

          {/* Parking Info Card */}
          <ParkingInfoCard />

          {/* Parking Info Section */}
          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>Parking Info</Text>

            <View style={styles.parkingCard}>
              <View style={styles.infoContent}>
                <View style={styles.infoItem}>
                  <Text style={styles.subTitle}>About :</Text>
                  <Text style={styles.description}>
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And
                    Typesetting Industry. Lorem Ipsum Has Been The Industry's
                    Standard Dummy Text Ever Since The 1500S, When An Unknown
                    Printer Took A Galley Of Type.
                  </Text>
                </View>

                <View style={styles.infoItem}>
                  <Text style={styles.subTitle}>Time availability :</Text>
                  <Text style={styles.availabilityText}>24X7</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Contact Info Section */}
          <Contact />
        </ScrollView>

        {/* Bottom Bar */}
        <View style={styles.bottomBar}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Price per Hour</Text>
            <Text style={styles.price}>$5.00</Text>
          </View>
          <TouchableOpacity
            style={styles.bookButton}
            onPress={() => {
              navigation.navigate('ParkingSpace');
            }}>
            <Text style={styles.bookButtonText}>Book now</Text>
          </TouchableOpacity>
        </View>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    height: 60,
    backgroundColor: 'transparent',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
  },
  imageWrapper: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  imageContainer: {
    height: 180,
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    overflow: 'hidden',
  },
  parkingImage: {
    width: '100%',
    height: '100%',
  },
  parkingInfoCard: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#FFFFFF',
    margin: 16,
    borderRadius: 12,
  },
  parkingCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
  },
  typeIndicator: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  typeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  infoCard: {
    padding: 0, // Override padding from parkingInfoCard
  },
  infoSection: {
    padding: 16,
    borderTopWidth: 8,
    borderTopColor: '#F5F5F5',
  },
  infoItem: {
    marginBottom: 16,
  },
  infoContent: {
    flex: 1,
  },
  parkingTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 4,
  },
  parkingAddress: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  parkingMetrics: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metric: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  metricText: {
    fontSize: 14,
    color: '#666666',
    marginLeft: 4,
  },
  priceText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
  // infoSection: {
  //   padding: 16,
  //   borderTopWidth: 8,
  //   borderTopColor: '#F5F5F5',
  // },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
  availabilityText: {
    fontSize: 14,
    color: '#666666',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contactLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
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
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    backgroundColor: '#FFFFFF',
  },
  priceContainer: {
    flex: 1,
  },
  priceLabel: {
    fontSize: 14,
    color: '#666666',
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
  },
  bookButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 24,
  },
  bookButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default GarageScreen;
