import { useRef } from "react";
import { DetailsTool } from "../../shared/components/details-tool/detailsTool";
import { LayoutBasePage } from "../../shared/layouts";

import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { Box, Grid } from "@mui/material";
import { VTextField } from "../../shared/forms";

interface TMock {
  cod_barra: string;
  cod_produto: string;
  field_produto: string;
  obs_produto: string;
}

export const Products = () => {
  const refForm = useRef<FormHandles>(null);

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
            </Grid>
          </Grid>
        </Box>
      </Form>
    </LayoutBasePage>
  );
};
