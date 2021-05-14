import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

//#f953c6 //#b91d73
//

const styles = {
  global: {
    body: {
      bgGradient: "linear(to-t,#7F7FD5, #86A8E7, #91EAE4)",
      bgRepeat: "no-repeat",
      minH: "100vh",
    },
  },
};

const colors = {
  brands: {
    linkedin: "#2867B2",
    twitter: "#1DA1F2",
  },
};
const theme = extendTheme({ config, styles, colors });

export default theme;
