import { View, ViewStyle } from "react-native"
import { Card } from "@/components/Card"
import { ThemedText } from "../ThemedText"

type Props = {
    style?: ViewStyle,
    id: number,
    name: string
}

export function PokemonCard ({style, id, name}: Props) {
    return <Card style={style}>
        <ThemedText variant="caption" color="grayMedium">#{id.toString().padStart(3, '0')}</ThemedText>
    </Card>
}