import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { useThemeColors } from "@/hooks/useThemeColors";
import { View, ViewStyle } from "react-native";

type Props = {
    name: keyof (typeof Colors)["type"],
}

export function PokemonType({ name }: Props) {
    const colors = useThemeColors();
    return (
        <View style={[rootStyle, { backgroundColor: Colors.type[name] }]}>
            <ThemedText
                color={colors.grayWhite}
                variant="subtitle3"
                style={{ textTransform: "capitalize" }}
            >
                {name}
            </ThemedText>
        </View>
    );
}

const rootStyle = {
    flex: 0,
    height: 20,
    paddingHorizontal: 8,
    borderRadius: 8,
} satisfies ViewStyle;