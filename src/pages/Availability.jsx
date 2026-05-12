import { useEffect } from 'react';
import InquiryFooter from '../components/InquiryFooter'; // Changed from @ to ../

export default function Availability() {
  useEffect(() => {
    document.title = "Check Availability | B.MILLS";
    window.scrollTo(0, 0); 
  }, []);

  return (
    <main className="pt-24 min-h-screen bg-[#ebe6d9]"> 
      <InquiryFooter 
        headline="Secure the Date."
        body="B.MILLS is currently booking for late 2026/2027. Please provide your event details to confirm availability and receive a tailored proposal."
      />
    </main>
  );
}
