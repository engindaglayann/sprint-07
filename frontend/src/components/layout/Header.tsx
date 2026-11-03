import { useEffect } from "react";
import { useLocation, matchPath } from "react-router-dom";
import { useEvents } from "../../context/EventsContext";
import { findEventById } from "../../utils/filter-events";

const routesMeta = [
    { path: "/", title: "Kampüs Etkinlikleri", text: "Fakültedeki seminer, atölye ve söyleşileri tek yerden takip edin." },
    { path: "/events", title: "Tüm Etkinlikler", text: "Ekim ayında kampüste düzenlenen etkinlikler." },
    { path: "/admin", title: "Etkinlik Yönetimi" },
    { path: "/admin/new", title: "Etkinlik Ekle" },
    { path: "/login", title: "Giriş Yap" },
    { path: "/register", title: "Kayıt Ol" },
    { path: "/forgot-password", title: "Şifremi Unuttum" },
];

function Header() {
    const { pathname } = useLocation();
    const { events } = useEvents();

    const match = matchPath("/events/:id", pathname) ?? matchPath("/admin/:id/edit", pathname);
    const event = match ? findEventById(events, match.params.id ?? "") : undefined;
    const currentRoute = routesMeta.find((r) => matchPath(r.path, pathname));

    const title = event ? event.title : currentRoute ? currentRoute.title : "Sayfa Bulunamadı";
    const text = event ? `${event.category} · ${event.location}` : currentRoute?.text;

    useEffect(() => {
        const site = "Kampüs Etkinlikleri";
        document.title = title === site ? site : `${title} — ${site}`;
    }, [title]);

    return (
        <header className="site-baslik">
            <h1>{title}</h1>
            {text && <p>{text}</p>}
        </header>
    );
}

export default Header;
