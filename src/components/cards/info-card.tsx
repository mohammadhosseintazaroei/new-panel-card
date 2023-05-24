import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  BorderColor,
  InfoData,
  StateChange,
} from "../../interfaces/card.interface";
import { Chip, Grid, Theme, useTheme } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { ChipProps } from "@mui/material/Chip";
import styles from "./card.styles";
// import { useStyles } from "./card.styles";
// import { mainTheme } from "../../theme/main-theme";

interface Props {
  infoData: InfoData;
  borderColor?: BorderColor;
  badgeColor?: string;
  action?: string;
  description: string;
}
interface StyledSliderProps extends ChipProps {
  stateChange?: StateChange;
  borderColor?: BorderColor;
}

const StyledSlider = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "success",
})<StyledSliderProps>(({ stateChange, borderColor, theme }) => ({
  ...(stateChange === "increase"
    ? {
        color: theme.palette.customPrimary.main,
      }
    : {
        backgroundColor: "blue",
        color: theme.palette.text.secondary,
      }),
  backgroundColor: theme.palette.customPrimary.light,
  fontSize: "12px",
  fontWeight: "700",
}));

export default function InfoCard(props: Props) {
  const theme = useTheme();

  const stateChange = props.infoData.changeProcess?.stateChange;

  return (
    <Grid item xl={12 / 5} lg={3} md={4} sm={6} xs={12}>
      <Card
        sx={{
          ...styles.cardStyles,
          borderBottom: `2px solid ${
            props.borderColor && theme.palette.borderColor[props.borderColor]
          }`,
        }}
      >
        <CardContent sx={styles.cardContentStyles} >
          <Typography
            sx={styles.titleStyles}
            gutterBottom
          >
            {props.infoData.title}
          </Typography>
          <Box display="flex" justifyContent="start" alignItems="center">
            <Typography sx={styles.amountStyles} component="div">
              ۲،۸۰۳
            </Typography>
            {stateChange && (
              <StyledSlider
                size="small"
                label={`${props.infoData.changeProcess?.percentageChange}% ${
                  stateChange === "increase" ? "افزایش" : "کاهش"
                }`}
                stateChange={stateChange}
              />
            )}
          </Box>
        </CardContent>
        {props.action ? (
          <CardActions>
            <Button size="small" sx={styles.buttonStyles}>{props.action}</Button>
          </CardActions>
        ) : (
          <Typography
            sx={styles.descriptionStyles}
            gutterBottom
          >
            {props.description}
          </Typography>
        )}
      </Card>
    </Grid>
  );
}
