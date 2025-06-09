// types
import type { iCommon } from '@/types';

// global components
import { StatusBar } from 'expo-status-bar';
import { Text, View } from '@/components/atoms';

// styles
import Styles from './Template.style';

interface Props {}

const TSX_NAME: React.FC<iCommon & Props> = () => {
	return (
		<View>
			<Text>TEST</Text>
			<StatusBar style='auto' />
		</View>
	);
};

export default TSX_NAME;
