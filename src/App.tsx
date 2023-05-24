import React from "react";
import { InfoCard } from "./components/cards/index";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { mainTheme } from "./theme/main-theme";
import { InfoData } from "./interfaces/card.interface";
import { BorderColor } from "./interfaces/card.interface";
import { title } from "process";
interface MuckData {
  infoData: InfoData;
  borderColor?: BorderColor;
  badgeColor?: string;
  action?: string;
  description: string;
}
function App() {
  const informationData: MuckData[] = [
    {
      infoData: {
        title: "تعداد تماس‌ها",
        amount: 2803,
      },
      borderColor: "success",
      action: "مدیریت تامین کنندگان",
      description: "توضیحات تکمیلی این کارد",
    },
    {
      infoData: {
        title: "تعداد استعلام‌های ثبت شده",
        amount: 2803,

        changeProcess: {
          percentageChange: 24,
          stateChange: "decrease",
        },
        
      },
      action: "مدیریت تامین کنندگان",

      borderColor: "danger",
      description: "توضیحات تکمیلی این کارد",
    },
    {
      infoData: {
        title: "تعداد استعلام های باز",
        amount: 2803,

        changeProcess: {
          percentageChange: 24,
          stateChange: "decrease",
        },
      },
      borderColor: "warning",
      description: "توضیحات تکمیلی این کارد",
    },
    {
      infoData: {
        title: "تعداد استعلام‌‌های تاخیردار",
        amount: 2803,

        changeProcess: {
          percentageChange: 14,
          stateChange: "increase",
        },
      },
      borderColor: "error",
      description: "توضیحات تکمیلی این کارد",
    },
    {
      infoData: {
        title: "تعداد تامین کنندگان",
        amount: 2803,
        changeProcess: {
          percentageChange: 24,
          stateChange: "increase",
        },
      },
      borderColor: "info",
      description: "توضیحات تکمیلی این کارد",
    },
  ];

  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <Grid container spacing={1}>
          {informationData.map((item: MuckData, index) => (
            <InfoCard
              infoData={item.infoData}
              borderColor={item.borderColor}
              description={item.description}
              action={item.action && item.action}
            />
          ))}
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;
