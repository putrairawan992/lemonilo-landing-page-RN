import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../utils/colors'

const OvoPoint = () => {
  return (
    <View style={styles.ovoPoint}>
      <TouchableOpacity style={styles.ovoPointContent}>
        <View style={styles.ovoPointLogo}>
          <Image
            source={require('../img/ovologo.png')}
            style={styles.ovoPointImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.ovoPointContentFlex}>
          <Text>Use OVO</Text>
          <Icon name="arrow-forward" size={15} color={colors.brown} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ovoPointContent}>
        <View style={styles.ovoPointLogo}>
          <Image
            source={require('../img/crown.png')}
            style={styles.ovoPointImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.ovoPointContentFlex}>
          <Text>O Points</Text>
          <Icon name="arrow-forward" size={15} color={colors.brown} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  ovoPoint: {
    flexDirection: 'row',
  },
  ovoPointImage: {
    width: 25,
    height: 25,
  },
  ovoPointContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    borderWidth: 1,
    borderColor: colors.grey,
    padding: 10,
  },
  ovoPointContentFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ovoPointLogo: {
    borderWidth: 3,
    borderColor: colors.grey,
    borderRadius: 30,
    padding: 2,
    marginRight: 7,
  },
})

export default OvoPoint
