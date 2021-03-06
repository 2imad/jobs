import React from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";

const CustomIcon = ({ large, name, type, color, raised, size }) => {
  return (
    <View>
      <Icon
        large={large}
        name={name}
        type={type}
        color={color}
        raised={raised}
        size={size}
      />
    </View>
  );
};

export default CustomIcon;
