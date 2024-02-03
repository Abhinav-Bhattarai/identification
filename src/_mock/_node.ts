import { INodeData } from 'src/types/nodes';

export const NodeData: INodeData[] = [
  {
    identification: {
      data: {
        visitorId: '123456',
        linkedId: '789012',
        requestId: 'abcxyz',
        IbrowserDetails: {
          browserName: 'Chrome',
          browserMajorVersion: '98',
          browserFullVersion: '98.0.1234.56',
          os: 'Windows',
          osVersion: '10',
          device: 'Desktop',
          userAgent:
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.1234.56 Safari/537.36',
        },
        incognito: false,
        ip: '192.168.1.1',
        IipLocation: {
          accuracyRadius: 50,
          latitude: 37.7749,
          longitude: -122.4194,
          postalCode: '94101',
          timezone: 'America/Los_Angeles',
          Icity: { name: 'San Francisco' },
          Icountry: { code: 'US', name: 'United States' },
          continent: { code: 'NA', name: 'North America' },
          Isubdivisions: [{ isoCode: 'CA', name: 'California' }],
        },
        timestamp: 1642416000,
        time: '2024-01-17T12:00:00Z',
        url: 'https://example.com',
        tag: {},
        confidence: {
          score: 0.9,
        },
        visitorFound: true,
        firstSeenAt: {
          global: '2024-01-17T10:00:00Z',
          subscription: '2024-01-17T10:05:00Z',
        },
        lastSeenAt: {
          global: '2024-01-17T11:55:00Z',
          subscription: null,
        },
      },
    },
    botd: {
      data: {
        bot: {
          result: 'Not a bot',
        },
        url: 'https://example.com',
        ip: '192.168.1.1',
        time: '2024-01-17T12:05:00Z',
        userAgent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)',
        requestId: 'abcxyz',
      },
    },
    ipInfo: {
      data: {
        v4: {
          address: '192.168.1.1',
          geolocation: {
            accuracyRadius: 50,
            latitude: 37.7749,
            longitude: -122.4194,
            postalCode: '94101',
            timezone: 'America/Los_Angeles',
            Icity: { name: 'San Francisco' },
            Icountry: { code: 'US', name: 'United States' },
            continent: { code: 'NA', name: 'North America' },
            Isubdivisions: [{ isoCode: 'CA', name: 'California' }],
          },
          asn: {
            asn: 'AS12345',
            name: 'Example ISP',
            network: '192.168.0.0/16',
          },
          datacenter: {
            result: false,
            name: '',
          },
        },
        v6: {
          address: '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
          geolocation: {
            accuracyRadius: 50,
            latitude: 37.7749,
            longitude: -122.4194,
            postalCode: '94101',
            timezone: 'America/Los_Angeles',
            Icity: { name: 'San Francisco' },
            Icountry: { code: 'US', name: 'United States' },
            continent: { code: 'NA', name: 'North America' },
            Isubdivisions: [{ isoCode: 'CA', name: 'California' }],
          },
          asn: {
            asn: 'AS12345',
            name: 'Example ISP',
            network: '2001:0db8::/32',
          },
          datacenter: {
            result: false,
            name: '',
          },
        },
      },
    },
    vpn: {
      data: {
        result: false,
        originTimezone: 'America/New_York',
        methods: {
          timezoneMismatch: true,
          publicVPN: false,
          auxiliaryMobile: false,
        },
      },
    },
    incognito: {
      data: {
        result: false,
      },
    },
    tampering: {
      data: {
        result: false,
        anomalyScore: 0.0,
      },
    },
    privacySettings: {
      data: {
        result: true,
      },
    },
    virtualMachine: {
      data: {
        result: false,
      },
    },
  },
];
