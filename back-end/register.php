<?php
$host = 'localhost';
$db = 'alunoproz';
$user = 'root';
$pass = '';
$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
  die("Erro na conexão: " . $conn->connect_error);
}

$nome = $_POST['nameStudent'];
$curso = $_POST['courseStudent'];
$email = $_POST['emailStudent'];
$senha = $_POST['passwordStudent'];
$confirmSenha = $_POST['confirmPassword'];

if ($senha !== $confirmSenha) {
  die("As senhas não coincidem.");
}

$sqlCheck = "SELECT * FROM alunos WHERE emailAluno = ?";
$stmtCheck = $conn->prepare($sqlCheck);
$stmtCheck->bind_param("s", $email);
$stmtCheck->execute();
$resultCheck = $stmtCheck->get_result();

if ($resultCheck->num_rows > 0) {
  die("Este email já está cadastrado.");
}

$sql = "INSERT INTO alunos (emailAluno, senhaAluno, nomeAluno, cursoAluno) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $email, $senha, $nome, $curso);

if ($stmt->execute()) {
  header("Location: login.html");
  exit(); // importante para evitar execução adicional
} else {
  echo "Erro ao cadastrar: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>