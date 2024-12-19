// components/LiveSession/LiveSession.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  Linking,
} from 'react-native';
import { IconButton } from 'react-native-paper';
import colors from '../assets/color';
import { ParkingViewType } from '../components/types';
import { images } from '../assets/images/images';
import color from '../assets/color';
import SessionDetails from './LiveSession/SessionDetails';
import LocationCard from './LiveSession/LocationCard';
import Contact from './LiveSession/Contact';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

interface LiveSessionProps {
  onBack: () => void;
  onNavigate: (screen: ParkingViewType) => void;
  qrCode: string;
}

interface SessionDetailItemProps {
  icon: ImageSourcePropType | React.ReactNode;
  label: string;
  value: string;
  valueStyle?: any;
}

const handleCall = () => {
  Linking.openURL('tel:+11048285215');
};

const SessionDetailItem = ({
  icon,
  label,
  value,
  valueStyle,
}: SessionDetailItemProps) => (
  <View style={styles.detailItem}>
    {React.isValidElement(icon) ? (
      icon
    ) : (
      <Image source={icon as ImageSourcePropType} style={styles.detailIcon} />
    )}
    <View>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={[styles.detailValue, valueStyle]}>{value}</Text>
    </View>
  </View>
);

const PaymentDetailRow = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.paymentRow}>
    <Text style={styles.paymentLabel}>{label}</Text>
    <Text style={styles.paymentValue}>{value}</Text>
  </View>
);

const LiveSession: React.FC<LiveSessionProps> = ({
  onBack,
  onNavigate,
  qrCode,
}) => {
  const parkingId = qrCode.replace('DC', 'PARK');

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <TouchableOpacity onPress={onBack} style={{ width:"10%", alignItems: 'center'}}>
              <IconButton
                icon="arrow-left"
                size={30}
                iconColor={colors.primary}
              />
            </TouchableOpacity>
            <View style={{width: "60%"}}>
              <Text style={styles.title}>Your Session Summary</Text>
            </View>
            <Text style={styles.parkingId}>#{parkingId}</Text>
          </View>
        </View>

        <View style={styles.billSection}>
          <Text style={styles.billLabel}>Your bill is</Text>
          <Text style={styles.billAmount}>$10.00</Text>
          <Text style={styles.billTime}>28 MAY 2021, 2:00 PM</Text>
          <View style={styles.divider} />
        </View>

        <LocationCard />
        <SessionDetails />

        <View style={styles.paymentSection}>
          <Text style={[styles.sectionTitle, { marginBottom: 16 }]}>
            Payment Summary
          </Text>
          <View style={styles.paymentContent}>
            <PaymentDetailRow
              label="Started At"
              value="26 MAY 2021, 10:00 AM"
            />
            <PaymentDetailRow label="End At" value="26 MAY 2021, 12:00 AM" />
            <PaymentDetailRow label="Time Used" value="2 Hours" />
            <PaymentDetailRow label="Price Per Hour" value="$5.00" />
            <PaymentDetailRow label="Total Price" value="$10.00" />
            <View style={styles.totalPayment}>
              <Text style={styles.totalLabel}>
                Total Payment <Text style={styles.approved}>(Approved)</Text>
              </Text>
              <Text style={styles.totalAmount}>$10.00</Text>
            </View>
          </View>
        </View>

        <Contact />
        <TouchableOpacity onPress={onBack} style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel Parking</Text>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity
        style={styles.footer}
        onPress={() => onNavigate('qrCode')}>
        <View style={styles.footerContent}>
          <Text style={styles.footerText}>My QR Code</Text>
          <Image source={images.Scanner} style={styles.qrImage} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 16,
    backgroundColor: '#FDF1E5',
    marginTop: '15%',

  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    color: '#333333',
  },
  parkingId: {
    color: colors.primary,
    fontSize: responsiveFontSize(1.9),
    textAlign: 'right',
  },
  content: {
    flex: 1,
  },
  billSection: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    marginBottom: 4,
  },
  billLabel: {
    fontSize: 16,
    color: '#666666',
  },
  billAmount: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.primary,
    marginVertical: 8,
  },
  billTime: {
    fontSize: 14,
    color: '#666666',
  },
  divider: {
    height: 2,
    backgroundColor: '#E0E0E0',
    marginTop: 16,
    width: '80%', // This makes the line take up 80% of the container width
    alignSelf: 'center', // This centers the line horizontally
  },
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
    backgroundColor: colors.primary,
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
    color: colors.primary,
    fontWeight: '600',
  },
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
    color: colors.primary,
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
  paymentSectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  paymentSection: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    marginBottom: 16,
  },
  paymentContent: {
    gap: 12,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentLabel: {
    fontSize: 14,
    color: '#666666',
  },
  paymentValue: {
    fontSize: 14,
    color: '#333333',
    fontWeight: '500',
  },
  totalPayment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  approved: {
    color: colors.primary,
    fontSize: 14,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  contactSection: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 16,
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  contactImage: {
    marginLeft: 8,
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
  cancelButton: {
    margin: 16,
    backgroundColor: '#666666',
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  footerContent: {
    alignItems: 'center', // Centers children horizontally
    justifyContent: 'center', // Centers children vertically
  },
  footerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8, // Adds space between text and image
  },
  qrImage: {
    width: 48,
    height: 48,
  },
});

export default LiveSession;
