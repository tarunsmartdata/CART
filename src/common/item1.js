import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {addToCartApi, AddToCartRedux} from '../redux/actions';
import {useDispatch} from 'react-redux';

const Item1 = ({data}) => {
  const dispatch = useDispatch();

  const addtoCart = item => {
    dispatch(AddToCartRedux(item));
    dispatch(addToCartApi(item?.id));
  };

  return (
    <FlatList
      style={styles.listing}
      data={data}
      renderItem={(item, index) => {
        return (
          <View
            style={[
              styles.container,
              {
                backgroundColor: 'lightblue',
                paddingVertical: 10,
                alignItems: 'flex-start',
              },
            ]}>
            {
              <Text style={styles.listingItems}>
                {' '}
                Title : {item?.item?.brand || 'PlaceHolder'}
              </Text>
            }
            <Text style={styles.listingItems}>
              {' '}
              Discription : {item?.item?.description}
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
              rating : {item?.item?.rating}
            </Text>

            <Button
              title="Add to Cart"
              onPress={() => {
                addtoCart(item?.item);
              }}
            />
          </View>
        );
      }}
      keyExtractor={el => el?.id}
    />
  );
};

export default Item1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  listing: {
    flex: 0.9,
    width: '99%',
    top: 10,
  },
  listingItems: {
    fontSize: 15,
    marginVertical: 7,
  },
});
