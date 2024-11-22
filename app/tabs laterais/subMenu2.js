import { View, Text, StyleSheet } from "react-native";

export default function SubMenu1() {
    return (
        <View style={styles.container}>
            <Text>SubMenu2</Text>
            <Text>Texto 2 ...</Text>
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