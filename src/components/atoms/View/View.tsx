// stores
import useThemeStore from '@/stores/useThemeStore';

// global components
import { View as ReactView } from 'react-native';

// styles
import Styles from './View.style';

interface Props {
	children: React.ReactNode;
}

const View: React.FC<Props> = ({ children }) => {
	const { theme } = useThemeStore();

	return <ReactView style={[Styles.container, theme === 'light' ? Styles.containerLight : Styles.containerDark]}>{children}</ReactView>;
};

export default View;
