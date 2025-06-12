"use client";

export default function AboutOverview() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16">
        
        <h1 className="text-3xl text-outline-blue text-center font-semibold mb-6">About Recovery on the Harbor</h1>
        <div className="bg-black/50 p-4 rounded-lg">
          <section id="overview" className="scroll-mt-24 mb-6">
            <h2 className="text-2xl font-semibold mb-2">Overview</h2>
            <p className="mb-4">
              Recovery on the Harbor is a peer recovery support center located in Massachusetts. We provide a safe, welcoming environment for people in recovery, and our services are always free for members.
            </p>
          </section>

          <section id="mission-statement" className="scroll-mt-24 mb-6">
            <h2 className="text-2xl font-semibold mb-2">Mission Statement</h2>
            <p>
              Recovery on the Harbor, a program of North Suffolk Community Services, is a member-driven, peer-to-peer recovery support center. We welcome everyone in recovery from substance use disorder—and those affected by it—to participate in peer-facilitated support groups, job readiness resources, sober social events, advocacy, recovery coaching, volunteer opportunities, and health and wellness activities. All services are free of charge and designed to benefit both individuals in recovery and the community at large. The only membership requirements are a commitment to recovery, active participation in the center’s activities, and being at least 18 years old (children are welcome under parental supervision).
            </p>
          </section>

          <section id="vision-statement" className="scroll-mt-24 mb-6">
            <h2 className="text-2xl font-semibold mb-2">Vision Statement</h2>
            <p>
              Our vision is to create a compassionate, inclusive community where individuals in recovery from addiction are empowered to reclaim their lives, build meaningful connections, and thrive in a supportive environment. We strive to be a beacon of hope, fostering resilience, growth, and sustained recovery for all.
            </p>
          </section>

          <section id="values-statement" className="scroll-mt-24 mb-6">
            <h2 className="text-2xl font-semibold mb-2">Values Statement</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Compassion:</strong> We approach each individual with empathy and understanding, recognizing the unique challenges and experiences of their recovery journey.</li>
              <li><strong>Inclusivity:</strong> We embrace diversity in all its forms, ensuring that everyone feels welcomed, respected, and valued regardless of background, identity, or circumstances.</li>
              <li><strong>Empowerment:</strong> We believe in the inherent strength of each person and are dedicated to providing the tools, resources, and encouragement needed for individuals to take charge of their recovery.</li>
              <li><strong>Community:</strong> We foster a sense of belonging and connection, creating a supportive network where individuals can share their experiences, challenges, and successes with others who understand.</li>
              <li><strong>Respect:</strong> We honor the dignity and autonomy of every individual, promoting an environment where people are treated with fairness, integrity, and kindness.</li>
              <li><strong>Growth:</strong> We are committed to continuous learning and personal development, encouraging individuals to explore new possibilities and achieve their full potential.</li>
              <li><strong>Collaboration:</strong> We believe in the power of working together, building partnerships with other organizations, professionals, and the broader community to provide comprehensive support for recovery.</li>
              <li><strong>Hope:</strong> We maintain an unwavering belief in the possibility of recovery, inspiring optimism and perseverance in the face of adversity.</li>
            </ul>
          </section>

          <section id="code-of-conduct" className="scroll-mt-24 mb-6">
            <h2 className="text-2xl font-semibold mb-2">Code of Conduct</h2>
            <ul className="list-decimal ml-6 space-y-1">
              <li>Respect each other and the community space.</li>
              <li>We recognize that we all come from different walks of life and welcome guidance and support from members and staff; we work together, not against each other.</li>
              <li>We promote positive language &amp; attitudes.</li>
              <li>We do not condone profanity, gossip, or shaming. There should not be any verbal or physical intimidation. This applies to staff and community members.</li>
              <li>Clean up after you use a space—including the living room area, countertops, and any dishes used.</li>
              <li>We encourage group participation in the center. During the times of Recovery meetings (Coffee Talk, 12-Step Meetings, and Refuge Recovery), members may not use computers, TVs, or hangouts.</li>
              <li>No sleeping or lying on the sofas or bean bag chairs.</li>
              <li>Recovery on the Harbor provides a safe environment for all members and staff. Do not bring drugs or paraphernalia into the center. If you present, or smell under the influence, center staff may ask you to leave. Continued violations may result in a 30-day ban.</li>
              <li>Inappropriate behavior will not be tolerated.</li>
              <li>Parents are responsible for their children at ALL TIMES.</li>
            </ul>
          </section>

          <section id="code-of-ethics" className="scroll-mt-24 mb-6">
            <h2 className="text-2xl font-semibold mb-2">Code of Ethics</h2>
            <ul className="list-decimal ml-6 space-y-1">
              <li>The primary responsibility of members is to help those around them achieve recovery.</li>
              <li>Believe that every individual has strengths and the ability to grow.</li>
              <li>Members respect the rights and dignity of those around them.</li>
              <li>Willing to openly share personal recovery stories with peers.</li>
              <li>Seek to be a role model.</li>
              <li>Respect the privacy and confidentiality of those in the community.</li>
              <li>Never intimidate, threaten, or harass each other.</li>
              <li>Never use physical force or verbal abuse with those in the community.</li>
              <li>We do not condone any form of discrimination on the basis of race, sexual orientation, religion, ethnicity, gender, political beliefs, age, mental or physical disabilities.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
