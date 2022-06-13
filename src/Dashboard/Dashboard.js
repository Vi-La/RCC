import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { drawerWidth } from "../AppBarAndDrawer/AppBarAndDrawer";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Content from "./Content";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { SummaryCard } from "../People/Driver";
import ExpensesTable from "./ExpensesTable";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://react.school/"></Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appToolbar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 300,
  },
  balanceCard: {
    height: 200,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        color="secondary"
        position="static"
        className={classes.appToolbar}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Accounts" />
          <Tab label="Portfolio" />
          <Tab label="Pay & Transfer" />
        </Tabs>
      </AppBar>
    </div>
  );
}

export function Dashboard() {
  const [comments, setComments] = React.useState(0);
  const [groups, setGroups] = React.useState(0);
  const [leaders, setLeaders] = React.useState(0);
  const [community, setCommunity] = React.useState(0);
  
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const balancePaper = clsx(classes.paper, classes.balanceCard);

  return (
    <>
      <Content>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <div className={classes.summaryCards}>
              {/* <Link color="inherit" underline="none" href="/messages"> */}
                <SummaryCard title={"Comments"} value={comments} />
              {/* </Link> */}
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <div className={classes.summaryCards}>
              {/* <Link color="inherit" underline="none" href="/leaders"> */}
                <SummaryCard title={"Leaders"} value={leaders} />
              {/* </Link> */}
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
          <div className={classes.summaryCards}>
              {/* <Link color="inherit" underline="none" href="/community"> */}
                <SummaryCard title={"Community"} value={community} />
              {/* </Link> */}
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
          <div className={classes.summaryCards}>
              {/* <Link color="inherit" underline="none" href="/groups"> */}
                <SummaryCard title={"Groups"} value={groups} />
              {/* </Link> */}
            </div>
          </Grid>
        </Grid>
        <Box pt={4}>
          <Copyright />
        </Box>
      </Content>
    </>
  );
}
