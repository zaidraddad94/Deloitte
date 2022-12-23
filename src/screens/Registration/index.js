import React, { useState } from "react";
import { Image, View } from "react-native";
import { useDispatch } from "react-redux";

import BigButton from "../../components/BigButton";
import DatePickerComponent from "../../components/DatePickerComponent";
import InputWithIcons from "../../components/InputWithIcons";
import emailValidation from "../../utilities/emailValidation";
import phoneValidation from "../../utilities/phoneValidation";
import { login } from "../../redux/actions";
import styles from "./style";
import images from "../../config/images";

export default function Registration() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(__DEV__ ? "zaidrddad@gmail.com" : "");
  const [phone, setPhone] = useState(__DEV__ ? "0799795083" : "");
  const [dateOfBirth, setDateOfBirth] = useState(__DEV__ ? new Date("1994-04-17") : new Date());
  const [showErrors, setShowErrors] = useState(false);

  let makeAccount = () => {
    if (emailValidation(email) || phoneValidation(phone)) {
      setShowErrors(true);
      return;
    }
    dispatch(
      login({
        email,
        phone,
        dateOfBirth,
        ID: new Date(),
      })
    );
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={images.deloitteNameLogo} />
      <InputWithIcons
        icon1={"person"}
        icon2={null}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        secureTextEntry={false}
        error={showErrors && emailValidation(email)}
        keyboardType={"email-address"}
      />
      <InputWithIcons
        icon1={"call"}
        icon2={null}
        value={phone}
        onChangeText={setPhone}
        placeholder="Phone (07XXXXXXXX)"
        secureTextEntry={false}
        error={showErrors && phoneValidation(phone)}
        keyboardType={"phone-pad"}
      />
      <DatePickerComponent
        date={dateOfBirth}
        onDateChange={setDateOfBirth}
        title={"Date of Birth"}
      />
      <BigButton onPress={makeAccount} text={"Create My Account"} />
    </View>
  );
}
