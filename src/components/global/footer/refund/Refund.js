import React from 'react';
import styles from './styles.module.css';
function Refund() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h3>Refund Policy</h3>
        <p>Effective Date:08/01/2024</p>
        <p>
          Thank you for choosing ONELearning Edusphere. We are committed to
          providing high-quality educational healthcare services through our
          platform onelearninghealthcare.com. Our Refund Policy outlines the
          terms and conditions under which refunds will be provided for our
          products and services
        </p>
      </div>

      <div className={styles.eligibility}>
        <ol>
          <li className={styles.olList}>
            <p className={styles.heading}>Refund Eligibility</p>
            <ul>
              <p>
                Customers are eligible for a refund under the following
                conditions:
              </p>
              <li>
                The refund request is submitted within 3 days from the date of
                purchase.
              </li>
              <li>
                The customer provides a valid reason for the refund, such as
                dissatisfaction with the content or technical issues that
                prevent proper access to the course.
              </li>
            </ul>
          </li>
          <li className={styles.olList}>
          <p className={styles.heading}>Refund Process</p>
            <ul>
              <p>To request a refund, customers must follow these steps:</p>
              <li>
                Send an email to [<span style={{color:"red"}}>support@onelearninghealthcare.com</span>] with the
                subject line “Refund Request.”
              </li>
              <li>
                Include the order number, the reason for the refund, and any
                relevant details about the issue faced.
              </li>
              <li>
                Our customer support team will review the request and respond
                within 2 business days.
              </li>
            </ul>
          </li>
          <li className={styles.olList}>
          <p className={styles.heading}>Refund Approval</p>
            <ul>
              <p>Refunds will be approved under the following circumstances:</p>
              <li>
                The request is made within 3 days of the original purchase.
              </li>
              <li>
                The customer’s reason for the refund is valid and complies with
                our refund policy.
              </li>
            </ul>
          </li>
          <li className={styles.olList}>
          <p className={styles.heading}>Refund Method</p>
            <ul>
              <p>
                Approved refunds will be processed using the original payment
                method used during the purchase. Please allow up to 5 business
                days for the refund to be reflected in your account.
              </p>
            </ul>
          </li>
          <li className={styles.olList}>
          <p className={styles.heading}>Non-Refundable items</p>
            <ul>
            <p>
              Certain products or services may be non-refundable. This
              information will be clearly communicated during the purchase
              process
            </p>
            </ul>
          </li>
          <li className={styles.olList}>
          <p className={styles.heading}>Contact Information</p>
          <ul>
          <p></p>
            <li>If you have any questions or concerns regarding our Refund Policy, please contact us at [<span style={{color:"red"}}>support@onelearninghealthcare.com</span>] or +91 – 9519284449.</li>
            <li>We reserve the right to update or modify this Refund Policy at any time without prior notice. Please review our policies regularly for any changes.</li>
            <li>Thank you for choosing ONELearning Edusphere for your educational healthcare needs.</li>
          </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Refund;
