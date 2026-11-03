import { Link } from "react-router-dom";
import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventDetailProps {
    event: CampusEvent;
}

function EventDetail({ event }: EventDetailProps) {
    return (
        <article className="detay">
            <div className="detay-ust">
                {event.image && (
                    <figure>
                        <img 
                            src={event.image} 
                            alt={event.title} 
                            style={{ width: "100%", maxHeight: "400px", objectFit: "cover", borderRadius: "8px" }} 
                        />
                        <figcaption>{event.title}</figcaption>
                    </figure>
                )}
                <aside className="kunye">
                    <h2>Etkinlik Bilgileri</h2>
                    <dl>
                        <dt>Tarih</dt>
                        <dd>{formatDate(event.date)}</dd>
                        <dt>Saat</dt>
                        <dd>{event.time}</dd>
                        <dt>Yer</dt>
                        <dd>{event.location}</dd>
                        <dt>Kategori</dt>
                        <dd><span className="kart-kategori">{event.category}</span></dd>
                        <dt>Kontenjan</dt>
                        <dd>{event.capacity} kişi</dd>
                    </dl>
                </aside>
            </div>
            <p style={{ marginTop: "1.5rem" }}>{event.description}</p>
            <div className="form-baglantilar" style={{ marginTop: "1.5rem" }}>
                <Link to="/events" className="buton">
                    &larr; Listeye dön
                </Link>
                <Link to={`/admin/${event.id}/edit`} className="buton">
                    Bu etkinliği güncelle
                </Link>
            </div>
        </article>
    );
}

export default EventDetail;
