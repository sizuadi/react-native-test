import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

export default function Index() {
	const [enteredGoalText, setEnteredGoalText] = useState('');
	const [courseGoals, setCourseGoals] = useState<string[]>([]);

	function goalInputHandler(enteredText: string) {
		setEnteredGoalText(enteredText);
	}

	function addGoalHandler() {
		setCourseGoals((currentCourseGoals) => [...currentCourseGoals, enteredGoalText]);
	}
	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder='Your course goal!'
					onChangeText={goalInputHandler}
				/>
				<Button title='Add Goal' onPress={addGoalHandler} />
			</View>
			<View style={styles.listInputContainer}>
				<ScrollView>
					{courseGoals.map((goal, index) => (
						<View style={styles.goalItem} key={index}>
							<Text style={styles.goalText}>{goal}</Text>
						</View>
					))}
				</ScrollView>
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
	goalItem: {
		padding: 16,
		marginBottom: 12,
		backgroundColor: '#004e70',
		borderRadius: 8,
	},
	goalText: {
		color: '#ededed',
	},
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		flex: 1,
		alignItems: 'center',
		marginBottom: 24,
		borderBottomWidth: 2,
		borderBottomColor: '#cccccc',
	},
	listInputContainer: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		flex: 5,
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '70%',
		marginRight: 8,
		borderRadius: 8,
	},
});
