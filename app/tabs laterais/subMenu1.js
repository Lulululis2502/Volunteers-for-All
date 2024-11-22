import { View, Text, StyleSheet } from "react-native";

export default function SubMenu1() {
    return (
        <View style={styles.container}>
            <Text>SubMenu1</Text>
            <Text>Texto 1 ...</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});