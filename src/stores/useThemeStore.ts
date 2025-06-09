import { create } from 'zustand';
import type { tTheme } from '@/types';

interface ThemeStore {
	theme: tTheme;
	setTheme: (theme: tTheme) => void;
}

const useThemeStore = create<ThemeStore>(set => ({
	theme: 'light',
	setTheme: theme => set({ theme })
}));

export default useThemeStore;
