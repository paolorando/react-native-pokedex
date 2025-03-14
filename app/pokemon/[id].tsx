import { Card } from "@/components/Card";
import { PokemonType } from "@/components/pokemon/PokemonType";
import { RootView } from "@/components/RootView";
import { Row } from "@/components/Row";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { getPokemonArtwork } from "@/functions/pokemon";
import { useFetchQuery } from "@/hooks/useFetchQuery";
import { useThemeColors } from "@/hooks/useThemeColors";
import { router, useLocalSearchParams } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Pokemon() {
    const colors = useThemeColors();
    const params = useLocalSearchParams() as { id: string };
    const { data: pokemon } = useFetchQuery("/pokemon/[id]", { id: params.id });
    const mainType = pokemon?.types?.[0].type.name;
    const colorType = mainType ? Colors.type[mainType] : colors.tint;
    const types = pokemon?.types ?? [];
    return (
        <RootView style={{ backgroundColor: colorType }}>
            <View>
                <Image
                    style={styles.pokeball}
                    source={require("@/assets/images/pokeball_big.png")}
                    width={208}
                    height={208}
                />
                <Row style={styles.header}>
                    <Row gap={8}>
                        <Pressable onPress={router.back}>
                            <Image
                                source={require("@/assets/images/back.png")}
                                width={32}
                                height={32}
                            />
                        </Pressable>
                        
                        {/* Titre */}
                        <ThemedText
                            color={colors.grayWhite}
                            variant="headline"
                            style={{ textTransform: "capitalize" }}
                        >
                            { pokemon?.name }
                        </ThemedText>
                    </Row>
                    {/* Numéro */}
                    <ThemedText color={colors.grayWhite} variant="subtitle2">
                        #{ params.id.padStart(3, "0") }
                    </ThemedText>
                </Row>
                <View style={styles.body}>
                    <Image
                        style={styles.artwork}
                        source={{
                            uri: getPokemonArtwork(params.id)
                        }}
                        width={200}
                        height={200}
                    />
                    <Card style={styles.card}>
                        <Row gap={16}>
                            {types.map((type) => (
                                <PokemonType name={type.type.name} key={type.type.name} />
                            ))}
                        </Row>
                        {/* About */}
                        <ThemedText variant="subtitle1" color={ colorType }>
                            About
                        </ThemedText>
                        {/* Base stats */}
                        <ThemedText variant="subtitle1" color={ colorType }>
                            Base stats
                        </ThemedText>
                    </Card>
                </View>
                <Text>Pokemon { params.id }</Text>
            </View>
        </RootView>
    );
}

const styles = StyleSheet.create({
    header: {
        margin: 20,
        justifyContent: "space-between",
    },
    pokeball: {
        opacity: 0.1,
        position: "absolute",
        right: 8,
        top: 8,
        zIndex: -1,
    },
    artwork: {
        position: "absolute",
        top: -140,
        alignSelf: "center",
        zIndex: 2,
    },
    body: {
        marginTop: 144,
    },
    card: {
        paddingHorizontal: 20,
        paddingTop: 60,
        gap: 16,
        alignItems: "center",
    }
});