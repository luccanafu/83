import * as React from "react";
import {Text, View, StyleSheet} from "react-native"

export class CreatePost extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>perfil</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        alignContent: "center",
    },
    text: {
        alignItems: "center",
    }
})