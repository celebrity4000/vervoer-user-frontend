import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import colors from '../assets/color';
import {ParkingViewType} from './types';

interface NotificationViewProps {
  onBack: () => void;
  onNavigate: (screen: ParkingViewType) => void;
}

interface NotificationItem {
  id: string;
  title: string;
  screen: ParkingViewType;
  timeAgo: string;
  read: boolean;
}

const NotificationView: React.FC<NotificationViewProps> = ({
  onBack,
  onNavigate,
}) => {
  const notifications: NotificationItem[] = [
    {
      id: '1',
      title: 'Find Parking',
      screen: 'findParking',
      timeAgo: '5 min ago',
      read: false,
    },
    {
      id: '2',
      title: 'My QR Code',
      screen: 'qrCode',
      timeAgo: '1 day ago',
      read: false,
    },
    {
      id: '3',
      title: 'Live Session',
      screen: 'liveSession',
      timeAgo: '5 min ago',
      read: false,
    },
    {
      id: '4',
      title: 'History',
      screen: 'history',
      timeAgo: '5 min ago',
      read: true,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <IconButton icon="arrow-left" size={24} iconColor={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      <ScrollView style={styles.notificationsList}>
        {notifications.map(notification => (
          <TouchableOpacity
            key={notification.id}
            style={[
              styles.notificationItem,
              notification.read && styles.readNotification,
            ]}
            onPress={() => onNavigate(notification.screen)}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
            <Text style={styles.timeAgo}>{notification.timeAgo}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
    paddingHorizontal: 16,
    height: 60,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
  },
  notificationsList: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  notificationItem: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  readNotification: {
    opacity: 0.6,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 8,
  },
  timeAgo: {
    fontSize: 12,
    color: '#666666',
  },
});

export default NotificationView;
