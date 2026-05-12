// src/pages/Availability.jsx
import { useEffect } from 'react';
import InquiryFooter from '@/components/InquiryFooter';

export default function AvailabilityPage() {
  // Update the browser tab title when this page loads
  useEffect(() => {
    document.title = "Check Availability | B.MILLS";
    window.scrollTo(0, 0); // Ensure the page starts at the top
  }, []);

  return (
    <main className="pt-24 min-h-screen bg-[#ebe6d9]"> 
      {/* pt-24 ensures the content starts below your fixed navbar */}
      <InquiryFooter 
        headline="Secure the Date."
        body="B.MILLS is currently booking for 2026/2027. Please provide your event details below to confirm availability and receive a tailored proposal."
      />
    </main>
  );
}
