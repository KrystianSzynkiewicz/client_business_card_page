<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];
    // $accept = $_POST['accept'];

    $mailTo = "edytazajacpowrot@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "Masz nową wiadomość e-mail: ".$name.".\n\n".$message;


    $mail_status = mail($mailTo, $subject, $txt, $headers);
     

    if ($mail_status) {
        header("Location: /index.html?mail_status=sent");
    } else {
        header("Location: /index.html?mail_status=error");
    }
}

?>