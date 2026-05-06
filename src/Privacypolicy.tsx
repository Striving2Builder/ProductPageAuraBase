import React from 'react';
import PrivacyPolicyView from '../PrivacyPolicy';

const PrivacyPolicyPage: React.FC = () => {
  return <PrivacyPolicyView onBack={() => { window.location.href = '/'; }} />;
};

export default PrivacyPolicyPage;
