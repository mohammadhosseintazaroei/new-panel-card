import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Badge,
  InfoData,
} from "../../interfaces/card.interface";
import { Chip, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ChipProps } from "@mui/material/Chip";
import styles from "./card.styles";

interface Props {
  infoData: InfoData;
  borderColor?: string;
  badge?: Badge;
  action?: {
    handleClick?: () => void;
    text?: string;
  };
  description?: string;
}
interface StyledSliderProps extends ChipProps {
  badge?: Badge;
  borderColor?: string;
}

const StyledSlider = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "success",
})<StyledSliderProps>(({ badge }) => ({
  ...(badge?.color && {
    color: badge.color,
    backgroundColor: badge.background,
  }),
  fontSize: "12px",
  fontWeight: "700",
}));

export default function InfoCard(props: Props) {
  const theme = useTheme();

  const { badge ,borderColor} = props;
  return (
    <Card
      sx={{
        ...styles.cardStyles,
        ...(borderColor && {
          borderBottom: `2px solid ${borderColor}`,
        }),
      }}
    >
      <CardContent sx={styles.cardContentStyles}>
        <Typography sx={styles.titleStyles} gutterBottom>
          {props.infoData.title}
        </Typography>
        <Box display="flex" justifyContent="start" alignItems="center">
          <Typography sx={styles.amountStyles} component="div">
            {props.infoData.amount}
          </Typography>
          <Typography sx={styles.amountTagStyles} component="div">
            {props.infoData.amountTag}
          </Typography>
          {props.badge && (
            <StyledSlider label={props.badge.text} size="small" badge={badge} />
          )}
        </Box>
      </CardContent>
      {props.action?.handleClick &&props.action?.text? (
        <CardActions>
          <Button
            onClick={props.action.handleClick}
            size="small"
            sx={styles.buttonStyles}
          >
            {props.action.text}
          </Button>
        </CardActions>
      ) : (
        <Typography sx={styles.descriptionStyles} gutterBottom>
          {props.description}
        </Typography>
      )}
    </Card>
  );
}
