// stores
import useThemeStore from '@/stores/useThemeStore';

// types
import type { tChildren } from '@/types';

// styles
import { Text as Atom } from './Text.style';

interface Props {
	children?: tChildren;
}

const Text: React.FC<Props> = ({ children }) => {
	const { theme } = useThemeStore();

	return <Atom theme={theme}>{children}</Atom>;
};

export default Text;
