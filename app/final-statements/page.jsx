import React from 'react'
import ComplianceBadge from '../../components/ComplianceBadge'
import MysteryGuestSurvey from '../../components/MysteryGuestSurvey'

export default function FinalStatementsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Final Statements</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">
          Welcome Walkthrough Survey{' '}
          <ComplianceBadge name="Walkthrough Survey" />
        </h2>
        <MysteryGuestSurvey />
      </section>

      {/* Any other final‐statements content goes here */}
    </div>
  )
}
