import { extendTheme } from "@chakra-ui/react";
import background from "./images/background.jpg";

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

const styles = {
    global: {
        body: {
            h: "100vh",
            backgroundImage: background,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
        },
    },
};

const theme = extendTheme({ config, styles });

export default theme;
