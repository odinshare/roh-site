"use client";

import Head from "next/head";

export default function CalendarPage() {
  return (
    <>
      <Head>
        <title>Recovery on the Harbor – Events Calendar</title>
      </Head>

      <section className="min-h-screen bg-white p-4 md:p-8 flex flex-col items-center">
        <div className="max-w-3xl w-full text-outline-blue text-center mb-6">
          <h1 className="text-4xl font-bold text-[var(--primary-blue)] mb-2">
            Calendar
          </h1>
          <p className="text-white-700 text-outline-blue text-lg">
            Below is our live event calendar. Scroll or swipe to navigate.
          </p>
        </div>

        {/* Responsive iframe wrapper: 4:3 aspect on small, 16:9 on md+ */}
        <div className="w-full max-w-4xl">
          <div className="relative pb-[75%] md:pb-[56.25%] border rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&showNav=0&showTabs=0&showTz=0&showCalendars=0&src=OGU5YjVmMmRjOWRlZWVhZGVjOGRiMTg1YjU2OTkzMDc2MWE3ZWUwOGRhMjRmZjM1MWE1OWJiMjNhZGFkZjE0MEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23b39ddb&color=%230b8043"
              className="absolute inset-0 w-full h-full"
              style={{ border: "solid 1px #777" }}
              frameBorder="0"
              scrolling="no"
              title="Recovery on the Harbor Events"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
