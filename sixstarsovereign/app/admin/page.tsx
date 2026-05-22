import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";

export default async function AdminDashboardPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <main className="min-h-screen bg-black px-6 py-32 text-white">
      <section className="mx-auto w-full max-w-6xl">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold uppercase md:text-6xl">
            Admin Dashboard
          </h1>
          <p className="mt-4 text-zinc-400">Logged in as {session.email}</p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Events Form */}
          <div className="border border-white/10 bg-zinc-950 p-6">
            <h2 className="text-2xl font-bold uppercase">Add New Event</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Create a new event for the events page.
            </p>

            <form className="mt-8 flex flex-col gap-4">
              <input
                name="title"
                placeholder="Event Title"
                className="border border-white/10 bg-black px-4 py-3 outline-none"
              />

              <input
                name="date"
                placeholder="Date ex: June 7th, 2026"
                className="border border-white/10 bg-black px-4 py-3 outline-none"
              />

              <input
                name="time"
                placeholder="Time ex: 9am - 5pm"
                className="border border-white/10 bg-black px-4 py-3 outline-none"
              />

              <input
                name="location"
                placeholder="Location ex: Stafford Springs, CT"
                className="border border-white/10 bg-black px-4 py-3 outline-none"
              />

              <input
                name="address"
                placeholder="Google Maps address/query"
                className="border border-white/10 bg-black px-4 py-3 outline-none"
              />

              <textarea
                name="description"
                placeholder="Event Description"
                rows={4}
                className="resize-none border border-white/10 bg-black px-4 py-3 outline-none"
              />

              <div className="border border-dashed border-white/20 bg-black p-6 text-center">
                <p className="text-sm font-semibold uppercase text-zinc-300">
                  Event Image
                </p>
                <input
                  type="file"
                  accept="image/*"
                  className="mt-4 w-full text-sm text-zinc-400 cursor-pointer hover:scale-105 transition-all"
                />
              </div>

              <button
                type="submit"
                className="mt-4 bg-white px-5 py-3 font-bold uppercase text-black transition cursor-pointer hover:bg-zinc-300"
              >
                Add Event
              </button>
            </form>
          </div>

          {/* Media Form */}
          <div className="border border-white/10 bg-zinc-950 p-6">
            <h2 className="text-2xl font-bold uppercase">Upload Media</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Add new photos to the media/gallery section.
            </p>

            <form className="mt-8 flex flex-col gap-4">
              <input
                name="sectionTitle"
                placeholder="Section Title ex: Wicked Big Meet"
                className="border border-white/10 bg-black px-4 py-3 outline-none"
              />

              <input
                name="caption"
                placeholder="Photo Caption"
                className="border border-white/10 bg-black px-4 py-3 outline-none"
              />

              <input
                name="category"
                placeholder="Category ex: Meets, Cruises, Builds"
                className="border border-white/10 bg-black px-4 py-3 outline-none "
              />

              <div className="border border-dashed border-white/20 bg-black p-10 text-center ">
                <p className="text-sm font-semibold uppercase text-zinc-300">
                  Upload Photo
                </p>
                <p className="mt-2 text-xs text-zinc-500">
                  Select an image to upload to Cloudinary.
                </p>

                <input
                  type="file"
                  accept="image/*"
                  className="mt-6 w-full text-sm text-zinc-400 cursor-pointer hover:scale-105 transition-all"
                />
              </div>

              <button
                type="submit"
                className="mt-4 bg-white px-5 py-3 font-bold uppercase text-black transition cursor-pointer hover:bg-zinc-300"
              >
                Upload Photo
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}