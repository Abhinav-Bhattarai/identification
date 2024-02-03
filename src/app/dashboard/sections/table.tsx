'use client';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import React from 'react';
import SA from '../../../../public/sa-flag.svg';
import Chrome from 'public/ic_chrome.svg';
import Image from 'src/components/image';

const devicesMapper: Record<string, { name: string; logo: string }> = {
  mac: {
    name: 'Mac Os X',
    logo: Chrome,
  },

  windows: {
    name: 'Windows',
    logo: Chrome,
  },

  linux: {
    name: 'Linux',
    logo: Chrome,
  },
};

const countryMapper: Record<string, { name: string; flag: string }> = {
  sa: {
    name: 'Saudi Arabia',
    flag: SA,
  },
};

const eventsMapper: Record<string, { name: string; logo: string }> = {
  login: {
    name: 'Login Attempted',
    logo: SA,
  },
};

const riskMapper: Record<string, { name: string; color: string }> = {
  low: {
    name: 'Low',
    color: 'green',
  },
  medium: {
    name: 'Medium',
    color: 'yellow',
  },
  high: {
    name: 'High',
    color: 'red',
  },
};

function TableLogoDescription({
  logo,
  title,
  subText,
}: {
  logo: string;
  title: string;
  subText: string;
}) {
  return (
    <main className="flex flex-row items-center">
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.89746 4.19042C8.4759 -2.30199 18.8193 -1.02042 22.6861 6.56337C19.9642 6.56436 15.7018 6.56255 13.3932 6.56337C11.7189 6.56395 10.6378 6.52589 9.46712 7.1422C8.09079 7.86668 7.05232 9.20962 6.68982 10.787L2.89746 4.19042Z"
          fill="#EA4335"
        />
        <path
          d="M8.00781 12.0093C8.00781 14.2096 9.79692 15.9997 11.9961 15.9997C14.1952 15.9997 15.9843 14.2096 15.9843 12.0093C15.9843 9.80896 14.1952 8.0188 11.9961 8.0188C9.79692 8.0188 8.00781 9.80896 8.00781 12.0093Z"
          fill="#4285F4"
        />
        <path
          d="M13.5438 17.2326C11.3053 17.8979 8.68567 17.1601 7.25074 14.6832C6.15542 12.7926 3.26143 7.75096 1.94603 5.4585C-2.66093 12.5195 1.30962 22.1419 9.67323 23.7843L13.5438 17.2326Z"
          fill="#34A853"
        />
        <path
          d="M15.7005 8.0188C17.5649 9.75289 17.9711 12.5608 16.7082 14.7381C15.7567 16.3784 12.7199 21.5039 11.248 23.9859C19.8652 24.5171 26.1469 16.0716 23.3095 8.0188H15.7005Z"
          fill="#FBBC05"
        />
      </svg>

      <div className="flex flex-col ml-2">
        <p className="text-sm font-semibold text-muted-foreground">{title}</p>
        <p className="text-xs text-gray-500">{subText}</p>
      </div>
    </main>
  );
}

function TableTitleSubtitle({
  title,
  subTitle,
  verboseLevel,
}: {
  title: string;
  subTitle: string;
  verboseLevel: 0 | 1 | 2;
}) {
  return (
    <div className="flex flex-col space-y-2">
      <p className="text-sm font-semibold text-muted-foreground">{title}</p>
      <p className="text-xs text-gray-500">{subTitle}</p>
    </div>
  );
}

export default function EventTable() {
  // const exportToExcel = (data) => {
  //   const ws = XLSX.utils.json_to_sheet(data);
  //   const wb = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  //   const excelFile = XLSX.write(wb, { bookType: "xlsx", type: "blob" });
  //   const url = window.URL.createObjectURL(new Blob([excelFile]));
  //   const a = document.createElement("a");
  //   a.href = url;
  //   a.download = "table_data.xlsx";
  //   a.click();
  //   window.URL.revokeObjectURL(url);
  // };

  const events = [
    {
      id: 'ee-22',
      category: '26th May',
      data: [
        {
          id: '1',
          time: '11:25 pm',
          policy: 'Policy A',
          risk: '30',
          event: 'login',
          device: 'mac',
          country: 'sa',
        },

        {
          id: '2',
          time: '12:35 pm',
          policy: 'Policy B.',
          risk: '60',
          event: 'login',
          device: 'mac',
          country: 'sa',
        },
      ],
    },
  ];

  const headers = [
    {
      name: 'Time',
      key: 'time',
    },
    {
      name: 'Policy',
      key: 'policy',
    },
    {
      name: 'Risk',
      key: 'risk',
    },
    {
      name: 'Event',
      key: 'event',
    },
    {
      name: 'Device',
      key: 'device',
    },
    {
      name: 'Country',
      key: 'country',
    },
  ];
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-foreground">1232 Events matched</h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex items-center gap-2 flex-wrap">
          <button
            type="button"
            className="text-gray-500 inline-flex items-center duration-200 ease-in cursor-pointer rounded-md bg-transparent px-2 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-border hover:bg-muted"
          >
            Columns
          </button>
          <button
            type="button"
            className=" text-gray-500 inline-flex items-center duration-200 ease-in cursor-pointer rounded-md bg-transparent px-2 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-border hover:bg-muted"
          >
            Export
          </button>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-border hover:bg-muted focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </a>

            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-border hover:bg-muted focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-border">
              <thead>
                <tr>
                  {headers.map((header) => (
                    <th
                      key={header.key}
                      scope="col"
                      className="whitespace-nowrap py-3.5 px-2 text-left text-sm font-semibold text-foreground sm:pl-0"
                    >
                      {header.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-background">
                {events.map((event) => {
                  return (
                    <React.Fragment key={event.id}>
                      <tr className="border-t border-border">
                        <th
                          colSpan={24}
                          scope="colgroup"
                          className="bg-muted py-2 text-left text-sm font-semibold text-muted-foreground sm:pl-2"
                        >
                          {event.category}
                        </th>
                      </tr>
                      {event.data.map((item) => {
                        return (
                          <tr key={item.id} className="py-4">
                            <td className="whitespace-nowrap py-6 pl-4 text-sm text-gray-500 sm:pl-2">
                              {item.time}
                            </td>
                            <td className="whitespace-nowrap py-6 text-sm font-medium text-muted-foreground">
                              <TableTitleSubtitle
                                title={item.policy}
                                subTitle="Policy"
                                verboseLevel={1}
                              />
                            </td>
                            <td className="whitespace-nowrap py-6 text-sm text-muted-foreground">
                              {item.risk}
                            </td>
                            <td className="whitespace-nowrap py-6 text-sm text-gray-500">
                              <TableLogoDescription
                                logo={eventsMapper[item.event].logo}
                                title={eventsMapper[item.event].name}
                                subText={'Riyadh, Saudi Arabia'}
                              />
                            </td>
                            <td className="whitespace-nowrap py-6 text-sm text-gray-500">
                              <TableLogoDescription
                                logo={devicesMapper[item.device].logo}
                                title={devicesMapper[item.device].name}
                                subText={'Using social sign-on. Facebook'}
                              />
                            </td>
                            <td className="whitespace-nowrap py-6 text-sm text-gray-500">
                              <TableLogoDescription
                                logo={countryMapper[item.country].flag}
                                title={countryMapper[item.country].name}
                                subText={'Riyadh, Saudi Arabia'}
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
