import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <Link href="/about">A propos</Link>
      <Link href={{
          pathname: '/pokemon/[id]',
          params: { id: 3 }
        }}>Pokemon 3</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FF0000',
    padding: 24,
  }
})