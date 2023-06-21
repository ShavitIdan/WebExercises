<?php 
    include "config.php";
    $connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
    
    if(mysqli_connect_errno()) {
        die("DB connection failed: " . mysqli_connect_error() . " (" . mysqli_connect_errno() . ")"
        );
    }
    $query  = "SELECT * FROM tbl_96_books";
    $result = mysqli_query($connection, $query);
    if(!$result) {
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
                <a class="navbar-brand" href="#">Idans Bookstore</a>
            </div>   
        </nav>
    </header>
    <div id="wrapper" class="p-5 bg-info">
        <main>
            <div class="container">
                <div class="d-flex justify-content-between">
                    <h1 id="selectedCategory"></h1>
                    <div>
                        <select id="categorySelect" name="select" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        </select>
                    </div>
                </div>
                <?php 
				echo '<div class="row">';
				while($row = mysqli_fetch_assoc($result)) {//results are in associative array. keys are cols names
					$img = $row["img1_url"];
					if(!$img) $img = "uploads/default_book_cover_2015.png";
					echo '<div class="bookCard col-sm-4 mb-3">';
					echo    '<div class="book card bg-light" data-category='. $row["category"] .' >';
					echo 		'<img src="' . $img . '" class="card-img-top">';
					echo 		'<div class="card-body">';
					echo   		    '<h5 class="card-title ">' . $row["name"] . '</h5>';
					echo   		    '<h5 class="card-title">Price: ' . $row["price"] . '$</h5>';
					echo   		    '<h5 class="card-title">Rate: ' . $row["rate"] . '/10</h5>';
					echo   		    '<h5 class="card-title">Category: ' . $row["category"] . '</h5>';
					echo    	    '<a href="bookPage.php?bookId=' . $row["id"] . '" class="btn btn-primary btn-center">More details</a>';
					echo        '</div>';
                    echo    '</div>';
                    echo '</div>';
				}
				echo '</div>';
				?> 
            </div>
        </main>
    </div>
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