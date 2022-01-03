import { extendTheme, ThemeProviderProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const customTheme = extendTheme({
    styles: {
        global: (props: ThemeProviderProps) => ({
            body: {
                bg: mode('#A8D0E6', '#A8D0E6')(props),
            }
        })
    },
})