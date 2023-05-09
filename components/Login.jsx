import React, { useState } from 'react';
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

const initValues = {
  phone: '',
  password: '',
}
const Login = ({ navigation }) => {
  const [formState, setFormState] = useState(initValues);
  const [formErrors, setFormErrors] = useState(initValues);

  const handleChange = (field) => (value) => {
    setFormState((prev) => {
      return ({
        ...prev,
        [field]: value,
      })
    })
  }

  const handleSubmit = () => {
    const { phone, password } = formState;
    if (!checkPhone(phone) || !checkPassword(password)) {
      return;
    }
    navigation.navigate("HomePage")
  }

  const checkPhone = (phone) => {
    if (!phone) {
      setFormErrors(prev => ({
        ...prev,
        phone: 'Số điện thoại không được để trống',
      }));
      return false;
    }
    setFormErrors(prev => ({
      ...prev,
      phone: '',
    }))
    return true;
  }

  const checkPassword = (password) => {
    if (!password) {
      setFormErrors(prev => ({
        ...prev,
        password: 'Mật khẩu không được để trống',
      }));
      return false;
    }
    if (password.length < 6) {
      setFormErrors(prev => ({
        ...prev,
        password: 'Mật khẩu lớn hơn 6 ký tự',
      }));
      return false;
    }
    setFormErrors(prev => ({
      ...prev,
      password: '',
    }))
    return true;
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./../asset/image/background-app.jpg")} style={styles.background} resizeMode='cover' >
        <View style={styles.wrapForm}>
          <View style={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}>
            <View>
              <Text style={styles.label}>Số điện thoại</Text>
              <TextInput
                value={formState.phone}
                onChangeText={handleChange('phone')}
                keyboardType='phone-pad'
                inputMode='numeric'
                style={styles.input}
                placeholder="0123456789"
                placeholderTextColor="#81878c"
              />
              {formErrors?.phone ? <Text style={styles.mesErrors}>{formErrors?.phone}</Text> : null}

              <Text style={styles.label}>Mật khẩu</Text>
              <TextInput
                value={formState.password}
                onChangeText={handleChange('password')}
                inputMode='text'
                style={styles.input}
                secureTextEntry={true}
                placeholder="password"
                placeholderTextColor="#81878c"
              />
              {formErrors?.password ? <Text style={styles.mesErrors}>{formErrors?.password}</Text> : null}
            </View>
            <Button onPress={handleSubmit} title="Submit" style={styles.btnSubmit} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  wrapForm: {
    width: 300,
    height: 300,
    maxWidth: "80%",
    maxHeight: "80%",
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 10,
    shadowColor: '#171717',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 20,
  },
  input: {
    color: 'black',
    borderWidth: 1,
    borderColor: '#772121',
    borderRadius: 5,
    marginVertical: 10,
  },
  label: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  mesErrors: {
    color: 'red',
  },
  btnSubmit: {
    paddingVertical: 20,
  }
})
