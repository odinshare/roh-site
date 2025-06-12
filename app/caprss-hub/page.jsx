import React from 'react'
import ComplianceBadge from '../../components/ComplianceBadge'

export default function CaprssHubPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">CAPRSS Documentation Hub</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">
          Mission Statement{' '}
          <ComplianceBadge name="Mission Statement" />
        </h2>
        <a
          className="text-blue-600 underline"
          href="/docs/MISSION_STATEMENT_ROH.pdf"
        >
          Download PDF
        </a>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">
          Vision &amp; Values{' '}
          <ComplianceBadge name="Vision & Values" />
        </h2>
        <a
          className="text-blue-600 underline"
          href="/docs/VISION_VALUES_ROH.pdf"
        >
          Download PDF
        </a>
      </section>

      {/* Repeat that pattern for Volunteer, Peer Leader, Code of Ethics, etc. */}
    </div>
  )
}
