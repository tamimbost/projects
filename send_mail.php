<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Retrieve form data (assuming your HTML uses the same field names)
  $gender = htmlspecialchars($_POST['gender']);
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $contact = htmlspecialchars($_POST['contact']);
  $date = htmlspecialchars($_POST['date']);
  $message = htmlspecialchars($_POST['message']);

  // Basic input validation (add more as needed)
  if (empty($name) || empty($email) || empty($contact)) {
    echo "<script>alert('Please fill in all required fields.'); window.history.back();</script>";
    exit;
  }

  // Email recipient
  $to = "contact.sitamim@gmail.com"; 

  // Email subject
  $subject = "New Contact Form Submission";

  // Email body (using HTML for better formatting)
  $body = "<h2>Contact Form Submission</h2>
          <p><strong>Gender:</strong> " . $gender . "</p>
          <p><strong>Name:</strong> " . $name . "</p>
          <p><strong>Email:</strong> " . $email . "</p>
          <p><strong>Contact Number:</strong> " . $contact . "</p>
          <p><strong>Date:</strong> " . $date . "</p>
          <p><strong>Message:</strong> " . $message . "</p>";

  // Email headers
  $headers = "From: " . $email . "\r\n" .
             "Reply-To: " . $email . "\r\n" .
             "Content-Type: text/html; charset=UTF-8";

  // Send the email
  if (mail($to, $subject, $body, $headers)) {
    echo "<script>alert('Message sent successfully!'); window.location.href = 'index.html';</script>";
  } else {
    echo "<script>alert('Message failed to send. Please try again later.'); window.history.back();</script>";
  }

} else {
  echo "Access Denied!";
}
?>






