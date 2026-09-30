'use client';

import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import GameTrailers from "./GameTrailers";
import GameScreenShots from "./GameScreenShots";
import GameCreators from "./GameCreators";
import type { TabPanelProps } from "@/types/type";

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      tabIndex={0}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MediaTabs({ id, name }: { id: string, name: string }) {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{ textTransform: "capitalize", color: "white" }}
            label="Screenshots"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ textTransform: "capitalize", color: "white" }}
            label="Videos"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ textTransform: "capitalize", color: "white" }}
            label="Creators"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <GameScreenShots id={String(id)} name={name} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <GameTrailers id={String(id)} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <GameCreators id={String(id)} />
      </CustomTabPanel>
    </Box>
  );
}