import React from 'react'
import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native'
import colors from '../utils/colors'

const Sponsor = () => {
  return (
    <TouchableOpacity style={styles.sponsor}>
      <Image
        style={styles.sponsorImage}
        source={require('../img/ovo100.jpg')}
        resizeMode="stretch"
      />
      <Text style={styles.sponsorText1}>
        WOW! Klaim OVO Rp100Ribu buatmu disini!
      </Text>
      <Text style={styles.sponsorText2}>Sponsored by Good Doctor</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  sponsor: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 5,
  },
  sponsorImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  sponsorText1: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  sponsorText2: {
    color: colors.brown,
    fontSize: 12,
  },
})

export default Sponsor
