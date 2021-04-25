import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundImage: "url('/bg3.jpg')",
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
    }
  },
  initialColorMode: "light",
  useSystemColorMode: false,
});

export default theme;
