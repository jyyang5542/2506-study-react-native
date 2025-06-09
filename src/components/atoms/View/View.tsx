// stores
import useThemeStore from '@/stores/useThemeStore';

// types
import type { tChildren } from '@/types';

// styles
import { View as Atom } from './View.style';

interface Props {
	children?: tChildren;
}

const View: React.FC<Props> = ({ children }) => {
	const { theme } = useThemeStore();

	return <Atom theme={theme}>{children}</Atom>;
};

export default View;
