import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Index() {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.dummyText}>Another piece of text!</Text>
			</View>
			<Text style={styles.dummyText}>Hello World!!!</Text>
			<Button title='Press me' />
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	dummyText: {
		margin: 16,
		padding: 16,
		borderWidth: 2,
		borderColor: 'red',
		borderRadius: 8,
	},
});
