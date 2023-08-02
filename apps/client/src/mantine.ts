import { MantineTheme, MantineThemeOverride, Tuple } from "@mantine/core";


type ColorPaletteKey = 'Blue' | 'Purple' | 'Magenta' | 'Red' | 'Orange' | 'Yellow' | 'Green';

type ColorPalette = Record<ColorPaletteKey,Record<string, Tuple<string, 10>>>;

export const nestifyColors: ColorPalette = {
  Blue: {
      colors: [
          "#E7F5FF",
          "#D0EBFF",
          "#A5D8FF",
          "#74C0FC",
          "#4DABF7",
          "#339AF0",
          "#228BE6",
          "#1C7ED6",
          "#1971C2",
          "#1864AB",
      ],
  },
  Purple: {
      colors: [
          "#F3F0FF",
          "#E5DBFF",
          "#D0BFFF",
          "#B197FC",
          "#9775FA",
          "#845EF7",
          "#7950F2",
          "#7048E8",
          "#6741D9",
          "#5F3DC4",
      ],
  },
  Magenta: {
      colors: [
          "#FFF0F6",
          "#FFDEEB",
          "#FCC2D7",
          "#FAA2C1",
          "#F783AC",
          "#F06595",
          "#E64980",
          "#D6336C",
          "#C2255C",
          "#A61E4D",
      ],
  },
  Red: {
      colors: [
          "#FFF5F5",
          "#FFE3E3",
          "#FFC9C9",
          "#FFA8A8",
          "#FF8787",
          "#FF6B6B",
          "#FA5252",
          "#F03E3E",
          "#E03131",
          "#C92A2A",
      ],
  },
  Orange: {
      colors: [
          "#FFF4E6",
          "#FFE8CC",
          "#FFD8A8",
          "#FFC078",
          "#FFA94D",
          "#FF922B",
          "#FD7E14",
          "#F76707",
          "#E8590C",
          "#D9480F",
      ],
  },
  Yellow: {
      colors: [
          "#FFF9DB",
          "#FFF3BF",
          "#FFEC99",
          "#FFE066",
          "#FFD43B",
          "#FCC419",
          "#FAB005",
          "#F59F00",
          "#F08C00",
          "#E67700",
      ],
  },
  Green: {
      colors: [
          "#EBFBEE",
          "#D3F9D8",
          "#B2F2BB",
          "#8CE99A",
          "#69DB7C",
          "#51CF66",
          "#40C057",
          "#37B24D",
          "#2F9E44",
          "#2B8A3E",
      ],
  },
}

export let NestifyThemes: Record<keyof typeof nestifyColors, MantineThemeOverride> = {
  Blue: undefined,
  Purple: undefined,
  Magenta: undefined,
  Red: undefined,
  Orange: undefined,
  Yellow: undefined,
  Green: undefined
}

for (const key of Object.keys(nestifyColors)) {
  const themeName = key as keyof typeof nestifyColors;

  NestifyThemes[themeName] = {
    globalStyles: (theme: MantineTheme) => ({
      body: {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
      },
    }),
    colors: {
      brand: nestifyColors[themeName].colors,
    },
    primaryColor: "brand",
  };
}
