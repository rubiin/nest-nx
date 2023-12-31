import { ColorScheme, ColorSchemeProvider, Global, MantineProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

import { ArticlesCardsGrid } from "../components/BlogList";
import { EmailBanner } from "../components/Hero";
import { NestifyThemes } from "../mantine";
import AppContainer from "./AppShell";

function App() {
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: "mantine-color-scheme",
		defaultValue: "light",
		getInitialValueInEffect: true,
	});

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

	return (
		<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
			<MantineProvider
				theme={{ ...NestifyThemes.Green, colorScheme: colorScheme }}
				withNormalizeCSS
				withGlobalStyles
			>
				<Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />
				<AppContainer
					children={
						<>
							<EmailBanner />
							<ArticlesCardsGrid />
						</>
					}
				></AppContainer>
			</MantineProvider>
		</ColorSchemeProvider>
	);
}

export default App;
