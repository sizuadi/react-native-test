import { CourseGoal } from '@/types';
import { Pressable, PressableAndroidRippleConfig, StyleSheet, Text, View } from 'react-native';

interface GoalItemComponentProps {
	courseGoal: CourseGoal;
	onDeleteGoal: (goalId: string) => void;
}
export const GoalItem: React.FC<GoalItemComponentProps> = ({ courseGoal, onDeleteGoal }) => {
	return (
		<View style={styles.goalItem}>
			<Pressable
				onPress={() => onDeleteGoal(courseGoal.id)}
				android_ripple={rippleConfig}
				style={({ pressed }) => [pressed && styles.pressedItem]}
			>
				<Text style={styles.goalText}>{courseGoal.text}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	goalItem: {
		marginBottom: 8,
		backgroundColor: '#004e70',
		borderRadius: 8,
	},
	goalText: {
		color: '#ededed',
		padding: 16,
		borderRadius: 8,
	},
	pressedItem: {
		backgroundColor: '#012535',
		borderRadius: 8,
	},
});

const rippleConfig: PressableAndroidRippleConfig = {
	color: styles.pressedItem.backgroundColor,
};
