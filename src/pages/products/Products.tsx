import { useRef, useState } from "react";
import { DetailsTool } from "../../shared/components/details-tool/detailsTool";
import { LayoutBasePage } from "../../shared/layouts";

import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { Box, Button, Grid, MenuItem, SelectChangeEvent, TextField } from "@mui/material";
import { VTextField } from "../../shared/forms";

interface TMock {
  cod_barra: string;
  cod_produto: string;
  field_produto: string;
  obs_produto: string;
}
const currencies = [
  {
    value: '1',
    label: 'Bitcoin',
  },
  {
    value: '2',
    label: 'Ethereum',
  },
  {
    value: '3',
    label: 'Binance coin',
  },
  {
    value: '4',
    label: 'Cardano',
  },
];

export const Products = () => {
  const refForm = useRef<FormHandles>(null);
  
  const [tipoItem, setTipoItem] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setTipoItem(event.target.value as string);
    console.log(event.target.value)
  }

  const handleSave = (data: TMock) => {
    switch (JSON.stringify(data)) {
      case "products":
        {
          console.log("products saved");
        }
        break;
    }
  };

  return (
    <LayoutBasePage
      title="Gerenciado de produto"
      toolbar={
        <DetailsTool onClickSaveButton={() => refForm.current?.submitForm()} />
      }
    >
      <Form ref={refForm} onSubmit={handleSave}>
        <Box>
          <Grid container direction={"column"} padding={2} spacing={2}>
            <Grid container item direction={"row"} spacing={2}>
              <Grid item xs={1}>
                <VTextField
                  inputProps={{ inputMode: "numeric" }}
                  type="number"
                  name="cod_produto"
                  placeholder="Codigo"
                  fullWidth
                />
              </Grid>

              <Grid item xs={3}>
                <VTextField
                  name="cod_barra"
                  placeholder="Codigo de barras"
                  fullWidth
                />
              </Grid>

              <Grid item xs={4}>
                <VTextField
                  name="field_produto"
                  placeholder="Nome do produto"
                  fullWidth
                />
              </Grid>

              <Grid item xs={4}>
                <VTextField
                  name="obs_produto"
                  placeholder="Observação"
                  fullWidth
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                fullWidth
                label="Tipo de item"
                select
                defaultValue={"Bitcoin"}
                onChange={(e) => setTipoItem(e.target.value)}
                >
                  {
                    currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                      {option.label}
                      </MenuItem>
                    ) )
                  }
                </TextField>
              </Grid>
              <Grid>
                <Button variant="outlined" onClick={() => console.log(tipoItem)}>Enviar</Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Form>
    </LayoutBasePage>
  );
};
