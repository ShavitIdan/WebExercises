<!DOCTYPE html>
<html>
<head>
    <title>edit</title>
</head>
<body>
    <?php
        $resets = $_GET['resets'];
        $watermelon = $_GET['input0'];
        $carrot = $_GET['input1'];
        $flappyform = $_GET['input2'];
        if ($resets < "100"){
            echo "<h2>congratulations you made it!</h2>";
            echo "<h3>Your answer for what green from the outside, red from the inside, and has a lot of seeds is: $watermelon</h3>";
            echo "<h3>Your answer for what is orange and sounds like a parrot: $carrot</h3>";
            echo "<h3>You answer for what is the best game ever: $flappyform</h3>";
            echo "<h3>You manage to bump into only $resets walls! well thats impressive!</h3>";
            echo "<h3>Thank you for playing!</h3>";
        }
        else{
            echo "<h2>MY EYES!!! MAKE IT STOP!</h2>";
            echo "<h3>phew, took you long enough</h3>";
            echo "<h3>you crashed into $resets walls! at least you got the answers right</h3>";
            echo "<h3>Thank you for playing!</h3>";
        }
    ?>  
</body>
</html>