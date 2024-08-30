import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

import Item1 from '../common/item1';

const Home = () => {
  const URL = 'https://dummyjson.com/products';
  const Navigation = useNavigation();

  const [allProducts, setAllProducts] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    getAllProduct();
  }, []);

  const getAllProduct = async () => {
    try {
      const res = await axios(URL);
      console.log(res?.data, 'data');
      setAllProducts(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const sort = order => {
    if (allProducts?.products) {
      let sortedProducts = [...allProducts.products].sort((a, b) => {
        return order === 'asc' ? a.price - b.price : b.price - a.price;
      });

      setAllProducts({products: sortedProducts});
    }
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => setIsModalVisible(true)}
          style={styles.filter}>
          <Text style={{}}>Filter</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Navigation.navigate('Cart')}
          style={styles.cart}>
          <Text style={{}}>Cart</Text>
        </TouchableOpacity>
      </View>
      <Item1 data={allProducts?.products} />

      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Sort by Price</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => sort('asc')}>
              <Text style={styles.textStyle}>Low to High</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => sort('desc')}>
              <Text style={styles.textStyle}>High To Low</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setIsModalVisible(false)}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  cart: {
    flex: 0.1,
    backgroundColor: 'lightblue',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    width: 55,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  filter: {
    flex: 0.1,
    backgroundColor: 'lightblue',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    width: 55,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
});
