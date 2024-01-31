"use client";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { CSVLink } from "react-csv";
import XLSX from "xlsx";
import React from "react";
import SA from "../../../../public/sa-flag.svg";
import Chrome from "../../../../public/ic_chrome.svg";
import Image from "next/image";

const devicesMapper: Record<string, { name: string; logo: string }> = {
  mac: {
    name: "Mac Os X",
    logo: Chrome,
  },

  windows: {
    name: "Windows",
    logo: Chrome,
  },

  linux: {
    name: "Linux",
    logo: Chrome,
  },
};

const countryMapper: Record<string, { name: string; flag: string }> = {
  sa: {
    name: "Saudi Arabia",
    flag: SA,
  },
};

const eventsMapper: Record<string, { name: string; logo: string }> = {
  login: {
    name: "Login Attempted",
    logo: SA,
  },
};

const riskMapper: Record<string, { name: string; color: string }> = {
  low: {
    name: "Low",
    color: "green",
  },
  medium: {
    name: "Medium",
    color: "yellow",
  },
  high: {
    name: "High",
    color: "red",
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
      <Image src={logo} alt="flag" className="h-8 w-8 mr-2" />
      <div className="flex flex-col ml-2">
        <p className="text-sm font-semibold text-gray-900">{title}</p>
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
      <p className="text-sm font-semibold text-gray-900">{title}</p>
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
      id: "ee-22",
      category: "26th May",
      data: [
        {
          id: "1",
          time: "11:25 pm",
          policy: "Chase & Co.",
          risk: "30",
          event: "login",
          device: "mac",
          country: "sa",
        },
      ],
    },
  ];

  const headers = [
    {
      name: "Time",
      key: "time",
    },
    {
      name: "Policy",
      key: "policy",
    },
    {
      name: "Risk",
      key: "risk",
    },
    {
      name: "Event",
      key: "event",
    },
    {
      name: "Device",
      key: "device",
    },
    {
      name: "Country",
      key: "country",
    },
  ];
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            1232 Events matched
          </h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex items-center gap-2 flex-wrap">
          <button
            type="button"
            className="text-gray-500 inline-flex items-center duration-200 ease-in cursor-pointer rounded-md bg-white px-2 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Columns
          </button>
          <button
            type="button"
            className=" text-gray-500 inline-flex items-center duration-200 ease-in cursor-pointer rounded-md bg-white px-2 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Export
          </button>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </a>

            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
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
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  {headers.map((header) => (
                    <th
                      key={header.key}
                      scope="col"
                      className="whitespace-nowrap py-3.5 px-2 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      {header.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {events.map((event) => {
                  return (
                    <React.Fragment key={event.id}>
                      <tr className="border-t border-gray-200">
                        <th
                          colSpan={24}
                          scope="colgroup"
                          className="bg-gray-50 py-2 text-left text-sm font-semibold text-gray-900 sm: pl-2"
                        >
                          {event.category}
                        </th>
                      </tr>
                      {event.data.map((item) => {
                        return (
                          <tr key={item.id} className="py-4">
                            <td className="whitespace-nowrap py-6 pl-4 text-sm text-gray-500 sm:pl-0">
                              {item.time}
                            </td>
                            <td className="whitespace-nowrap py-6 text-sm font-medium text-gray-900">
                              <TableTitleSubtitle
                                title={item.policy}
                                subTitle="Policy"
                                verboseLevel={1}
                              />
                            </td>
                            <td className="whitespace-nowrap py-6 text-sm text-gray-900">
                              {item.risk}
                            </td>
                            <td className="whitespace-nowrap py-6 text-sm text-gray-500">
                              <TableLogoDescription
                                logo={eventsMapper[item.event].logo}
                                title={eventsMapper[item.event].name}
                                subText={"Riyadh, Saudi Arabia"}
                              />
                            </td>
                            <td className="whitespace-nowrap py-6 text-sm text-gray-500">
                              <TableLogoDescription
                                logo={devicesMapper[item.device].logo}
                                title={devicesMapper[item.device].name}
                                subText={"Using social sign-on. Facebook"}
                              />
                            </td>
                            <td className="whitespace-nowrap py-6 text-sm text-gray-500">
                              <TableLogoDescription
                                logo={countryMapper[item.country].flag}
                                title={countryMapper[item.country].name}
                                subText={"Riyadh, Saudi Arabia"}
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
