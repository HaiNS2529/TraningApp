import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import Layout from '../layout/Layout';
import { Formik } from 'formik';
import * as yup from 'yup';
import CheckBox from '@react-native-community/checkbox';
import { RadioGroup } from 'react-native-radio-buttons-group';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import provincesApi from 'api/provincesApi';

const GENDERS = [
    { id: 0, label: "Nữ", value: "Nữ", labelStyle: { color: 'black' } },
    { id: 1, label: "Nam", value: "Nam", labelStyle: { color: 'black' } }
]
const initialValues = {
    name: '',
    phone: null,
    DOB: new Date(1990, 1, 1),
    province: '',
    district: '',
    ward: '',
    lane: '',
    gender: 0,
    checkbox: false,
}
const validationSchema = yup.object({
    name: yup.string().required("Tên không được bỏ trống"),
    phone: yup.number().required("Số điện thoại không được bỏ trống"),
    DOB: yup.date().required("Ngày sinh không được bỏ trống"),
    province: '',
    district: '',
    ward: '',
    lane: '',
    gender: yup.number().required("Giới tính không được bỏ trống").integer(""),
    checkbox: '',
})

const InputForm = ({ id = "name", label = "họ và tên", type = 'default', errors, ...fieldProps }) => {
    const { onChange, onBlur, value } = fieldProps;
    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                id={id}
                value={value}
                onChangeText={onChange(id)}
                onBlur={onBlur(id)}
                keyboardType={type}
                placeholder={`Nhập ${label}`}
                placeholderTextColor={"black"}
                style={styles.input}
            />
            {errors[id] ? <Text style={styles.msgError}>{errors[id]}</Text> : null}
        </>
    )
}

const CheckboxForm = ({ id = "checkbox", label = "Checkbox", errors, ...fieldProps }) => {
    const { setFieldValue, value } = fieldProps;
    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <CheckBox
                id='gender'
                disabled={false}
                value={value}
                onValueChange={value => setFieldValue(id, value)}
            />
            {errors[id] ? <Text style={styles.msgError}>{errors[id]}</Text> : null}
        </>
    )
}

const RadioForm = ({ id = "gender", label = "radio", radioButtons, errors, ...fieldProps }) => {
    const { setFieldValue, value } = fieldProps;
    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <RadioGroup radioButtons={radioButtons} onPress={(v) => setFieldValue(id, v)} selectedId={value} layout='row' containerStyle={styles.radio} />
            {errors[id] ? <Text style={styles.msgError}>{errors[id]}</Text> : null}
        </>
    )
}
const UserProfile = (props) => {
    const [showDatePicker, setShowDatePicker] = useState(false)
    const handleSubmit = (values) => {
        console.log(values);
    }

    useEffect(() =>{
        getProvinces();
    },[]);

    const getProvinces = async () =>{
        const provinces = await provincesApi.getProvinces();
        console.log(provinces);
    }
    return (
        <Layout>
            <View style={styles.container}>
                <Text style={styles.title}>Thông tin cá nhân</Text>

                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    // validationSchema={validationSchema}
                >
                    {({ handleSubmit, setFieldValue, values, errors, getFieldProps }) => (
                        <View>
                            <View>
                                <InputForm id="name" label="họ và tên" type="default" errors={errors} {...getFieldProps("name")} />
                                <InputForm id="phone" label="số điện thoại" type="phone-pad" errors={errors} {...getFieldProps("phones")} />
                                <CheckboxForm id="checkbox" label="checkbox" errors={errors} {...getFieldProps("checkbox")} setFieldValue={setFieldValue} />
                                <RadioForm id='gender' label='giới tính' radioButtons={GENDERS} errors={errors} {...getFieldProps("gender")} setFieldValue={setFieldValue} />
                                <Text onPress={() => setShowDatePicker(true)} style={{ color: 'red' }}>{values.DOB.toLocaleDateString()}</Text>
                                {!!showDatePicker ?
                                    <DateTimePicker
                                        mode='date'
                                        display='calendar'
                                        value={values.DOB}
                                        onChange={(e, date) => { setFieldValue("DOB", date), setShowDatePicker(false) }}
                                        maximumDate={new Date()}
                                    /> : null}
                            </View>
                            <Button onPress={handleSubmit} title='Cập nhật' style={styles.btnSubmit} />
                        </View>
                    )}
                </Formik>

            </View>
        </Layout>
    )
}
export default UserProfile;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    title: {
        color: 'black',
        fontSize: 25,
    },
    input: {
        color: 'black',
    },
    label: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
        textTransform: 'capitalize',
    },
    msgError: {
        color: 'red'
    },
    radio: {
        color: 'black',
    }
})