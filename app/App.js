import React from 'react'
import {ScrollView, View, StatusBar, StyleSheet} from 'react-native'
import colors from './utils/colors'
import Header from './components/Header'
import OvoPoint from './components/OvoPoint'
import Menus from './components/Menus'
import Sponsor from './components/Sponsor'
import Promo from './components/Promo'
import Products from './components/Products'
import BottomNav from './components/BottomNav'

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.yellow} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <OvoPoint />
        <Menus />
        <Sponsor />
        <Promo />
        <Products />
      </ScrollView>
      <BottomNav />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
