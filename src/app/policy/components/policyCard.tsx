function Chip({ content }: { content: string }) {
    return <span className="block w-fit bg-primary/10 font-semibold text-sm px-2 py-[2px] rounded-md text-primary">
        {content}
    </span>
}

export default function PolicyCard({ eventType, name, id, access }: { eventType: string, name: string, id: string, access: string }) {
    return <article className="space-y-2 lg:space-y-4">
        <p className="text-sm text-muted-foreground font-medium">{eventType}</p>
        <div className="border border-border rounded-md p-2 lg:p-4 space-y-2 lg:space-y-4">
            <div className="flex items-center gap-4 flex-wrap">
                <p className="font-medium text-sm">{name}</p>
                <div className="h-4 bg-primary/50 w-[1px]"></div>
                <p className="font-semibold text-xs text-muted-foreground">ID:{id}</p>
            </div>
            <Chip content={access} />
        </div>
    </article>
}