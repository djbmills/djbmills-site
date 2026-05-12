import { useEffect } from 'react';
import InquiryFooter from '@/components/InquiryFooter';

// Renamed to 'Availability' to match your App.jsx import
export default function Availability() {
  useEffect(() => {
    document.title = "Check Availability | B.MILLS";
    window.scrollTo(0, 0); 
  }, []);

  return (
    <main className="pt-24 min-h-screen bg-[#ebe6d9]"> 
      <InquiryFooter 
        headline="Secure the Date."
        body="B.MILLS is currently booking for 2026/2027. Please provide your event details below to confirm availability and receive a tailored proposal."
      />
    </main>
  );
}
