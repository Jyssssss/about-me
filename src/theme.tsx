import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  breakpoints,
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#EEEEEE",
      },
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
  components: {
    Text: {
      variants: {
        content: {
          mb: "2",
        },
      },
    },
  },
  initialColorMode: "light",
  useSystemColorMode: false,
});

export default theme;
