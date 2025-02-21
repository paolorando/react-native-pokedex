import { Card } from "@/components/Card";
import { PokemonCard } from "@/components/pokemon/PokemonCard";
import { ThemedText } from "@/components/ThemedText";
import { useFetchQuery } from "@/hooks/useFetchQuery";
import { useThemeColors } from "@/hooks/useThemeColors";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const colors = useThemeColors();
  const {data} = useFetchQuery('/pokemon/?limit=21');
  const pokemons = data.results ?? [];
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.tint}]}>
      <View style={styles.header}>
        <Image source={require('@/assets/images/pokeball.png')} />
        <ThemedText variant="headline" color={colors.grayDark}>Pokédex</ThemedText>
      </View>
      <Card style={styles.body}>
        <FlatList
          data={pokemons}
          numColumns={3}
          contentContainerStyle={[styles.gridGap, styles.list]}
          columnWrapperStyle={styles.gridGap}
          renderItem={({item}) => <PokemonCard
            id={item.id}
            name={item.name}
            style={{flex: 1/3}}
          />}
          keyExtractor={(item) => item.id.toString()}
        />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 12
  },
  body: {
    flex: 1,
  },
  gridGap: {
    gap: 8
  },
  list: {
    padding: 12,
  }
})