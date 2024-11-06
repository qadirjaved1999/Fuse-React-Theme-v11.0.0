import { makeStyles } from "@mui/styles";
import {
    Dialog,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    DialogActions,
    DialogContent,
} from "@mui/material";
import { Close } from "@mui/icons-material";

const CustomDialog = ({
    open,
    title,
    action,
    content,
    setOpen,
    maxWidth,
}) => {
    const classes = useStyles();
    const handleClose = () => setOpen(false);

    return (
        <Dialog
            classes={{ paper: classes.root }}
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth={maxWidth || "md"}
        >
            <AppBar position="static" elevation={0}>
                <Toolbar
                    // className="flex-between w-full bg-[#630320]"
                    className="flex-between w-full bg-[#0A3160]"
                    style={{ display: 'flex', justifyContent: 'space-between', borderBottom: 0 }}
                >
                    <Typography variant="subtitle1" color="inherit">
                        {title}
                    </Typography>
                    <IconButton onClick={handleClose}>
                        <Close style={{ color: '#FFFFFF' }} />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <DialogContent classes={{ root: "p-24" }}>{content}</DialogContent>

            <DialogActions className="justify-end pb-20 pt-0">
                <div className="px-16">{action}</div>
            </DialogActions>
        </Dialog>
    );
};

export default CustomDialog;

// Mui Dialog Styles
const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: 0,
        margin: "20px",
        boxShadow: "none",
    },
    [theme.breakpoints.down("lg")]: {
        root: {
            width: "100%",
        },
    },
}));
