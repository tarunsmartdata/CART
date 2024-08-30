import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {DeleteFromCartRedux} from '../redux/actions';

const Cart = () => {
  const Navigation = useNavigation();
  const dispatch = useDispatch();

  const cart = useSelector(state => state.dashReducer.cartItem);

  const [totalCartValue, setTotalCartValue] = useState(0);

  useEffect(() => {
    getTotalCartValue(cart);
  }, [cart]);

  const getTotalCartValue = item => {
    if (item) {
      let total = 0;
      item?.map(el => {
        total = total + el?.price;
      });
      setTotalCartValue(total);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Text>Total Cart Value : {totalCartValue.toPrecision(4)}</Text>
      <FlatList
        style={styles.listing}
        data={cart}
        renderItem={(item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                dispatch(DeleteFromCartRedux(item));
              }}
              style={[
                styles.container,
                {
                  backgroundColor: 'lightgrey',
                  paddingVertical: 10,
                  alignItems: 'flex-start',
                },
              ]}>
              <Text style={styles.listingItems}>
                {' '}
                Title : {item?.item?.brand}
              </Text>
              <Text style={styles.listingItems}>
                {' '}
                category : {item?.item?.category}
              </Text>
              <Text style={styles.listingItems}>
                {' '}
                price : {item?.item?.price}
              </Text>
              <Text style={styles.listingItems}>
                {' '}
                quantity : {item?.item?.quantity}
              </Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={el => el?.id}
      />
      <Button
        title="Move to Home"
        onPress={() =>
          Navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
          })
        }
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  listing: {
    flex: 1,
    width: '99%',
  },
  listingItems: {
    fontSize: 15,
    marginVertical: 7,
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
});
