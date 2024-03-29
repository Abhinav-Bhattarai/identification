import {
  ChevronLeft,
  ChevronRight,
  Pin,
  RemoveRedEye,
  Search,
} from "@mui/icons-material";
import React from "react";

export function LogoText({
  logo,
  text,
}: {
  logo: React.ReactNode;
  text: string;
  verboseLevel: 0 | 1 | 2;
}) {
  return (
    <div className="flex flex-row items-center">
      {logo}
      <p className="ml-2 text-gray-500 text-sm">{text}</p>
    </div>
  );
}

export function DateTime() {
  return (
    <main
      className="isolate inline-flex -space-x-px rounded-md shadow-sm"
      aria-label="Pagination"
    >
      <a
        href="#"
        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      >
        <span className="px-2 rounded-sm text-[11px] bg-gray-200 mx-2">
          21d
        </span>
        <span className="text-gray-400 text-[11px] font-medium">
          Jan 6, 11:00 pm - Jan 13, 10:30 pm
        </span>
        {/* <ChevronLeft className="h-5 w-5" aria-hidden="true" /> */}
      </a>

      <a
        href="#"
        className="relative inline-flex items-center px-2 py-2 text-sm font-semibold text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      >
        <Search className="h-5 w-5" aria-hidden="true" />
      </a>

      <a
        href="#"
        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      >
        <span className="sr-only">Next</span>
        <Pin className="h-5 w-5" aria-hidden="true" />
      </a>
    </main>
  );
}

export function SubmitButton({ text }: { text: string }) {
  return (
    <button
      type="button"
      className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {text}
    </button>
  );
}

export function Button({ text }: { text: string }) {
  return (
    <button
      type="button"
      className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {text}
    </button>
  );
}

export function LogoButton({ logo }: { logo: React.ReactNode }) {
  return (
    <header className="inline-flex items-center duration-200 ease-in cursor-pointer rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
      {logo}
    </header>
  );
}

export function NavigationButton() {
  return (
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
  );
}

function TableLogoDescription({
  logo,
  title,
  subText,
}: {
  logo: React.ReactNode;
  title: string;
  subText: string;
}) {
  return (
    <div className="flex flex-row items-center">
      {logo}
      <div className="flex flex-col space-y-2 ml-2">
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="text-xs text-gray-500">{subText}</p>
      </div>
    </div>
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

function EventTable() {
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
          event: "Event",
          device: "Mac Os X",
          country: "Saudi Arabia",
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
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Export
          </button>
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
                      className="whitespace-nowrap py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-0"
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
                              {item.policy}
                            </td>
                            <td className="whitespace-nowrap py-6 text-sm text-gray-900">
                              {item.risk}
                            </td>
                            <td className="whitespace-nowrap py-6 text-sm text-gray-500">
                              {item.event}
                            </td>
                            <td className="whitespace-nowrap py-6 text-sm text-gray-500">
                              {item.device}
                            </td>
                            <td className="whitespace-nowrap py-6 text-sm text-gray-500">
                              {item.country}
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

function DashboardHeader() {
  return (
    <header>
      <p className="font-bold text-xl">Explore</p>
      <LogoText
        logo={<RemoveRedEye fontSize="small" sx={{ color: "gray" }} />}
        text="Hide Filters"
        verboseLevel={1}
      />
      <SubmitButton text="Save as view" />
      <LogoButton
        logo={<RemoveRedEye fontSize="small" sx={{ color: "gray" }} />}
      />

      <DateTime />

      <NavigationButton />

      <div>
        <EventTable />
      </div>
    </header>
  );
}

export default DashboardHeader;
