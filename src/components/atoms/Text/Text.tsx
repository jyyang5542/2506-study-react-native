// stores
import useThemeStore from '@/stores/useThemeStore';

// global components
import { Text as ReactText } from 'react-native';

// styles
import Styles from './Text.style';

interface Props {
	children: string | React.ReactNode;
}

const Text: React.FC<Props> = ({ children }) => {
	const { theme } = useThemeStore();

	return <ReactText style={[Styles.text, theme === 'light' ? Styles.textLight : Styles.textDark]}>{children}</ReactText>;
};

export default Text;
