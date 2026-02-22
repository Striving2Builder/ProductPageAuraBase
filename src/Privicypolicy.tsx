import React from 'react';
import PrivacyPolicyView from '../PrivacyPolicy';

const PrivacyPolicyPage: React.FC = () => {
  // No back button for direct route
  return <PrivacyPolicyView onBack={() => { window.location.href = '/'; }} />;
};

export default PrivacyPolicyPage;
