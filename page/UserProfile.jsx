import Layout from './../layout/Layout';
import React from 'react';
import UserProfile from '../components/UserProfile';
import { StyleSheet, View } from 'react-native';

const UserProfile = (props) => {
    return (
        <Layout {...props}>
            <View style={styles.container}>
                <UserProfile {...props} />
            </View>
        </Layout>
    );
};

export default UserProfile;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
});
