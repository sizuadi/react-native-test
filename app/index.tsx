import { GoalInput } from '@/components/GoalInput';
import { GoalItem } from '@/components/GoalItem';
import { CourseGoal } from '@/types';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList, Pressable, Text } from 'react-native';

export default function Index() {
	const [courseGoals, setCourseGoals] = useState<CourseGoal[]>([]);
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	function addGoalHandler(enteredGoalText: string) {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{ id: Math.random().toString(), text: enteredGoalText },
		]);
	}

	function deleteGoalHandler(goalId: string) {
		setCourseGoals((currentCourseGoals) => {
			return currentCourseGoals.filter((goal) => goal.id !== goalId);
		});
	}
	return (
		<>
			<View style={styles.appContainer}>
				<Pressable onPress={() => setIsModalVisible(true)}>
					<View style={styles.btnAddModal}>
						<Text style={styles.btnAddModalText}>Add New Goal</Text>
					</View>
				</Pressable>
				<GoalInput
					onAddGoal={addGoalHandler}
					isVisible={isModalVisible}
					setIsModalVisible={setIsModalVisible}
				/>
				<View style={styles.listInputContainer}>
					<FlatList
						data={courseGoals}
						renderItem={(itemData) => (
							<GoalItem courseGoal={itemData.item} onDeleteGoal={deleteGoalHandler} />
						)}
						keyExtractor={(item, index) => index.toString()}
						alwaysBounceVertical={false}
					/>
				</View>
				<StatusBar style='auto' />
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 30,
		paddingTop: 50,
	},
	listInputContainer: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		paddingTop: 16,
		flex: 5,
		marginTop: 24,
		borderTopWidth: 2,
		borderTopColor: '#cccccc',
	},
	btnAddModal: {
		backgroundColor: '#004e70',
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnAddModalText: {
		color: '#fff',
		padding: 16,
		textAlign: 'center',
	},
});
