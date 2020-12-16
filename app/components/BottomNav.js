import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import colors from '../utils/colors'
import {bottomMenus} from '../data'

const BottomNav = () => {
  return (
    <View style={styles.bottomNav}>
      {bottomMenus.map((menu) => (
        <TouchableOpacity style={styles.bottomNavMenu} key={menu._id}>
          <Icon
            name={menu.iconName}
            size={25}
            color={menu.iconName === 'compass' ? colors.green : colors.brown}
          />
          <Text
            style={
              menu.iconName === 'compass'
                ? styles.activeText
                : styles.noActiveText
            }>
            {menu.text}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: colors.grey,
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: colors.white,
  },
  bottomNavMenu: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeText: {
    fontWeight: 'bold',
    color: colors.green,
  },
  noActiveText: {
    color: colors.brown,
  },
})

export default BottomNav
