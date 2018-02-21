<?php

// Récupération de PHPMailer

require 'PHPMailer/PHPMailerAutoload.php';

if (isset($_POST['envoiFormulaire'])){

  // Conversion des champs de formulaire en variables

  $nom = strip_tags(htmlspecialchars($_POST['nom']));
  $prenom = strip_tags(htmlspecialchars($_POST['prenom']));
  $email_address = strip_tags(htmlspecialchars($_POST['email']));
  $sujet = strip_tags(htmlspecialchars($_POST['message']));
  $message = strip_tags(htmlspecialchars($_POST['messageText']));


  $email = new PHPMailer();
  $email->IsHTML(true);
  $email->CharSet = 'UTF-8';
  $email->From      = 'contact@fabiencoo.fr';
  $email->FromName  = 'Fomulaire de fabiencoo.fr';
  $email->Subject   = '[Contact formulaire] : '.$prenom.' '.$nom;
  $email->Body      = 'Vous avez reçu un message de '.$prenom.' '.$nom.'<br /><br /><strong>Email :</strong> : '.$email_address.'<br /><strong>Sujet : </strong>'.$sujet.'<br /><strong>Message : </strong>'.$message;
  $email->AddAddress( 'fabien.coo@gmail.com' );

  header('Location: index.html');

  return $email->Send();

}
else{
  echo 'Ca marche pas.';
}
?>
