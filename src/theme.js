import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    components: {
        Button: {
            baseStyle: {
                color: "#0D9276",
            },
        },
    },
    colors: {
        green: {
            450: "#0D9276",
        },
        blue: {
            75: "#BBE2EC",
            250: "#40A2E3"
        }
    }
})

export default theme;