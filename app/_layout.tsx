import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const Layout: React.FC = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Slot />
			<StatusBar style='auto' />
		</SafeAreaView>
	);
};

export default Layout;
