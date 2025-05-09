import React, { useState, useEffect } from 'react';
import '../../../styles/Tenant/TenantPayments.css';

// Simulated payment data - replace with actual backend integration
const initialPayments = [
  {
    id: 1,
    month: 'May 2025',
    amount: 25000,
    dueDate: '2025-05-25',
    status: 'Pending',
    propertyAddress: 'Apartment 302, Green Towers'
  },
  {
    id: 2,
    month: 'April 2025',
    amount: 25000,
    dueDate: '2025-04-25',
    status: 'Paid',
    propertyAddress: 'Apartment 302, Green Towers'
  }
];

export default function TenantPayments() {
  const [payments, setPayments] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState(null);

  useEffect(() => {
    // TODO: Replace with actual API call to fetch payments
    const fetchPayments = async () => {
      try {
        // Simulating API call with hardcoded data
        setPayments(initialPayments);
      } catch (error) {
        console.error('Error fetching payments:', error);
      }
    };

    fetchPayments();
  }, []);

  const handlePayNow = (paymentId) => {
    // TODO: Implement payment gateway integration
    const updatedPayments = payments.map(payment => 
      payment.id === paymentId 
        ? { ...payment, status: 'Paid' } 
        : payment
    );
    setPayments(updatedPayments);
    alert('Payment processed successfully!');
  };

  const getStatusClass = (status) => {
    switch(status.toLowerCase()) {
      case 'paid': return 'payment-status-paid';
      case 'pending': return 'payment-status-pending';
      case 'overdue': return 'payment-status-overdue';
      default: return '';
    }
  };

  return (
    <div className="tenant-payments-container">
      <h2 className="tenant-payments-title">My Rent Payments</h2>
      
      <div className="payments-list">
        {payments.map((payment) => (
          <div 
            key={payment.id} 
            className={`payment-box ${getStatusClass(payment.status)}`}
          >
            <div className="payment-header">
              <h3>{payment.month}</h3>
              <span className={`payment-status ${getStatusClass(payment.status)}`}>
                {payment.status}
              </span>
            </div>
            
            <div className="payment-details">
              <div className="payment-detail">
                <strong>Amount:</strong> ₹{payment.amount.toLocaleString()}
              </div>
              <div className="payment-detail">
                <strong>Due Date:</strong> {payment.dueDate}
              </div>
              <div className="payment-detail">
                <strong>Property:</strong> {payment.propertyAddress}
              </div>
            </div>

            {payment.status !== 'Paid' && (
              <button 
                className="pay-now-btn"
                onClick={() => handlePayNow(payment.id)}
              >
                Pay Now
              </button>
            )}
          </div>
        ))}
      </div>

      {payments.length === 0 && (
        <div className="no-payments-message">
          No payment records found.
        </div>
      )}
    </div>
  );
}
