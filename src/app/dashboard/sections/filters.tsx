import { Add, Commit, Error, WatchLater } from "@mui/icons-material"
import React from "react"

interface IFILTERCHIPPROPS {
    icon: React.ReactNode,
    type: string,
    value: string,
    index: number
}

const _FILTERS = [
    {
        icon: <Commit fontSize="small" />,
        type: "Event",
        value: "Registration Attempted"
    },
    {
        icon: <Error fontSize="small" />,
        type: "Policy Action",
        value: "Deny"
    },
    {
        icon: <WatchLater fontSize="small" />,
        type: "Timezone Offset (UTC)",
        value: "-12:00~+14:00"
    }
]

const FilterChip: React.FC<IFILTERCHIPPROPS> = React.memo(({ icon, type, value, index }) => {
    return <div className="flex items-center gap-2 bg-white rounded-sm py-2 px-4 border border-gray-300 text-sm shadow-sm font-medium">
        {icon}
        <p><span>{type}</span> is <span className="font-bold">{value}</span></p>
        {index !== _FILTERS.length - 1 && <span className="text-gray-500 font-semibold">and</span>}
    </div>
})

FilterChip.displayName = "FilterChip"



export default function Filters() {
    return <div className="bg-[#f6f5f5] rounded-sm p-4 flex items-center gap-2 flex-wrap text-sm mx-4 lg:mx-8">
        {_FILTERS.map((filter, index) => <FilterChip key={filter.type} {...filter} index={index} />)}
        <div className="flex items-center gap-2 lg:gap-4">
            <button type="button" className="text-gray-500 flex items-center gap-2 font-semibold">
                <Add fontSize="small" sx={{ color: "gray" }} />
                <p>Add filter </p>
            </button>
            <button type="button" className="text-gray-500 font-semibold">
                <p>Reset</p>
            </button>
        </div>
    </div>
}
