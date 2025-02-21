import { Shadows } from "@/constants/Shadows";
import { View, ViewProps, ViewStyle } from "react-native";

type Props = ViewProps;

export function Card ({style, ...rest}: Props) {
    return <View style={[style, styles]} {...rest}></View>;
}

const styles = {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    overflow: 'hidden',
    ...Shadows.dp2
} satisfies ViewStyle