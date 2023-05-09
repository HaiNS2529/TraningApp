import React from 'react';
import {View, Image, Text, StyleSheet, FlatList} from 'react-native';

const SERVICES = [
  {
    id: 1,
    image: require('./../asset/image/user.png'),
    title: 'Dịch vụ Viettel',
  },
  {
    id: 2,
    image: require('./../asset/image/user.png'),
    title: 'Nạp điện thoại',
  },
  {
    id: 3,
    image: require('./../asset/image/user.png'),
    title: 'Đặt vé xổ số Mobilot',
  },
  {
    id: 4,
    image: require('./../asset/image/user.png'),
    title: 'Tiền điện',
  },
  {
    id: 5,
    image: require('./../asset/image/user.png'),
    title: 'Tiền nước',
  },
  {
    id: 6,
    image: require('./../asset/image/user.png'),
    title: 'Xem tất cả',
  },
];
// const Item = ({title, pos}) => {
//   console.log(title,pos);
//   return <Text style={{color: 'red'}}>{title}</Text>;
// };
const Service = props => {
  return (
    <View style={styles.container}>
      {/* <FlatList
        data={SERVICES}
        renderItem={({item,index}) => <Item title={item.title} pos={index} />}
        keyExtractor={item => item.id}
      /> */}
      {SERVICES.map(service => {
        return (
          <View key={service.id} style={styles.card}>
            <Image source={service.image} style={styles.image} />
            <Text style={styles.title}>{service.title}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Service;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 20,
    columnGap: 10,
    marginHorizontal: -10,
    marginTop: 50,
    marginBottom: 50,
  },
  card: {
    maxWidth: 100 / 3 + '%',
    flexBasis: 100 / 3 + '%',
    padding: 5,
    display: 'flex',
    alignItems: 'center',
    gap: 3,
  },
  image: {
    width: 50,
    height: 50,
    flexShrink: 1,
  },
  title: {
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
});
