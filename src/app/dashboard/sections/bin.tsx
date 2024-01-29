import { ChevronLeft, ChevronRight } from "@mui/icons-material";

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
  