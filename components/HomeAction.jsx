import React from 'react';
import {View, StyleSheet} from 'react-native';
import DefaultSvg from './../asset/svg/DefaultSvg';
import {Text} from 'react-native-elements';

const ACTIONS = [
  {
    id: 1,
    icon: DefaultSvg,
    title: 'Chuyển tiền',
    description: 'Miễn phí và an toàn',
  },
  {
    id: 2,
    icon: DefaultSvg,
    title: 'Mua bán',
    description: 'Quét mã QR',
  },
];
const HomeAction = props => {
  return (
    <View style={styles.container}>
      {ACTIONS.map(action => {
        return (
          <View key={action.id} style={styles.wrapCard}>
            <action.icon />
            <Text style={styles.title}>{action.title}</Text>
            <Text style={styles.description}>{action.description}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default HomeAction;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
  wrapCard: {
    backgroundColor: '#d8e8f9',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    gap: 5,
  },
  title:{
    fontSize: 18,
    fontWeight: '700',
  },
  description: {
    fontSize: 16,
  }
});
