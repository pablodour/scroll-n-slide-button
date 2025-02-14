import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Notification from "../components/Notification";

const Contact = () => {
  const navigate = useNavigate();

  // Training registration state
  const [trainingData, setTrainingData] = useState({
    name: '',
    email: '',
    trainingType: '',
    sessionType: '',
    packageHours: '',
    weeklyHours: '',
    dayTime: '',
  });

  // T-Shirt order state (includes name, email, and an array of orders)
  const [tshirtData, setTshirtData] = useState({
    name: '',
    email: '',
    orders: [{ tShirtType: '', tShirtSize: '' }],
  });

  const [trainingMsg, setTrainingMsg] = useState('');
  const [tshirtMsg, setTshirtMsg] = useState('');

  const trainingOptions = [
    "Individual Training (60 min)",
    "Individual Training (30 min)",
    "Duo Training (60 min)",
    "Duo Training (30 min)",
    "Small Group Training"
  ];

  const sessionOptions = {
    "Individual Training (60 min)": ["Single Session", "Package (5, 10, 20 hours)", "Monthly Subscription (1-5 sessions/week)"],
    "Individual Training (30 min)": ["Single Session", "Package (5, 10, 20 hours)", "Monthly Subscription (1-5 sessions/week)"],
    "Duo Training (60 min)": ["Single Session", "Package (5, 10, 20 hours)", "Monthly Subscription (1-5 sessions/week)"],
    "Duo Training (30 min)": ["Single Session", "Package (5, 10, 20 hours)", "Monthly Subscription (1-5 sessions/week)"],
    "Small Group Training": ["Single Session", "Monthly Subscription (1-5 sessions/week)"]
  };

  const tShirtOptions = ["Men", "Women"];
  const tShirtSizes = ["S", "M", "L", "XL", "XXL"];
  const packageHourOptions = ["5", "10", "20"];
  const weeklyHoursOptions = ["1", "2", "3", "4", "5"];
  const dayTimeOptions = ["Morning", "Afternoon", "Evening"];

  // Function to send email via EmailJS
  const sendEmail = (templateId, variables) => {
    return emailjs.send('web_alex', templateId, variables, 'iQ0PiUkN0BWHBIu-h');
  };

  // Handle training form submission
  const handleTrainingSubmit = (e) => {
    e.preventDefault();
    const templateId = 'template_wb1nmij';
    const variables = {
      name: trainingData.name,
      email: trainingData.email,
      trainingType: trainingData.trainingType,
      sessionType: trainingData.sessionType,
      packageHours: trainingData.sessionType === "Package (5, 10, 20 hours)" ? trainingData.packageHours : '',
      weeklyHours: trainingData.sessionType === "Monthly Subscription (1-5 sessions/week)" ? trainingData.weeklyHours : '',
      dayTime: trainingData.dayTime,
      from_name: trainingData.name,
      to_name: 'Recipient Name',
      message:
        `Training registration: ${trainingData.trainingType}, ${trainingData.sessionType}` +
        (trainingData.sessionType === "Package (5, 10, 20 hours)" ? ` (${trainingData.packageHours} hours)` : '') +
        (trainingData.sessionType === "Monthly Subscription (1-5 sessions/week)" ? ` (${trainingData.weeklyHours} hours per week)` : '') +
        `, ${trainingData.dayTime}`,
    };

    sendEmail(templateId, variables)
      .then((result) => {
        console.log('Email sent:', result.text);
        setTrainingMsg('Registration submitted successfully!');
        setTrainingData({
          name: '',
          email: '',
          trainingType: '',
          sessionType: '',
          packageHours: '',
          weeklyHours: '',
          dayTime: '',
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        setTrainingMsg('An error occurred. Please try again later.');
      });
  };

  // Handle t-shirt form submission
  const handleTshirtSubmit = (e) => {
    e.preventDefault();
    const templateId = 'template_tshirt';
    // Create a summary string of all t-shirt orders
    const ordersString = tshirtData.orders
      .map((order, index) => `Order ${index + 1}: Type: ${order.tShirtType}, Size: ${order.tShirtSize}`)
      .join('\n');

    const variables = {
      name: tshirtData.name,
      email: tshirtData.email,
      orders: ordersString,
      from_name: tshirtData.name,
      to_name: 'Recipient Name',
      message: ordersString,
    };

    sendEmail(templateId, variables)
      .then((result) => {
        console.log('Email sent:', result.text);
        setTshirtMsg('T-Shirt order submitted successfully!');
        setTshirtData({
          name: '',
          email: '',
          orders: [{ tShirtType: '', tShirtSize: '' }],
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        setTshirtMsg('An error occurred. Please try again later.');
      });
  };

  // Add a new t-shirt order row
  const addTshirtOrder = () => {
    setTshirtData({
      ...tshirtData,
      orders: [...tshirtData.orders, { tShirtType: '', tShirtSize: '' }],
    });
  };

  // Remove a t-shirt order row
  const removeTshirtOrder = (index) => {
    const newOrders = tshirtData.orders.filter((_, i) => i !== index);
    setTshirtData({ ...tshirtData, orders: newOrders });
  };

  // Handle change for a specific t-shirt order
  const handleTshirtOrderChange = (index, field, value) => {
    const newOrders = tshirtData.orders.map((order, i) => {
      if (i === index) {
        return { ...order, [field]: value };
      }
      return order;
    });
    setTshirtData({ ...tshirtData, orders: newOrders });
  };

  return (
    <div className="min-h-screen bg-primary p-4 sm:p-6 lg:p-8 animate-fade-in">
      <button
        onClick={() => navigate('/')}
        className="mb-8 px-4 py-2 text-text hover:text-text-light transition-colors"
      >
        ← Back
      </button>

      {/* Training Registration Form */}
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10">
        <h1 className="text-3xl font-semibold text-text mb-8">Training Registration</h1>
        <form onSubmit={handleTrainingSubmit} className="space-y-6">
          <div>
            <label htmlFor="trainingName" className="text-1xl font-medium text-text mb-2">Name</label>
            <input
              type="text"
              id="trainingName"
              value={trainingData.name}
              onChange={(e) => setTrainingData({ ...trainingData, name: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
              required
            />
          </div>
          <div>
            <label htmlFor="trainingEmail" className="text-1xl font-medium text-text mb-2">Email</label>
            <input
              type="email"
              id="trainingEmail"
              value={trainingData.email}
              onChange={(e) => setTrainingData({ ...trainingData, email: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
              required
            />
          </div>
          <div>
            <label htmlFor="trainingType" className="text-1xl font-medium text-text mb-2">Training Type</label>
            <select
              id="trainingType"
              value={trainingData.trainingType}
              onChange={(e) => setTrainingData({ ...trainingData, trainingType: e.target.value, sessionType: '', packageHours: '' })}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
              required
            >
              <option value="">Select Training Type</option>
              {trainingOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          {trainingData.trainingType && (
            <>
              <div>
                <label htmlFor="sessionType" className="block text-sm font-medium text-text mb-2">Session Type</label>
                <select
                  id="sessionType"
                  value={trainingData.sessionType}
                  onChange={(e) => setTrainingData({ ...trainingData, sessionType: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                  required
                >
                  <option value="">Select Session Type</option>
                  {sessionOptions[trainingData.trainingType]?.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              {trainingData.sessionType === "Package (5, 10, 20 hours)" && (
                <div>
                  <label htmlFor="packageHours" className="block text-sm font-medium text-text mb-2">Select Package Hours</label>
                  <select
                    id="packageHours"
                    value={trainingData.packageHours}
                    onChange={(e) => setTrainingData({ ...trainingData, packageHours: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                    required
                  >
                    <option value="">Select Hours</option>
                    {packageHourOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              )}
              {trainingData.sessionType === "Monthly Subscription (1-5 sessions/week)" && (
              <div>
                <label htmlFor="weeklyHours" className="block text-sm font-medium text-text mb-2">
                  Weekly Hours
                </label>
                <select
                  id="weeklyHours"
                  value={trainingData.weeklyHours}
                  onChange={(e) => setTrainingData({ ...trainingData, weeklyHours: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                  required
                >
                  <option value="">Select Weekly Hours</option>
                  {weeklyHoursOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            )}
              <div>
                <label htmlFor="dayTime" className="block text-sm font-medium text-text mb-2">Daytime</label>
                <select
                  id="dayTime"
                  value={trainingData.dayTime}
                  onChange={(e) => setTrainingData({ ...trainingData, dayTime: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                  required
                >
                  <option value="">Select Daytime</option>
                  {dayTimeOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </>
          )}
          <button
            type="submit"
            className="w-full bg-text text-white py-3 rounded-lg hover:bg-primary hover:text-text-light transition-colors"
          >
            Register for Training
          </button>
          {trainingMsg && <div className="mt-4 text-green-600">{trainingMsg}</div>}
        </form>
        {trainingMsg && (
        <Notification message={trainingMsg} onClose={() => setTrainingMsg("")} />
      )}
      </div>

      {/* T-Shirt Order Form */}
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10 mt-10">
        <h1 className="text-3xl font-semibold text-text mb-8">T-Shirt Order</h1>
        <form onSubmit={handleTshirtSubmit} className="space-y-6">
          <div>
            <label htmlFor="tshirtName" className="text-1xl font-medium text-text mb-2">Name</label>
            <input
              type="text"
              id="tshirtName"
              value={tshirtData.name}
              onChange={(e) => setTshirtData({ ...tshirtData, name: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
              required
            />
          </div>
          <div>
            <label htmlFor="tshirtEmail" className="text-1xl font-medium text-text mb-2">Email</label>
            <input
              type="email"
              id="tshirtEmail"
              value={tshirtData.email}
              onChange={(e) => setTshirtData({ ...tshirtData, email: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-1xl font-medium text-text mb-2">T-Shirt Orders</label>
            {tshirtData.orders.map((order, index) => (
              <div key={index} className="mb-4 border p-4 rounded-lg">
                <div>
                  <label htmlFor={`tShirtType-${index}`} className="block text-sm font-medium text-text mb-1">T-Shirt Type</label>
                  <select
                    id={`tShirtType-${index}`}
                    value={order.tShirtType}
                    onChange={(e) => handleTshirtOrderChange(index, 'tShirtType', e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                    required
                  >
                    <option value="">Select Type</option>
                    {tShirtOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="mt-2">
                  <label htmlFor={`tShirtSize-${index}`} className="block text-sm font-medium text-text mb-1">T-Shirt Size</label>
                  <select
                    id={`tShirtSize-${index}`}
                    value={order.tShirtSize}
                    onChange={(e) => handleTshirtOrderChange(index, 'tShirtSize', e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                    required
                  >
                    <option value="">Select Size</option>
                    {tShirtSizes.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
                {tshirtData.orders.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeTshirtOrder(index)}
                    className="mt-2 text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addTshirtOrder}
              className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Add T-Shirt
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-text text-white py-3 rounded-lg hover:bg-primary hover:text-text-light transition-colors"
          >
            Order T-Shirt
          </button>
          {tshirtMsg && <div className="mt-4 text-green-600">{tshirtMsg}</div>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
