import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import codePush from 'react-native-code-push';

function Index() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Teste Deploy (teste 2)</Text>
    </View>
  );
}

export default codePush({
    checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
})(Index);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
});
