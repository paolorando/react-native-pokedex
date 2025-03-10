import { useThemeColors } from "@/hooks/useThemeColors";
import { useState } from "react";
import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { Card } from "./Card";
import { Row } from "./Row";

type Props = {
    value: "id" | "name",
    onChange: (v: "id" | "name") => void
}

const options = [
    {label: "Number", value: "id" },
    {label: "Name", value: "name" }
]

export function SortButton({ value, onChange }: Props) {
    const colors = useThemeColors();
    const [isModalVisible, setModalVisible] = useState(false);
    const onButtonPress = () => {
        setModalVisible(true);
    }
    const onClose = () => {
        setModalVisible(false);
    }
    return (
        <>
            <Pressable onPress={onButtonPress}>
                <View style={[styles.button, { backgroundColor: colors.grayWhite }]}>
                    <Image
                        source={
                            value == "id"
                                ? require("@/assets/images/number.png")
                                : require("@/assets/images/alpha.png")
                        }
                    />
                </View>
            </Pressable>
             <Modal transparent visible={isModalVisible} onRequestClose={onClose}>
                <Pressable style={styles.backdrop} onPress={onClose} />
                <View style={[styles.popup, { backgroundColor: colors.tint }]}>
                    <ThemedText
                        style={styles.title}
                        variant="subtitle2"
                        color={colors.grayWhite}
                    >
                        Sort by:
                    </ThemedText>
                    <Card style={styles.card}>
                        {options.map((o) => (
                            <Row key={o.value}>
                                <View />
                                <ThemedText>{o.label}</ThemedText>
                            </Row>
                        ))}
                    </Card>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 32,
        height: 32,
        borderRadius: 32,
        flex: 0,
        alignItems: "center",
        justifyContent: "center",
    },
    backdrop: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
    popup: {
        padding: 4,
        paddingTop: 16,
        gap: 16,
        borderRadius: 12,
    },
    title: {
        paddingLeft: 20,
    },
    card: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        gap: 16,
    }
});