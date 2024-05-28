import { View, Text } from "react-native";
import { styles } from "../Style/styles";

export default function CarrinhoLondres() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text> Faça sua reserva!</Text>
        <View style={styles.body}></View>
      </View>
    </View>
  );
}
