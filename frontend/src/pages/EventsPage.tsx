import { useState } from "react";
import { useEvents } from "../context/EventsContext";
import type { Category } from "../types/campus-event";
import { searchEvents, filterByCategory } from "../utils/filter-events";
import EventFilter from "../components/events/EventFilter";
import EventList from "../components/events/EventList";

function EventsPage() {
    const { events } = useEvents();
    const [searchText, setSearchText] = useState("");
    const [category, setCategory] = useState<Category | "">("");

    const categories = [...new Set(events.map((e) => e.category))] as Category[];
    const filtered = filterByCategory(searchEvents(events, searchText), category);

    return (
        <>
            <h2 className="bolum-baslik">Tüm Etkinlikler</h2>
            <EventFilter
                searchText={searchText}
                category={category}
                categories={categories}
                onSearchChange={setSearchText}
                onCategoryChange={setCategory}
            />
            <p className="sonuc" style={{ marginBottom: "1rem" }}>
                {filtered.length === 0 ? "Bulunamadı" : `${filtered.length} etkinlik listeleniyor.`}
            </p>
            <EventList events={filtered} emptyText="Aramanıza uygun etkinlik bulunamadı." />
        </>
    );
}

export default EventsPage;
