import React, {useState} from 'react';
import {Button, View, StyleSheet} from 'react-native';
import HomeSvg from '../asset/svg/HomeSvg';
import PromoSvg from '../asset/svg/PromoSvg';
import UserSvg from '../asset/svg/UserSvg';

const TAB = {
  HOME: 1,
  PROMO: 2,
  USER: 3,
};
const Footer = (props) => {
  const {navigation} = props;
  const [tabActive, setTabActive] = useState(0);
  return (
    <View style={styles.container}>
      <HomeSvg
        fill={tabActive == 1 ? 'red' : ''}
        onPress={() => {
          setTabActive(1);
          navigation.navigate('HomePage')
        }}
      />
      <PromoSvg
        fill={tabActive == 2 ? 'red' : ''}
        fillIcon={tabActive == 2 ? 'white' : '#693b3b'}
        onPress={() => {
          setTabActive(2);
        }}
      />
      <UserSvg
        fill={tabActive == 3 ? 'red' : ''}
        onPress={() => {
          setTabActive(3);
          navigation.navigate('UserProfile');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#171717',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 3,
  },
});
export default Footer;
