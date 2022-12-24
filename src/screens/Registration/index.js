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
import { strings } from "../../localization";
import ChangeLanguage from "../../components/ChangeLanguage";

export default function Registration() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(__DEV__ ? "zaidrddad@gmail.com" : "");
  const [phone, setPhone] = useState(__DEV__ ? "0799795083" : "");
  const [dateOfBirth, setDateOfBirth] = useState(
    __DEV__ ? new Date("1994-04-17") : new Date()
  );
  const [showErrors, setShowErrors] = useState(false);

  const createMyAccount = () => {
    if (emailValidation(email) || phoneValidation(phone)) {
      setShowErrors(true);
      return;
    }
    dispatch(
      login({
        email,
        phone,
        dateOfBirth,
        ID: new Date().getTime(),
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
        onChangeText={(email) => setEmail(email.trim())}
        placeholder={strings.Registration.email}
        secureTextEntry={false}
        error={showErrors && emailValidation(email)}
        keyboardType={"email-address"}
      />
      <InputWithIcons
        icon1={"call"}
        icon2={null}
        value={phone}
        onChangeText={setPhone}
        placeholder={strings.Registration.phone}
        secureTextEntry={false}
        error={showErrors && phoneValidation(phone)}
        keyboardType={"phone-pad"}
      />
      <DatePickerComponent
        date={dateOfBirth}
        onDateChange={setDateOfBirth}
        title={strings.Registration.date}
      />
      <ChangeLanguage />
      <BigButton
        onPress={createMyAccount}
        text={strings.Registration.createMyAccount}
      />
    </View>
  );
}
