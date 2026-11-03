import type { CampusEvent } from "../../types/campus-event";
import EventCard from "./EventCard";

interface EventListProps {
    events: CampusEvent[];
    emptyText?: string;
}

function EventList({ events, emptyText = "Bulunamadı" }: EventListProps) {
    if (events.length === 0) {
        return emptyText ? <p className="sonuc" style={{ marginBottom: "1rem" }}>{emptyText}</p> : null;
    }

    return (
        <section className="etkinlik-listesi">
            {events.map((event) => (
                <EventCard 
                    key={event.id} 
                    event={event} 
                />
            ))}
        </section>
    );
}

export default EventList;
