import RequestCallbackForm from '../rcallback';
const Contacts = () => {
  return (
    <div className="contacts-container">
      <h1 className="contacts-heading">Contact Us</h1>
      <div className="contacts-details">
        <div className="contact-item">
          <h3>Mobile Number</h3>
          <p>+91 8169225341</p>
        </div>
        <div className="contact-item">
          <h3>Email</h3>
          <p>swastyahealthcarecentres@gmail.com</p>
        </div>
        <div className="contact-item">
          <h3>Location</h3>
          <p>Mumbai</p>
        </div>
        <RequestCallbackForm />
      </div>
    </div>
  );
};

export default Contacts;
