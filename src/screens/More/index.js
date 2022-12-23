import React from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import ProfileRow from "../../components/ProfileRow";
import { useSelector } from "react-redux";
import { logout } from "../../redux/actions";
import styles from "./style";
import BigButton from "../../components/BigButton";
import { strings } from "../../localization";
import ChangeLanguage from "../../components/ChangeLanguage";

function More() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  let logOut = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <View style={styles.rows}>
        <ProfileRow rowName={strings.More.id} rowValue={String(user.ID)} />
        <ProfileRow rowName={strings.More.email} rowValue={user.email} />
        <ProfileRow rowName={strings.More.phone} rowValue={user.phone} />
        <ProfileRow
          rowName={strings.More.date}
          rowValue={String(user.dateOfBirth).substring(0, 10)}
        />
      </View>
      <View style={styles.button}>
        <ChangeLanguage />
        <BigButton onPress={logOut} text={strings.More.logout} />
      </View>
    </View>
  );
}

export default More;
