'use client';

import Grid from '@mui/material/Unstable_Grid2';
// eslint-disable-next-line
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { Container, Typography } from '@mui/material';

import { _analyticOrderTimeline } from 'src/_mock';

import { useSettingsContext } from 'src/components/settings';

import Summary from '../details-widget-summary';
import RecentIpTimeline from '../details-order-timeline';
import DetailsWebsiteVisits from '../details-website-visits';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'src/components/ui/tabs';

export default function OverviewDetailsView() {
  const settings = useSettingsContext();

  return (
    <Container sx={{ py: 4 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="h5"
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        >
          Nodes Details
        </Typography>

        {/* <div style={{ display: 'flex', gap: '2px' }}>
          <PersonIcon/>
          <Typography variant="h6" sx={{ ml: 2 }}>
            #11202
          </Typography>
        </div> */}
      </div>

      <section>
        <Tabs defaultValue="rules" className='p-0'>
          <TabsList>
            <TabsTrigger value="rules">Rules</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
          </TabsList>
          <div className="bg-border h-[1px] my-2 w-full"></div>
          <TabsContent value="rules">
            <Grid container spacing={1}>
              <Grid xs={3} sm={3} md={3}>
                <Summary
                  title="Visit Summary"
                  total={30}
                  color="info"
                  icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
                />
              </Grid>

              <Grid xs={3} sm={3} md={3}>
                <Summary
                  title="Incognito"
                  total={234}
                  color="error"
                  icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
                />
              </Grid>

              <Grid xs={3} sm={3} md={3}>
                <Summary
                  title="Geo Loation"
                  total={170}
                  color="warning"
                  icon={<FmdGoodIcon fontSize="large" sx={{ w: 64, h: 64 }} />}
                />
              </Grid>

              <Grid xs={3} sm={3} md={3}>
                <Summary title="IP Addresses" total={710} icon={<FmdGoodIcon fontSize="large" />} />
              </Grid>

              <Grid xs={12} md={6} lg={12}>
                <DetailsWebsiteVisits
                  firstSeenAt="22nd April, 2002 14:02 PM EST"
                  lastSeenAt="22nd April, 2022 17:02 ON EST"
                  title="Latest IP Address"
                  subheader="192.168.0.0.1"
                />
              </Grid>

              <Grid xs={12} md={6} lg={12}>
                <RecentIpTimeline title="Visitor History" list={_analyticOrderTimeline} />
              </Grid>
            </Grid>
          </TabsContent>
          <TabsContent value="integrations" className="px-4 lg:px-8">
            Integrations
          </TabsContent>
          <TabsContent value="archived" className="px-4 lg:px-8">
            Archived
          </TabsContent>
        </Tabs>
      </section>

      {/* <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}
      >
        <Stack direction="row" spacing={2}>
          <Typography variant="h6">First Seen At: </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
            22nd April, 2002 14:02 PM EST
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Typography variant="h6">Last Seen At: </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
            22nd April, 2022 17:02 ON EST
          </Typography>
        </Stack>
      </div> */}
    </Container>
  );
}
