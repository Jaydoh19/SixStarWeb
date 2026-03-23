import events from "@/data/events.json";
import type { Event } from "@/types/event";

export function getEvents(): Event[] {
  return events as Event[];
}