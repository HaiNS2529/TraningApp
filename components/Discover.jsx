import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Image} from 'react-native-elements';

const CARDS = [
  {
    id: 1,
    image: require('./../asset/image/bannerVT.jpg'),
    title: 'Free 500MB data với 100 điểm viettel Free 500MB data với 100 điểm viettel Free 500MB data với 100 điểm viettel',
  },
  {
    id: 2,
    image: require('./../asset/image/bannerVT.jpg'),
    title: 'Bom tẫn viễn thông',
  },
  {
    id: 3,
    image: require('./../asset/image/bannerVT.jpg'),
    title: 'Quét mã QR',
  },
  {
    id: 4,
    image: require('./../asset/image/bannerVT.jpg'),
    title: 'Nạp thẻ điện thoại',
  },
];
const Discover = props => {
  return (
    <View>
      <Text style={styles.header}>Khám phá Viettel Money</Text>
      <View style={styles.container}>
        {CARDS.map(card => {
          return (
            <View key={card.id} style={styles.col}>
              <View style={styles.card}>
                <Image source={card.image} style={styles.image} />
                <Text style={styles.title} numberOfLines={2}>{card.title}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};
export default Discover;

const styles = StyleSheet.create({
  header: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 20,
    marginHorizontal: -10,
  },
  col: {
    maxWidth: '50%',
    height: 250,
    padding: 10,
    flexBasis: '50%',
  },
  card: {
    height: "100%",
    gap: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#171717',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 10,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'center',
    flexShrink: 0,
    borderRadius: 15,
  },
  title: {
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: 5,
    fontWeight: '600',
  },
});
