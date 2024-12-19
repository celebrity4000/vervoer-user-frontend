import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Modal,
  Animated,
} from 'react-native';
import {IconButton, Avatar} from 'react-native-paper';
import colors from '../assets/color';
import {images} from '../assets/images/images';

interface ProfileDrawerProps {
  visible: boolean;
  onClose: () => void;
  navigation: any;
}

const ProfileDrawer: React.FC<ProfileDrawerProps> = ({
  visible,
  onClose,
  navigation,
}) => {
  const slideAnim = React.useRef(new Animated.Value(-300)).current;

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : -300,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  const menuItems = [
    {icon: 'home', label: 'Home', route: 'Parking'},
    {icon: 'account', label: 'My Profile', route: 'Profile'},
    {icon: 'card-account-details', label: 'Fare Card', route: 'FareCard'},
    {icon: 'credit-card', label: 'Payment Methods', route: 'PaymentMethods'},
    {icon: 'lightbulb', label: 'Tips and Info', route: 'TipsInfo'},
    {icon: 'cog', label: 'Settings', route: 'Settings'},
    {icon: 'message', label: 'Contact Us', route: 'ContactUs'},
    {icon: 'lock-reset', label: 'Reset Password', route: 'ResetPassword'},
  ];

  if (!visible) return null;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <Animated.View
          style={[
            styles.drawer,
            {
              transform: [{translateX: slideAnim}],
            },
          ]}>
          {/* Profile Section */}
          <View style={styles.profileSection}>
            <Avatar.Image
              size={80}
              source={images.profileImage}
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>John Doe</Text>
          </View>

          {/* Menu Items Container */}
          <View style={styles.contentContainer}>
            {/* Scrollable Menu Items */}
            <ScrollView style={styles.menuContainer}>
              {menuItems.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    navigation.navigate(item.route);
                    onClose();
                  }}
                  style={styles.menuItem}>
                  <IconButton
                    icon={item.icon}
                    size={24}
                    iconColor={
                      item.label === 'Home' ? colors.primary : colors.black
                    }
                    style={styles.menuIcon}
                  />
                  <Text
                    style={[
                      styles.menuText,
                      item.label === 'Home' && styles.activeMenuText,
                    ]}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* Logout Button */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Logout');
                onClose();
              }}
              style={styles.logoutButton}>
              <IconButton
                icon="logout"
                size={24}
                iconColor={colors.black}
                style={styles.menuIcon}
              />
              <Text style={styles.menuText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
        <TouchableOpacity
          style={styles.overlayTouch}
          onPress={onClose}
          activeOpacity={1}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'row',
  },
  overlayTouch: {
    flex: 1,
  },
  drawer: {
    width: Dimensions.get('window').width * 0.75,
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
  },
  menuContainer: {
    flex: 1,
    paddingTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  menuIcon: {
    margin: 0,
    marginRight: 12,
  },
  menuText: {
    fontSize: 16,
    color: '#000000',
  },
  activeMenuText: {
    color: colors.primary,
    fontWeight: '600',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
});

export default ProfileDrawer;
