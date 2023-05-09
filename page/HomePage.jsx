import Layout from './../layout/Layout';
import React from 'react';
import HomeAction from './../components/HomeAction';
import Service from './../components/Service';
import Discover from './../components/Discover';
import {StyleSheet, View} from 'react-native';

const HomePage = (props) => {
  return (
    <Layout {...props}>
      <View style={styles.container}>
        <HomeAction />
        <Service />
        <Discover/>
      </View>
    </Layout>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
