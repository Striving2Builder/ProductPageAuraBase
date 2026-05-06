import React from 'react';
import TermsOfUseView from '../TermsOfUse';

const TermsOfUsePage: React.FC = () => {
  return <TermsOfUseView onBack={() => { window.location.href = '/'; }} />;
};

export default TermsOfUsePage;
