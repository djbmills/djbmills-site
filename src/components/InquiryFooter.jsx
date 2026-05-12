const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.eventDate) {
      setSubmitStatus('Please select an event date.');
      return;
    }
    setIsSubmitting(true);
    
    const encode = (data) => Object.keys(data).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(data[k] ?? '')}`).join('&');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'inquiry', ...formData, eventDate: format(formData.eventDate, 'MMMM d, yyyy') })
      });
      
      if (!response.ok) throw new Error();
      
      setSubmitStatus('Inquiry Sent. Expect a response within 24 hours. Connecting you to the music...');
      
      setTimeout(() => {
        const mixtapesSection = document.getElementById('mixtapes');
        
        if (mixtapesSection) {
          // If the section exists on this page (Home Page)
          const offsetTop = mixtapesSection.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: offsetTop - 80, behavior: 'smooth' });
        } else {
          // If the section DOES NOT exist (Corporate, Availability, etc.)
          // This will take them to the Home page and jump to the music
          window.location.href = '/#mixtapes';
        }
      }, 2800);

    } catch (error) {
      setSubmitStatus('Something went wrong. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };
