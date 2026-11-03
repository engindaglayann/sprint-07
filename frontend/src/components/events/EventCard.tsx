import { Link } from "react-router-dom";
import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventCardProps {
    event: CampusEvent;
}

function EventCard({ event }: EventCardProps) {
    return (
        <article className="kart">
            {event.image && (
                <img 
                    src={event.image} 
                    alt={`${event.title} Afişi`} 
                    style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "4px", marginBottom: "1rem" }} 
                />
            )}
            <h3 style={{ marginTop: 0 }}>{event.title}</h3>
            <p>
                <span className="kart-kategori">{event.category}</span> &middot; {formatDate(event.date)}
            </p>
            <p>{event.location}</p>
            <p>
                <Link to={`/events/${event.id}`} className="kart-link">
                    Detayları gör &rarr;
                </Link>
            </p>
        </article>
    );
}

export default EventCard;
