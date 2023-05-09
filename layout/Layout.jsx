import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
const Layout = ({ header = true, children, footer = true, ...props }) => {
  return (
    <SafeAreaView style={styles.container}>
      {header && <Header {...props} />}
      <ScrollView>
        {children}
      </ScrollView>
      {footer && <Footer {...props} />}
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})