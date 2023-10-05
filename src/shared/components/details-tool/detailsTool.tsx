import { Box, Button, Divider, Paper, useTheme } from "@mui/material"
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

    onClickNewButton,
    onClickBackButton,
    onClickDeleteButton,
    onClickSaveAndBackButton,
    onClickSaveButton


}: IDetailsTool) =>{

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

    { showButtonSave && (
        <Button 
        variant="contained"
        type="submit"
        disableElevation
        startIcon={<SaveIcon/>}
        onClick={onClickSaveButton}
    >   Salvar
    </Button>
    )}

    {showButtonSaveAndBack && (
    <Button 
        variant="outlined"
        type="submit"
        disableElevation
        startIcon={<SaveIcon/>}
        onClick={onClickSaveAndBackButton}
        >Salvar e voltar
    </Button>
    )}

    { showButtonDelete && (
    <Button 
        variant="outlined"
        type="submit"
        disableElevation
        startIcon={<DeleteIcon/>}
        onClick={onClickDeleteButton}
    >Apagar
    </Button>
    )}

    {showButtonNew && (
    <Button 
        variant="outlined"
        type="submit"
        disableElevation
        startIcon={<AddIcon/>}
        onClick={onClickNewButton}
    >{textButtonNew}
    </Button>
    )}

    <Divider variant="middle" orientation="vertical"/>

    { showButtonBack && (
    <Button 
        variant="outlined"
        type="submit"
        disableElevation
        startIcon={<ArrowBackIcon/>}
        onClick={onClickBackButton}
        >Voltar
    </Button>
    )}

    </Box>
)
}