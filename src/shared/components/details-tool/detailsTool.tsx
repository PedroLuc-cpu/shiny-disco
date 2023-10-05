import { Box, Button, Divider, Paper, Skeleton, Theme, Typography, useMediaQuery, useTheme } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface IDetailsTool {
    textButtonNew?: string
    showButtonNew?: boolean
    showButtonBack?: boolean
    showButtonDelete?: boolean
    showButtonSave?: boolean
    showButtonSaveAndBack?: boolean

    // Conditional Loading

    showButtonNewLoading?: boolean
    showButtonBackLoading?: boolean
    showButtonDeleteLoading?: boolean
    showButtonSaveLoading?: boolean
    showButtonSaveAndBackLoading?: boolean

    //Events

    onClickNewButton?: () => void
    onClickBackButton?: () => void
    onClickDeleteButton?: () => void
    onClickSaveButton?: () => void
    onClickSaveAndBackButton?: () => void
}


export const  DetailsTool = ({
    textButtonNew =  "Novo",
    showButtonNew = true,
    showButtonBack = true,
    showButtonDelete = true,
    showButtonSave = true,
    showButtonSaveAndBack = false,

    showButtonNewLoading = false,
    showButtonBackLoading = false,
    showButtonDeleteLoading = false,
    showButtonSaveLoading = false,
    showButtonSaveAndBackLoading = false,


    onClickNewButton,
    onClickBackButton,
    onClickDeleteButton,
    onClickSaveAndBackButton,
    onClickSaveButton


}: IDetailsTool) =>{
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
    const theme = useTheme()

    return (
    <Box 
        height={theme.spacing(5)}
        marginX={1}
        padding={1}
        paddingX={2}
        display={"flex"} 
        gap={1} 
        alignItems={"center"} 
        component={Paper}
    >

    { showButtonSave && !showButtonSaveLoading && (
    <Button 
        variant="contained"
        type="submit"
        disableElevation
        startIcon={<SaveIcon/>}
        onClick={onClickSaveButton}
    >   
    <Typography variant="button"  whiteSpace={"nowrap"} textOverflow={"ellipsis"} overflow={"hidden"}>
        Salvar
    </Typography>
    </Button>
    )}

    { showButtonSaveLoading && (<Skeleton width={110} height={60} />)}

    {showButtonSaveAndBack &&  !showButtonSaveAndBackLoading && !smDown && !mdDown &&(
    <Button 
        variant="outlined"
        type="submit"
        disableElevation
        startIcon={<SaveIcon/>}
        onClick={onClickSaveAndBackButton}
        >
    <Typography variant="button"  whiteSpace={"nowrap"} textOverflow={"ellipsis"} overflow={"hidden"}>
        Salvar e voltar
    </Typography>    
    </Button>
    )}

    { showButtonSaveAndBackLoading && !smDown &&  mdDown && (<Skeleton width={110} height={60} />)}

    { showButtonDelete && !showButtonSaveAndBackLoading && (
    <Button 
        variant="outlined"
        type="submit"
        disableElevation
        startIcon={<DeleteIcon/>}
        onClick={onClickDeleteButton}
    >
    <Typography variant="button"  whiteSpace={"nowrap"} textOverflow={"ellipsis"} overflow={"hidden"}>
        Apagar
    </Typography>
    </Button>
    )}

    { showButtonDeleteLoading && (<Skeleton width={110} height={60} />)}

    {showButtonNew && !showButtonNewLoading && !smDown && (
    <Button 
        variant="outlined"
        type="submit"
        disableElevation
        startIcon={<AddIcon/>}
        onClick={onClickNewButton}
    >
    <Typography variant="button"  whiteSpace={"nowrap"} textOverflow={"ellipsis"} overflow={"hidden"}>
        {textButtonNew}
    </Typography>    
    </Button>
    )}

    { showButtonNewLoading && !smDown && (<Skeleton width={110} height={60} />)}

    {(showButtonBack && (showButtonNew || showButtonDelete || showButtonSaveAndBack) &&
        <Divider variant="middle" orientation="vertical"/>
    )}

    { showButtonBack &&  !showButtonBackLoading && (
    <Button 
        variant="outlined"
        type="submit"
        disableElevation
        startIcon={<ArrowBackIcon/>}
        onClick={onClickBackButton}
    >
    <Typography variant="button"  whiteSpace={"nowrap"} textOverflow={"ellipsis"} overflow={"hidden"}>
        Voltar
    </Typography>
    </Button>
    )}

    { showButtonBackLoading && (<Skeleton width={110} height={60} />)}
    </Box>
)
}