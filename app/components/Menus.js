import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import colors from '../utils/colors'
import {menus} from '../data'

const Menus = () => {
  return (
    <View style={styles.menus}>
      {menus.map((menu) => (
        <TouchableOpacity style={styles.menuContent} key={menu._id}>
          <View style={styles.menuIcon}>
            <Icon name={menu.iconName} size={20} style={styles.icon} />
          </View>
          <Text style={styles.menuText}>{menu.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  menus: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  menuContent: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 7,
    width: 80,
  },
  menuIcon: {
    backgroundColor: colors.green,
    width: 50,
    height: 50,
    marginBottom: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  menuText: {
    fontSize: 12,
  },
  icon: {
    color: colors.grey,
  },
})

export default Menus
