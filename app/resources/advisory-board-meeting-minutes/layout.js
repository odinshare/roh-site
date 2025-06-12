import React from "react";

export const metadata = {
  title: "Advisory Board Meeting Minutes – ROH",
};

export default function AdvisoryBoardMeetingLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner with semi-transparent overlay */}
      <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/board-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-4xl mx-auto p-8 text-white">
          <h1 className="text-4xl text-center font-bold  mb-2">Advisory Board Meeting Minutes</h1>
          <p className="text-lg text-center text-outline-blue">
            Our Advisory Board brings together staff, seasoned peer leaders, and key community stakeholders to translate member-driven input into actionable strategy. <br/>
            Meeting quarterly (or for an emergency voting session), the board evaluates suggestions and recommendations gathered at the community meetings, assesses logistical feasibility, and makes official governance decisions on behalf of the membership. <br/>
            While these sessions aren’t open to the public, their minutes remain fully accessible to all members, ensuring transparency and accountability. By grounding every policy and program choice in peer-centered insight and community need, the board safeguards Recovery on the Harbor’s mission and keeps our center truly peer-owned.
          </p>
        </div>
      </div>

      {/* Page content */}
      <main className="max-w-4xl mx-auto p-6 bg-white shadow-md -mt-8 rounded-t-lg">
        {children}
      </main>
    </div>
  );
}
