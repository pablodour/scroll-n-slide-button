import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    option: '',
    purchaseTShirt: false,
    tShirtType: '',
    tShirtSize: '',
    trainingType: '',
    sessionType: '',
    message: '',
  });

  const trainingOptions = [
    "Individual Training (60 min)",
    "Individual Training (30 min)",
    "Duo Training (60 min)",
    "Duo Training (30 min)",
    "Small Group Training"
  ];

  const sessionOptions = {
    "Individual Training (60 min)": ["Single Session", "Package (5, 10, 20 hours)", "Monthly Subscription (1-5 hours/week)"],
    "Individual Training (30 min)": ["Single Session", "Package (5, 10, 20 hours)", "Monthly Subscription (1-5 sessions/week)"],
    "Duo Training (60 min)": ["Single Session", "Package (5, 10, 20 hours)", "Monthly Subscription (1-5 hours/week)"],
    "Duo Training (30 min)": ["Single Session", "Package (5, 10, 20 hours)", "Monthly Subscription (1-5 sessions/week)"],
    "Small Group Training": ["Single Session", "Weekly Plan (1-5 sessions/week)"]
  };

  const tShirtOptions = ["Men", "Women"];
  const tShirtSizes = ["S", "M", "L", "XL", "XXL"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || (!formData.option)) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-primary p-4 sm:p-6 lg:p-8 animate-fade-in">
      <button
        onClick={() => navigate('/')}
        className="mb-8 px-4 py-2 text-text hover:text-text-light transition-colors"
      >
        ← Back
      </button>
      
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10">
        <h1 className="text-3xl font-semibold text-text mb-8">Contact Us</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="text-1xl font-medium text-text mb-8">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="text-1xl font-medium text-text mb-8">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
              required
            />
          </div>
          
          <div>
            <label className="text-1xl font-medium text-text mb-8">What would you like?</label>
            <select
              value={formData.option}
              onChange={(e) => setFormData({ ...formData, option: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
              required
            >
              <option value="">Select an option</option>
              <option value="tshirt">T-Shirt</option>
              <option value="training">Training</option>
              <option value="both">T-Shirt & Training</option>
            </select>
          </div>

          {formData.option.includes("tshirt") && (
            <>
              <div>
                <label htmlFor="tShirtType" className="text-1xl font-medium text-text mb-8">T-Shirt Type</label>
                <select
                  id="tShirtType"
                  value={formData.tShirtType}
                  onChange={(e) => setFormData({ ...formData, tShirtType: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                  required
                >
                  <option value="">Select Type</option>
                  {tShirtOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="tShirtSize" className="text-1xl font-medium text-text mb-8">Size</label>
                <select
                  id="tShirtSize"
                  value={formData.tShirtSize}
                  onChange={(e) => setFormData({ ...formData, tShirtSize: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                  required
                >
                  <option value="">Select Size</option>
                  {tShirtSizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>
            </>
          )}
          
          <button
            type="submit"
            className="w-full bg-text text-white py-3 rounded-lg hover:bg-text-light transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
