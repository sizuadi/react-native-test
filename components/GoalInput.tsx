import React, { useState } from 'react';
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native';
import todolistImg from '../assets/images/todolist.png';
interface GoalInputComponentProps {
	isVisible: boolean;
	onAddGoal: (enteredGoalText: string) => void;
	setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GoalInput: React.FC<GoalInputComponentProps> = ({
	isVisible,
	onAddGoal,
	setIsModalVisible,
}) => {
	const [enteredGoalText, setEnteredGoalText] = useState('');

	function goalInputHandler(enteredText: string) {
		setEnteredGoalText(enteredText);
	}

	function addGoalHandler() {
		onAddGoal(enteredGoalText);
		setEnteredGoalText('');
	}
	return (
		<Modal visible={isVisible} animationType='slide'>
			<View style={styles.inputContainer}>
				<Image source={todolistImg} style={styles.goalImg} />
				<TextInput
					style={styles.textInput}
					placeholder='Your course goal!'
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title='Add Goal' onPress={addGoalHandler} />
					</View>
					<View style={styles.button}>
						<Button
							title='Cancel'
							color={'red'}
							onPress={() => setIsModalVisible(false)}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '70%',
		marginRight: 8,
		borderRadius: 8,
	},
	inputContainer: {
		justifyContent: 'center',
		flex: 1,
		alignItems: 'center',
	},
	buttonContainer: {
		marginTop: 16,
		flexDirection: 'row',
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
	goalImg: {
		width: 100,
		height: 100,
	},
});
