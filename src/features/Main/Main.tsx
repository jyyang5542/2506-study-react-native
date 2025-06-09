// stores
import useThemeStore from '@/stores/useThemeStore';

// global components
import { Text, View } from '@/components/atoms';
import { StatusBar } from 'expo-status-bar';
import { Pressable } from 'react-native';

// styles
import Styles from './Main.style';

interface Props {}

const Main: React.FC<Props> = () => {
	const { theme, setTheme } = useThemeStore();

	return (
		<View>
			<Pressable style={Styles.toggleThemeBtn} onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
				<Text>Current Theme: {theme}</Text>
			</Pressable>
			<Text>Sample Text</Text>
			<StatusBar style='auto' />
		</View>
	);
};

export default Main;
