import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import Card, { CardProps } from '@mui/material/Card';

import { Maps } from 'src/components/maps';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  firstSeenAt: string;
  lastSeenAt: string;
}

export default function AnalyticsWebsiteVisits({
  title,
  subheader,
  firstSeenAt,
  lastSeenAt,
  ...other
}: Props) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Box sx={{ p: 3, pb: 1 }}>
        <Maps lat={7.2905715} lng={80.6337262} />
      </Box>
    </Card>
  );
}
