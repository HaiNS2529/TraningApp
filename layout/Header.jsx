import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
const AvatarUser = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
    <View style={styles.WrapUser}>
      <Image
        source={require('./../asset/image/user.png')}
        style={styles.avatar}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5,
        }}>
        <Text style={{fontSize: 16, fontWeight: 800}}>Đăng nhập/ Đăng ký</Text>
        <Image
          source={require('./../asset/image/arrow-right.png')}
          style={{width: 20, height: 10}}
        />
      </View>
    </View>
    </TouchableOpacity>
  );
};

const DepositButton = () => {
  return (
    <View style={styles.WrapDeposit}>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
          width: 45,
          height: 45,
        }}>
        <Image
          source={require('./../asset/image/plus.png')}
          style={styles.iconPlus}
        />
      </View>
      <Text style={{fontSize: 16}}>Nạp tiền</Text>
    </View>
  );
};
const Header = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <AvatarUser  navigation={navigation}/>
      <DepositButton />
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#cf1a1aa1',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  WrapUser: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconPlus: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  WrapDeposit: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
