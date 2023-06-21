<?php 
    include "config.php";
    $connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
    
    
    if(mysqli_connect_errno()) {
        die("DB connection failed: " . mysqli_connect_error() . " (" . mysqli_connect_errno() . ")" );
    }
    
    $bookId = $_GET["bookId"];
    $query  = "SELECT * FROM tbl_96_books where id = " . $bookId . ';';
    $result = mysqli_query($connection, $query);
    if($result) {
    $row 	= mysqli_fetch_assoc($result);
    }
    else {
    die("DB query failed.");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">  
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>		
		<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
		<script src="js/scripts.js"></script>
		<link href="css/style.css" rel="stylesheet">
        <title>Idans Bookstore</title>
</head>
<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container">
                <a class="navbar-brand" href="index.php">Idans Bookstore</a>
            </div>   
        </nav>
    </header>
    <main>
        <div id="wrapper" class="p-5 bg-info">
            <div class="container">
                <?php
                    $img1 = $row["img1_url"];
                    $img2 = $row["img2_url"];
                    if(!$img1) $img1 = "uploads/default_book_cover_2015.png";
                    if(!$img2) $img2 = "uploads/default_book_cover_2015.png";
                    echo '<div class="text-center">';
                    echo    '<h1>' . $row['name'] . '</h1>';
                    echo '</div>';
                    echo '<div class="d-flex  justify-content-between">';
                    echo    '<img src="' . $img1 . '">';
                    echo    '<div class="container">';
                    echo        '<h3> Author: ' . $row["author"] . '</h3>';
                    echo        '<h4> Category: ' . $row["category"] . '</h4>';
                    echo        '<p>' . $row["description"] . '</p></div>';
                    echo    '<img src="' . $img2 . '">';
                    echo '</div>';
                    echo '<button type="button" class="btn btn-primary my-5"><a class="text-white" href="index.php">go back</a></button>';
                ?>
            </div>
        </div>
    </main>
    <footer class="footer mt-auto py-3 bg-light">
        <div class="container">
            <span class="text-muted">Idan Shavit &copy; 2023</span>
        </div>
    </footer>
</body>
</html>
<?php
    mysqli_free_result($result);
    mysqli_close($connection);
?>