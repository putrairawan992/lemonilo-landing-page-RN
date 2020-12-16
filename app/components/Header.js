import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../utils/colors'

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <TextInput
          style={styles.searchInput}
          placeholder="Offers, food, and places to go"
        />
      </View>
      <View style={styles.headerContent}>
        <View style={styles.headerContentFlex1}>
          <Text style={styles.headerText1}>Bonus tengah bulan hari ini</Text>
          <TouchableOpacity style={styles.headerTouch}>
            <Text style={styles.headerText2}>
              Klaim OVO Rp100ribu buatmu...
            </Text>
            <Icon name="arrow-forward-circle" size={25} color={colors.brown} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerContentFlex2}>
          <Image
            source={require('../img/ovo100.jpg')}
            style={styles.headerImage}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchInput: {
    borderColor: colors.grey,
    borderWidth: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    width: '100%',
    height: 40,
    textAlign: 'center',
  },
  header: {
    backgroundColor: colors.yellow,
    padding: 10,
  },
  headerImage: {
    height: 90,
    width: 100,
    borderRadius: 30,
  },
  headerContent: {
    flexDirection: 'row',
    marginTop: 10,
    padding: 2,
    alignItems: 'flex-start',
  },
  headerContentFlex1: {
    width: '70%',
  },
  headerContentFlex2: {
    width: '30%',
  },
  headerText1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  headerText2: {
    fontSize: 14,
    marginRight: 5,
  },
  headerTouch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default Header
