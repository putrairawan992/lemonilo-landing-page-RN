import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../utils/colors'
import {products} from '../data'

const screenWidth = Dimensions.get('window').width

const Products = () => {
  return (
    <View style={styles.products}>
      <Text style={styles.productText}>Keep discovering</Text>
      <View style={styles.productsFlex}>
        {products.map((product) => (
          <TouchableOpacity style={styles.productContent} key={product._id}>
            <Image source={{uri: product.photo}} style={styles.prouductImage} />
            <Text style={styles.productText2}>{product.text}</Text>
            <View style={styles.productDate}>
              {product.expireDate && (
                <>
                  <Icon
                    name="md-calendar-outline"
                    size={15}
                    color={colors.brown}
                  />
                  <Text style={styles.productText3}>
                    Until {product.expireDate}
                  </Text>
                </>
              )}
              {product.minRead && (
                <>
                  <Icon name="book-outline" size={15} color={colors.brown} />
                  <Text style={styles.productText3}>{product.minRead}</Text>
                </>
              )}
            </View>
            {product.discount && (
              <Text style={styles.productDiscount}>
                Diskon s.d {product.discount}
              </Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  products: {
    padding: 10,
    marginBottom: 50,
  },
  productText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  productText2: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  productText3: {
    marginLeft: 5,
    color: colors.brown,
    fontSize: 11,
  },
  prouductImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 5,
  },
  productDate: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  productsFlex: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: screenWidth,
  },
  productDiscount: {
    position: 'absolute',
    backgroundColor: colors.black,
    color: colors.white,
    fontSize: 11,
    padding: 3,
    borderRadius: 3,
    left: 8,
    top: 8,
  },
  productContent: {
    width: 170,
    position: 'relative',
    marginBottom: 18,
  },
})

export default Products
