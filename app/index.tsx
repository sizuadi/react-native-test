import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function Index() {
	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput style={styles.textInput} placeholder='Your course goal!' />
				<Button title='Add Goal' />
			</View>
			<View>
				<Text style={styles.dummyText}>Hello World!!!</Text>
			</View>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 30,
	},
	dummyText: {
		margin: 16,
		padding: 16,
		borderWidth: 2,
		borderColor: 'red',
		borderRadius: 8,
	},
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '70%',
		marginRight: 8,
	},
});
