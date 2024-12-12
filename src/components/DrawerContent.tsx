import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {IconButton} from 'react-native-paper';
import colors from '../assets/color';
import {images} from '../assets/images';

const DrawerContent = (props: any) => {
  const menuItems = [
    {icon: 'home', label: 'Home', onPress: () => {}},
    {icon: 'account', label: 'My Profile', onPress: () => {}},
    {icon: 'credit-card', label: 'Fare Card', onPress: () => {}},
    {icon: 'cash', label: 'Payment Methods', onPress: () => {}},
    {icon: 'lightbulb', label: 'Tips and Info', onPress: () => {}},
    {icon: 'cog', label: 'Settings', onPress: () => {}},
    {icon: 'phone', label: 'Contact Us', onPress: () => {}},
    {icon: 'lock-reset', label: 'Reset Password', onPress: () => {}},
  ];

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.profileSection}>
          <Image source={images.profile} style={styles.profileImage} />
          <Text style={styles.profileName}>John Doe</Text>
        </View>

        {menuItems.map((item, index) => (
          <DrawerItem
            key={index}
            icon={({color}) => (
              <IconButton
                icon={item.icon}
                size={24}
                iconColor={colors.primary}
              />
            )}
            label={item.label}
            labelStyle={styles.drawerLabel}
            onPress={item.onPress}
          />
        ))}

        <View style={styles.bottomSection}>
          <DrawerItem
            icon={({color}) => (
              <IconButton icon="logout" size={24} iconColor={colors.primary} />
            )}
            label="Logout"
            labelStyle={styles.drawerLabel}
            onPress={() => {}}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  drawerLabel: {
    fontSize: 16,
    color: '#333333',
    marginLeft: -16,
  },
  bottomSection: {
    marginTop: 'auto',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
});

export default DrawerContent;
