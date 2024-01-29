import { Add, Close, Commit, MoreVert, Person, Smartphone } from "@mui/icons-material"
import React from "react"

interface ISTATBUTTONPROPS {
    icon: React.ReactNode,
    type: string,
    count: number,
    isFirstButton?: boolean
}

const _STATS = [
    {
        icon: <Commit fontSize="small" htmlColor="blue" />,
        type: "Event",
        count: 1242
    },
    {
        icon: <Smartphone fontSize="small" />,
        type: "Device",
        count: 4,
    },
    {
        icon: <Person fontSize="small" />,
        type: "User",
        count: 12305
    }
]

const StatButton: React.FC<ISTATBUTTONPROPS> = React.memo(({ icon, type, count, isFirstButton }) => {
    return <>
        <div className={`flex items-center gap-2 py-2 px-4 text-sm font-semibold ${isFirstButton ? 'text-black bg-[#f6f5f5] mr-4 rounded-sm' : 'text-gray-500'}`}>
            {icon}
            <p>{count.toLocaleString('en-us')}&nbsp;{type}s</p>
            {!isFirstButton && <Close fontSize="small" sx={{ color: "gray" }} />}
        </div>
        <div className="h-[20px] w-[1px] bg-gray-400"></div>
    </>
})

StatButton.displayName = "StatButton"



export default function Statbar() {
    return <div className="flex items-center flex-wrap text-sm px-4 lg:px-8">
        {_STATS.map((stat, index) => <StatButton key={stat.type} {...stat} isFirstButton={index === 0} />)}
        <div className="flex items-center gap-2 pl-4 text-sm font-semibold text-gray-500">
            <MoreVert fontSize="small" sx={{ color: "gray" }} />
            More
        </div>
    </div>
}