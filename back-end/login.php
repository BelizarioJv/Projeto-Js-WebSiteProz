<?php
// Conexão com o banco de dados
$host = 'localhost';
$db = 'alunoproz';
$user = 'root';
$pass = '';
$conn = new mysqli($host, $user, $pass, $db);

// Verifica conexão
if ($conn->connect_error) {
  die("Falha na conexão: " . $conn->connect_error);
}

// Recebe os dados do formulário
$email = $_POST['emailStudent'];
$senha = $_POST['passwordStudent'];

// Prepara a consulta
$sql = "SELECT * FROM alunos WHERE emailAluno = ? AND senhaAluno = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $email, $senha);
$stmt->execute();
$result = $stmt->get_result();

// Verifica se encontrou o usuário
if ($result->num_rows > 0) {
  echo "Login realizado com sucesso!";
  header("Location: pageClasses.html");
} else {
  echo "Email ou senha incorretos.";
}

$stmt->close();
$conn->close();
?>