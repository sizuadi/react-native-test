import { StyleSheet, Text, View } from 'react-native';

export const GoalItem = ({ item }: { item: string }) => {
	return (
		<View style={styles.goalItem}>
			<Text style={styles.goalText}>{item}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	goalItem: {
		padding: 16,
		marginBottom: 12,
		backgroundColor: '#004e70',
		borderRadius: 8,
	},
	goalText: {
		color: '#ededed',
	},
});
