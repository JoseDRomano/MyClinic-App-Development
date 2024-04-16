import {Box, Typography, useTheme} from "@mui/material";
import {beige, success} from "../theme/colors";

const Header = ({title, subtitle}) => {
    const theme = useTheme();
    const colors = theme.palette.primary.main;
    return (
        <Box mb="30px">
            <Typography variant="h2"
                        color={beige.main}
                        fontWeight="bold"
                        sx={{mb: "5px"}}
            >
                {title}
            </Typography>
            <Typography variant="h5" color={success.main}>
                {subtitle}
            </Typography>
        </Box>
    );
}

export default Header;