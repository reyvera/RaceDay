import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'stretch'
	},
	main: {
		fontSize: 20,
		textAlign: 'center',
		color: colors.headerText,
		fontWeight: '400',
		fontStyle: 'italic',
	},
	map: {
		flex: 1
	},
	scrollView: {
		flex: 1
	},
});
