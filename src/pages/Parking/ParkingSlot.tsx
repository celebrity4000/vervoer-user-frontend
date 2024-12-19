import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '../../assets/color';
import {images} from '../../assets/images/images';
import { RootStackParamList } from '../../../navigator/Routes';
import { responsiveHeight } from 'react-native-responsive-dimensions';


const ParkingSlot = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [duration, setDuration] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });
  const [dateTimeText, setDateTimeText] = useState('');

  useEffect(() => {
    if (selectedDate && selectedTime) {
      const now = new Date();
      const selected = new Date(selectedDate);
      selected.setHours(selectedTime.getHours());
      selected.setMinutes(selectedTime.getMinutes());

      if (selected > now) {
        const diffMs = selected.getTime() - now.getTime();
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const diffHrs = Math.floor(
          (diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

        setDuration({
          days: diffDays,
          hours: diffHrs,
          minutes: diffMins,
        });

        const formattedDate = selected.toLocaleDateString();
        const formattedTime = selected.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        });
        setDateTimeText(`${formattedDate} ${formattedTime}`);
      }
    }
  }, [selectedDate, selectedTime]);

  const onDateChange = (event: any, date?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (date) {
      setSelectedDate(date);
      if (Platform.OS === 'android') {
        setShowTimePicker(true);
      }
    }
  };

  const onTimeChange = (event: any, time?: Date) => {
    setShowTimePicker(Platform.OS === 'ios');
    if (time) {
      setSelectedTime(time);
    }
  };




  return (
    <View style={styles.container}>
    <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconButton
              icon="arrow-left"
              size={30}
              iconColor={colors.primary}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Book Parking</Text>
        </View>

        {/* Map Placeholder */}
        <View style={styles.mapPlaceholder} />

        {/* Bottom Sheet */}
        <View style={styles.bottomSheet}>
          {/* Location Section */}
          <Text style={styles.sectionTitle}>Location</Text>
          <View style={styles.textInputContainer}>
            <Image
              source={images.location}
              style={[styles.icon, {left: -10}]}
              resizeMode="contain"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Brooklyn, NY"
              placeholderTextColor="#999999"
            />
          </View>
          <TouchableOpacity style={styles.useLocationButton}>
            <Text style={styles.useLocationText}>Use Current Location</Text>
          </TouchableOpacity>

          {/* When Section */}
          <Text style={styles.sectionTitle}>When</Text>
          <TouchableOpacity
            style={styles.textInputContainer}
            onPress={() => setShowDatePicker(true)}>
            <Image
              source={images.calender}
              style={[styles.icon, {left: -10}]}
              resizeMode="contain"
            />
            <Text
              style={[styles.textInput, !dateTimeText && styles.placeholder]}>
              {dateTimeText || 'Select Date & Time'}
            </Text>
          </TouchableOpacity>

          {/* Duration Section */}
          <Text style={styles.sectionTitle}>Duration</Text>
          <View style={styles.durationContainer}>
            <Image
              source={images.calender}
              style={[styles.icon, {left: -10}]}
              resizeMode="contain"
            />
            <View style={styles.durationInputs}>
              <View style={styles.durationField}>
                <Text style={styles.durationValue}>{duration.days}</Text>
                <Text style={styles.durationLabel}>Days</Text>
              </View>
              <View style={styles.durationField}>
                <Text style={styles.durationValue}>{duration.hours}</Text>
                <Text style={styles.durationLabel}>Hours</Text>
              </View>
              <View style={styles.durationField}>
                <Text style={styles.durationValue}>{duration.minutes}</Text>
                <Text style={styles.durationLabel}>Minutes</Text>
              </View>
            </View>
          </View>

          {/* Date Time Picker Modals */}
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate || new Date()}
              mode="date"
              minimumDate={new Date()}
              onChange={onDateChange}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            />
          )}

          {showTimePicker && (
            <DateTimePicker
              value={selectedTime || new Date()}
              mode="time"
              is24Hour={true}
              onChange={onTimeChange}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            />
          )}

          {/* Pick Parking Slot Button */}
          <TouchableOpacity
            style={styles.pickSlotButton}
            onPress={() => navigation.navigate('ParkingSpot')}>
            <Text style={styles.pickSlotButtonText}>Pick Parking Slot</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    height: 60,
    marginTop: '20%',
    zIndex: 1,
    backgroundColor: 'transparent',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginBottom: 10,
    padding: 20,
    height: '65%',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 20,
    borderBottomWidth: 1.5,
    borderColor: '#E0E0E0',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
  useLocationButton: {
    marginBottom: 20,
  },
  useLocationText: {
    color: colors.primary,
    fontSize: 14,
    paddingHorizontal: 20,
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1.5,
    borderColor: '#E0E0E0',
  },
  durationInputs: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  durationField: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  durationValue: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
    marginRight: 4,
  },
  durationLabel: {
    fontSize: 14,
    color: '#666666',
    alignSelf: 'flex-end',
    paddingBottom: 2,
  },
  placeholder: {
    color: '#999999',
  },
  pickSlotButton: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    height: responsiveHeight(6.5),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  pickSlotButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ParkingSlot;
