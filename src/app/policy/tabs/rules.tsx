import PolicyCard from "../components/policyCard"

const _EVENTS = [
    {
        eventType: "Run after All events",
        name: "Policy 1",
        id: "ea1b1b1b-1b1b-1b1b-1b1b-1b1b1b1b1b1b",
        access: "allow"
    }
]

export default function Rules() {
    return (
        <div className="space-y-4 lg:space-y-8">
            <h2 className="font-semibold">1 Policy</h2>
            <div>
                {_EVENTS.map((event) => {
                    return <PolicyCard key={event.id} {...event} />

                })}
            </div>
        </div>
    )
}