import { forwardRef } from 'react';

import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
  open: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, open, sx, ...other }, ref) => {
    const theme = useTheme();

    // const PRIMARY_LIGHT = theme.palette.primary.light;

    // const PRIMARY_MAIN = theme.palette.primary.main;

    // const PRIMARY_DARK = theme.palette.primary.dark;

    // OR using local (public folder)
    // -------------------------------------------------------
    // const logo = (
    //   <Box
    //     component="img"
    //     src="/logo/logo_single.svg" => your path
    //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
    //   />
    // );

    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          // width: 40,
          // height: 40,

          display: 'flex',
          ...sx,
        }}
        {...other}
      >
        {open ? (
          <svg
            width="141"
            height="38"
            viewBox="0 0 141 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_57_2143"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="44"
              y="1"
              width="122"
              height="132"
            >
              <rect x="44.6582" y="1.63281" width="95.6939" height="29.3849" fill="#00101E" />
            </mask>
            <g mask="url(#mask0_57_2143)">
              <path
                d="M51.7266 10.8565H54.0222L54.044 13.7313H54.1791C55.0503 11.7813 56.784 10.3984 59.3846 10.3984C60.0729 10.3984 60.7263 10.49 61.1968 10.5991L60.9267 12.6407C60.5564 12.5491 59.9858 12.4575 59.2975 12.4575C56.3223 12.4575 54.0745 14.7608 54.0745 18.1417V26.9756H51.7266V10.8565Z"
                fill="currentColor"
              />
              <path
                d="M62.6606 22.8898C62.6606 19.9845 64.4902 18.571 68.7243 18.0824L74.8534 17.3757V16.0714C74.8534 13.3231 73.3941 12.1976 70.3012 12.1976C67.2084 12.1976 66.0497 13.3972 65.6663 15.5174L63.3489 15.3167C63.8193 12.3372 65.8536 10.3828 70.3012 10.3828C74.7489 10.3828 77.1534 12.1191 77.1534 15.9754V26.9774H75.2367L74.9362 24.3207H74.8011C73.76 26.1965 71.6952 27.4267 68.6546 27.4267C64.8256 27.4267 62.6562 25.8301 62.6562 22.8942L62.6606 22.8898ZM74.8534 20.7042V18.9985L68.8071 19.7663C66.0845 20.1066 65.026 21.1187 65.026 22.7764C65.026 24.5911 66.2675 25.6207 68.9901 25.6207C72.4837 25.6207 74.8534 23.5922 74.8534 20.7042Z"
                fill="currentColor"
              />
              <path
                d="M80.2373 22.5943L82.5548 22.4111C82.8423 24.6097 84.502 25.6392 87.5425 25.6392C90.313 25.6392 91.9771 24.5617 91.9771 22.7513C91.9771 20.9409 90.7356 20.4174 88.5183 20.003L86.0484 19.5581C82.5896 18.9124 81.0083 17.5601 81.0083 15.0691C81.0083 11.9326 83.4608 10.3359 87.3596 10.3359C91.524 10.3359 93.7761 11.8279 94.0114 14.947L91.6939 15.1302C91.524 13.0537 90.0821 12.1507 87.3247 12.1507C84.7372 12.1507 83.3258 13.0406 83.3258 14.8859C83.3258 16.4215 84.2144 17.1762 86.5188 17.6211L89.089 18.0966C92.3996 18.7248 94.2815 19.8023 94.2815 22.5376C94.2815 25.5651 91.7636 27.4409 87.5295 27.4409C82.8771 27.4409 80.4725 25.7352 80.2373 22.5986V22.5943Z"
                fill="currentColor"
              />
              <path
                d="M115.596 19.332C115.596 13.9532 118.418 10.821 123.223 10.821C126.146 10.821 128.093 11.9901 129.152 13.9576H129.304V4.35156H131.657V27.4025H129.344V24.5277H129.204C128.011 26.5693 126.164 27.8605 123.158 27.8605C118.423 27.8605 115.6 24.7109 115.6 19.332H115.596ZM129.4 19.3495C129.4 15.6022 127.571 12.7579 123.472 12.7579C119.926 12.7579 118.013 14.9086 118.013 19.3495C118.013 23.7904 119.93 25.928 123.489 25.928C127.571 25.928 129.4 23.1012 129.4 19.3495Z"
                fill="currentColor"
              />
              <path d="M98.002 7.05961V8.65625H112.003V7.05961L98.002 7.05961Z" fill="currentColor" />
              <path
                d="M105.098 27.8462C99.496 27.8462 96.9434 23.4925 96.9434 19.4485C96.9434 14.4361 100.263 10.9375 105.011 10.9375C110.94 10.9375 113.052 15.2388 113.052 19.261C113.052 19.4747 113.052 19.6492 113.052 19.8761H99.2434V19.924C99.4351 23.5099 101.866 25.918 105.294 25.918C107.725 25.918 109.432 24.967 110.513 23.0083H112.791C112.216 24.5133 110.356 27.8374 105.102 27.8374L105.098 27.8462ZM104.985 12.8221C101.787 12.8221 99.6659 14.7851 99.3087 18.0744V18.1267H110.63V18.0787C110.517 16.4996 109.742 12.8221 104.98 12.8221H104.985Z"
                fill="currentColor"
              />
            </g>
            <path
              d="M27.1736 0L18.8534 8.2493L10.5332 0V7.06709L18.8534 15.3164L27.1736 7.06709V0Z"
              fill="#0042FF"
            />
            <path
              d="M30.6368 10.5469L22.3994 18.8791L30.6368 27.124H37.6938L29.4607 18.8791L37.6938 10.5469H30.6368Z"
              fill="#0042FF"
            />
            <path
              d="M10.5117 30.6981V37.7695L18.8319 29.5202L27.1521 37.7695V30.6981L18.8319 22.4531L10.5117 30.6981Z"
              fill="#0042FF"
            />
            <path
              d="M0 10.4688L8.23743 18.7966L0 27.1288H7.06128L15.2944 18.7966L7.06128 10.4688H0Z"
              fill="#0042FF"
            />
          </svg>
        ) : (
          <svg
            width="39"
            height="38"
            viewBox="0 0 39 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.0095 0L19.6893 8.2493L11.3691 0V7.06709L19.6893 15.3164L28.0095 7.06709V0Z"
              fill="#0042FF"
            />
            <path
              d="M31.4728 10.5469L23.2354 18.8791L31.4728 27.124H38.5297L30.2966 18.8791L38.5297 10.5469H31.4728Z"
              fill="#0042FF"
            />
            <path
              d="M11.3477 30.6981V37.7695L19.6679 29.5202L27.9881 37.7695V30.6981L19.6679 22.4531L11.3477 30.6981Z"
              fill="#0042FF"
            />
            <path
              d="M0.835938 10.4688L9.07337 18.7966L0.835938 27.1288H7.89722L16.1303 18.7966L7.89722 10.4688H0.835938Z"
              fill="#0042FF"
            />
          </svg>
        )}
      </Box>
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  }
);

Logo.displayName = 'Logo';

export default Logo;
