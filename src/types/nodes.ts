interface IBrowserDetails {
  browserName: string;
  browserMajorVersion: string;
  browserFullVersion: string;
  os: string;
  osVersion: string;
  device: string;
  userAgent: string;
}

interface ICity {
  name: string;
}

interface ICountry {
  code: string;
  name: string;
}

interface ISubdivision {
  isoCode: string;
  name: string;
}

interface IIpLocation {
  accuracyRadius: number;
  latitude: number;
  longitude: number;
  postalCode: string;
  timezone: string;
  Icity: ICity;
  Icountry: ICountry;
  continent: {
    code: string;
    name: string;
  };
  Isubdivisions: ISubdivision[];
}

interface IIdentificationData {
  visitorId: string;
  linkedId: string;
  requestId: string;
  IbrowserDetails: IBrowserDetails;
  incognito: boolean;
  ip: string;
  IipLocation: IIpLocation;
  timestamp: number;
  time: string;
  url: string;
  tag: {};
  confidence: {
    score: number;
  };
  visitorFound: boolean;
  firstSeenAt: {
    global: string;
    subscription: string;
  }; // add it to the summary page
  lastSeenAt: {
    global: string;
    subscription: string | null;
  }; // add it to the summary page
}

interface IBotDetection {
  bot: {
    result: string;
  };
  url: string;
  ip: string;
  time: string;
  userAgent: string;
  requestId: string;
}

interface IV4Data {
  address: string;
  geolocation: IIpLocation;
  asn: {
    asn: string;
    name: string;
    network: string;
  };
  datacenter: {
    result: boolean;
    name: string;
  };
}

interface IV6Data {
  address: string;
  geolocation: IIpLocation;
  asn: {
    asn: string;
    name: string;
    network: string;
  };
  datacenter: {
    result: boolean;
    name: string;
  };
}

interface IIpInfoData {
  v4: IV4Data;
  v6: IV6Data;
}

interface IVpnData {
  result: boolean;
  originTimezone: string;
  methods: {
    timezoneMismatch: boolean;
    publicVPN: boolean;
    auxiliaryMobile: boolean;
  };
}

interface IIncognitoData {
  result: boolean;
}

interface ITamperingData {
  result: boolean;
  anomalyScore: number;
}

interface IPrivacySettingsData {
  result: boolean;
}

interface IVirtualMachineData {
  result: boolean;
}

export interface INodeData {
  identification: {
    data: IIdentificationData;
  };
  botd: {
    data: IBotDetection;
  };
  ipInfo: {
    data: IIpInfoData;
  };
  vpn: {
    data: IVpnData;
  };
  incognito: {
    data: IIncognitoData;
  };
  tampering: {
    data: ITamperingData;
  };
  privacySettings: {
    data: IPrivacySettingsData;
  };
  virtualMachine: {
    data: IVirtualMachineData;
  };
}
