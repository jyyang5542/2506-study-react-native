import { Colors } from '@/styles/Base.style';
import type { tTheme } from '@/types';
import styled from 'styled-components/native';

export const View = styled.View<{ theme?: tTheme }>`
	flex: 1;

	${({ theme = 'light' }) => {
		return `
				background-color: ${theme === 'dark' ? Colors.black : Colors.white};
			`;
	}}
`;
