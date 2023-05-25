import { Badge, InfoData } from "../../interfaces/card.interface";
import { Grid, useTheme } from "@mui/material";
import InfoCard from "./info-card";

interface MuckData {
  infoData: InfoData;
  borderColor?: string;
  action?: {
    handleClick?: () => void;
    text?: string;
  };
  description?: string;
  badge?: Badge;
}
export default function CardWrapper() {
  function testClick() {
    console.log("Clicked! BOMB");
  }
  const theme = useTheme();
  const informationData: MuckData[] = [
    {
      infoData: {
        title: "تعداد تامین‌کنندگان",
        amount: "۲،۸۰۳",
      },
      borderColor: theme.palette.borderColor["success"] ,
      action: {
        handleClick: testClick, 
        text: "مدیریت تامین‌کنندگان",
      },
    },
    {
      infoData: {
        title: "تعداد تماس‌ها",
        amount: "۲،۸۰۳",
      },
      borderColor: theme.palette.borderColor["error"] ,
      badge: {
        text: "۲۴٪ افزایش",
        color: theme.palette.label.color["main"],
        background: theme.palette.label.background["main"],
      },
      description: "توضیحات تکمیلی این کارد",
    },
    {
      infoData: {
        title: "تعداد استعلام‌های ثبت شده",
        amount: "۲،۸۰۳",
      },
      badge: {
        text: "۲۴٪ کاهش",
        color: theme.palette.label.color["danger"],
        background: theme.palette.label.background["danger"],
      },
      borderColor:  theme.palette.borderColor["info"],
      description: "توضیحات تکمیلی این کارد",
    },
    {
      infoData: {
        title: "تعداد استعلام های باز",
        amount: "۲،۸۰۳",
      },
      badge: {
        text: "۲۴٪ کاهش",
        color:  theme.palette.label.color["success"],
        background:  theme.palette.label.background["success"],
      },
      borderColor:  theme.palette.borderColor["warning"],
      action: {
        handleClick:testClick,
        text:"اعمال فیلتر روی جدول",
      },
    },
    {
      infoData: {
        title: "تعداد استعلام‌‌های تاخیردار",
        amount: "۲،۸۰۳",
      },
      badge: {
        text: "۱۴٪ افزایش",
        color:  theme.palette.label.color["danger"],
        background:  theme.palette.label.background["danger"],
      },
      borderColor:  theme.palette.borderColor["danger"],
      action: {
        handleClick:testClick,
        text:"اعمال فیلتر روی جدول",
      },
    },
  ];

  const secondInformationData: MuckData[] = [
    {
      infoData: {
        title: "تعداد سفارشات استعلامی",
        amount: "۲،۸۰۳",
      },
      borderColor:  theme.palette.borderColor["info"],
      description:"توضیحات تکمیلی این کارد",
      badge: {
        text: "۲۴٪ افزایش",
        color: theme.palette.label.color["success"],
        background: theme.palette.label.background["success"],
      },
    },
    {
      infoData: {
        title: "تاخیر پردازش سفارشات استعلامی",
        amount: "3",
        amountTag:"روز"
      },
      borderColor: theme.palette.borderColor["danger"] ,
      badge: {
        text:"بدون تغییر",
        color:  theme.palette.label.color["main"],
        background: theme.palette.label.background["main"]
      },
action:{
    handleClick:testClick,
    text:"اعمال فیلتر روی جدول"
}
    },
    {
      infoData: {
        title: "میزان مرجوعی سفارشات استعلامی",
        amount: "۲،۸۰۳",
      },
      badge: {
        text: "۲۴٪ کاهش",
        color: theme.palette.label.color["success"],
        background:theme.palette.label.background["success"]
      },
      borderColor:  theme.palette.borderColor["info"],
action:{
    handleClick:testClick,
    text:"اعمال فیلتر روی جدول"
}
    },
    {
      infoData: {
        title:"میانگین زمان پاسخگویی",
        amount: "۲،۸۰۳",
      },
      badge: {
        text: "۱۴٪ افزایش",
        color: theme.palette.label.color["danger"],
        background: theme.palette.label.background["danger"],
      },
      borderColor: theme.palette.borderColor["secondaryInfo"],
description:"توضیحات تکمیلی این کارد"
    },
  ];
  return (
    <>
      <Grid container spacing={2} sx={{marginBottom:"100px"}}>
        {informationData.map((item: MuckData, index) => (
          <Grid item xl={12 / 5} lg={3} md={4} sm={6} xs={12}>
            <InfoCard
              infoData={item.infoData}
              borderColor={item.borderColor}
              description={item.description}
              action={item.action}
              badge={item.badge}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2}>
        {secondInformationData.map((item: MuckData, index) => (
          <Grid item xl={12 / 4} lg={3} md={4} sm={6} xs={12}>
            <InfoCard
              infoData={item.infoData}
              borderColor={item.borderColor}
              description={item.description}
              action={item.action}
              badge={item.badge}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
