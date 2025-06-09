import { Colors } from '@/styles/Base.style';
import type { tTheme } from '@/types';
import styled from 'styled-components/native';

export const Text = styled.Text<{ theme?: tTheme }>`
	${({ theme = 'light' }) => {
		return `
				color: ${theme === 'dark' ? Colors.black : Colors.white};
			`;
	}}
`;
