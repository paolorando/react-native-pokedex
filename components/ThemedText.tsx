import { StyleSheet, Text } from "react-native"

type Props = {
    variant?: keyof typeof styles,
    color?: string,
    children: React.ReactNode;
}

export function ThemedText ({variant, color, children, ...rest}: Props) {
    return <Text style={styles[variant ?? 'body3']} {...rest}>
            {children}
        </Text>;
}

const styles = StyleSheet.create({
    body3: {
        fontSize: 10,
        lineHeight: 16
    },
    headline: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: "bold",
    },
    caption: {
        fontSize: 8,
        lineHeight: 12
    },
    subtitle1: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: "bold",
    },
    subtitle2: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "bold",
    },
    subtitle3: {
        fontSize: 10,
        lineHeight: 16,
        fontWeight: "bold",
    },
});