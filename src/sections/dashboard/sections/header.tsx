import { MusicOff } from "@mui/icons-material";

type Props = {
  logo: React.ReactNode;
  text: string;
};
export function LogoText({ logo, text }: Props) {
  return (
    <div className="flex flex-row items-center">
      {logo}
      <p className="ml-2">{text}</p>
    </div>
  );
}

export function DateTimeHeader() {
  return (
    <header className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
      <p className="font-bold text-lg">Explore</p>
    </header>
  );
}

function DashboardHeader() {
  return (
    <header>
      <p className="font-bold text-lg">Explore</p>
      <LogoText logo={<MusicOff/>} text="Logo"/>
      <DateTimeHeader/>
    </header>
  );
}

export default DashboardHeader;
