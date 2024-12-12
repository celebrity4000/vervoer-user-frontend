import React, {useState} from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {IconButton, Badge} from 'react-native-paper';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {images} from '../assets/images';
import colors from '../assets/color';
import ProfileDrawer from './ProfileDrawer';
import NotificationView from './NotificationView';
import WalletView from './WalletView';
import SearchView from './SearchView';
import {ParkingViewType} from './types';

// Define your navigation param list type
type RootStackParamList = {
  Parking: undefined;
  Profile: undefined;
  FareCard: undefined;
  PaymentMethods: undefined;
  TipsInfo: undefined;
  Settings: undefined;
  ContactUs: undefined;
  ResetPassword: undefined;
  Logout: undefined;
  // Add other screens as needed
};

interface HeaderProps {
  notificationCount?: number;
  onNavigate?: (screen: ParkingViewType) => void;
  renderContent?: () => React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  notificationCount = 0,
  onNavigate = () => {},
  renderContent,
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [isProfileDrawerVisible, setIsProfileDrawerVisible] = useState(false);
  const [activeView, setActiveView] = useState<
    'none' | 'search' | 'wallet' | 'notifications'
  >('none');

  const getNotificationBadgeText = (count: number): string => {
    return count > 9 ? '9+' : count.toString();
  };

  const handleViewChange = (
    view: 'none' | 'search' | 'wallet' | 'notifications',
  ): void => {
    setActiveView(view);
  };

  const handleCloseView = (): void => {
    setActiveView('none');
  };

  const renderActiveContent = () => {
    switch (activeView) {
      case 'search':
        return (
          <SearchView onClose={handleCloseView} onBack={handleCloseView} />
        );
      case 'wallet':
        return <WalletView onBack={handleCloseView} />;
      case 'notifications':
        return (
          <NotificationView
            onBack={handleCloseView}
            onNavigate={screen => {
              handleCloseView();
              onNavigate(screen);
            }}
          />
        );
      default:
        return renderContent && renderContent();
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* Left section - Profile Image */}
        <TouchableOpacity
          onPress={() => setIsProfileDrawerVisible(true)}
          style={styles.profileContainer}>
          <Image
            source={images.profile}
            style={styles.profileImage}
            resizeMode="cover"
          />
        </TouchableOpacity>

        {/* Middle section - Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={images.logo}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Right section - Icons */}
        <View style={styles.iconsContainer}>
          <IconButton
            icon="magnify"
            size={24}
            onPress={() => handleViewChange('search')}
            style={styles.icon}
            iconColor={colors.black}
          />
          <TouchableOpacity onPress={() => handleViewChange('wallet')}>
            <Image
              source={images.wallet}
              style={styles.iconImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View>
            <IconButton
              icon="bell-outline"
              size={24}
              onPress={() => handleViewChange('notifications')}
              style={styles.icon}
              iconColor={colors.black}
            />
            {notificationCount > 0 && (
              <Badge size={16} style={styles.badge}>
                {getNotificationBadgeText(notificationCount)}
              </Badge>
            )}
          </View>
        </View>
      </View>

      {/* Content Section */}
      <View style={styles.content}>{renderActiveContent()}</View>

      {/* Profile Drawer */}
      <ProfileDrawer
        visible={isProfileDrawerVisible}
        onClose={() => setIsProfileDrawerVisible(false)}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
    height: 80,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
  content: {
    flex: 1,
  },
  profileContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 16,
  },
  logo: {
    height: 30,
    width: 100,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    margin: 0,
    marginLeft: 8,
  },
  iconImage: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  badge: {
    position: 'absolute',
    top: 2,
    right: 4,
    backgroundColor: colors.primary,
  },
});

export default Header;
