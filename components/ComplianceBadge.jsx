import React from 'react';
import statusData from '../data/caprssStatus.json';

const colors = {
  compliant:   '#28a745',
  draft:       '#fd7e14',
  pending:     '#007bff',
  missing:     '#dc3545',
  default:     '#6c757d'
};

export default function ComplianceBadge({ name }) {
  const item = statusData.sections.find(s => s.name === name);
  const status = item ? item.status : 'default';
  return (
    <span style={{
      backgroundColor: colors[status] || colors.default,
      borderRadius: '4px',
      color: '#fff',
      padding: '0 0.5em',
      fontSize: '0.75rem',
      textTransform: 'uppercase'
    }}>
      {status}
    </span>
  );
}
