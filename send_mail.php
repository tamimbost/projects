<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $gender = htmlspecialchars($_POST['gender']);
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $contact = htmlspecialchars($_POST['contact']);
    $date = htmlspecialchars($_POST['date']);
    $message = htmlspecialchars($_POST['message']);

    $to = "contact.sitamim@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "
        <h2>Contact Form Submission</h2>
        <p><strong>Gender:</strong> $gender</p>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Contact Number:</strong> $contact</p>
        <p><strong>Date:</strong> $date</p>
        <p><strong>Message:</strong> $message</p>
    ";
    $headers = "From: $email\r\nContent-Type: text/html; charset=UTF-8\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.location.href = 'index.html';</script>";
    } else {
        echo "<script>alert('Message failed to send.'); window.history.back();</script>";
    }
} else {
    echo "Access Denied!";
}
?>
