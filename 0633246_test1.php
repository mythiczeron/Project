<?php

define('STUDENT_NAME', 'Cayden Harris');

function evenOddAge($age) {
    if ($age % 2 == 0) {
        echo "<p>Your age is even.</p>";
    } else {
        echo "<p>Your age is odd.</p>";
    }
}

function checkAge($age) {
    if ($age < 13) {
        echo "<p>You are a child.</p>";
    } elseif ($age <= 19) {
        echo "<p>You are a teen.</p>";
    } else {
        echo "<p>You are an adult.</p>";
    }
}

$errors        = [];
$outputMessage = '';

if (isset($_POST['submit'])) {
    $schoolName    = $_POST['school_name'];
    $studentNumber = $_POST['student_number'];
    $age           = $_POST['age'];
    if (empty($schoolName)) {
        $errors[] = "School name is required.";
    }
    if (empty($studentNumber)) {
        $errors[] = "Student number is required.";
    }
    if (empty($age)) {
        $errors[] = "Age is required.";
    }
    if (!empty($studentNumber) && !preg_match('/^\d{7}$/', $studentNumber)) {
        $errors[] = "Student number must be exactly 7 digits.";
    }
    if (empty($errors)) {
        $studentData = [
            'school_name'    => $schoolName,
            'student_number' => $studentNumber
        ];

        $formatOutput = function($data) {
            return "Hello " . STUDENT_NAME . ", your student number is " . $data['student_number'] . ", and you are studying at " . $data['school_name'] . ".";
        };
        $outputMessage = $formatOutput($studentData);
    }
}
?>
<?php if (!isset($_POST['submit'])) { ?>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
        <label>School Name:</label>
        <input type="text" name="school_name"><br><br>
        <label>Student Number:</label>
        <input type="text" name="student_number"><br><br>
        <label>Age:</label>
        <input type="text" name="age"><br><br>
        <input type="submit" name="submit" value="Submit">
    </form>

<?php } ?>

<?php
foreach ($errors as $error) {
    echo "<p>" . $error . "</p>";
}
?>

<?php
if (!empty($outputMessage)) {
    echo "<p>" . $outputMessage . "</p>";
    evenOddAge((int)$_POST['age']);
    checkAge((int)$_POST['age']);
}
?>