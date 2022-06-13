import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Content from "../Dashboard/Content";
import ExpensesTable from "../Dashboard/ExpensesTable"

export default function Reporter() {
    return (
        <>
        <Content>
        <Grid container spacing={5}>
          <Grid item xs={12} md={12} lg={12}>
            {/* <Typography variant="" >Recent Report</Typography> */}
            <ExpensesTable />
          </Grid>
          </Grid>
        </Content>
        </>
    )
}
