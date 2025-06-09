// stores
import useThemeStore from '@/stores/useThemeStore';

// global components
import Text from '@/components/atoms/Text/Text';
import View from '@/components/atoms/View/View';

// styles
import { ToggleThemeBtn } from './Main.style';

interface Props {}

const Main: React.FC<Props> = () => {
	const { theme, setTheme } = useThemeStore();

	return (
		<View>
			<ToggleThemeBtn onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
				<Text>Current Theme: {theme}</Text>
			</ToggleThemeBtn>
			<Text>Sample Text</Text>
		</View>
	);
};

export default Main;
