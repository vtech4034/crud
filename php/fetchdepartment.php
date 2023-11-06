<?php
$conn = mysqli_connect("localhost","root","","company") or die("connection failed");
$sql="select *from department order by (did) asc";

$result = mysqli_query($conn, $sql) or die("unreachable to fetch database");
   $output=mysqli_fetch_all($result);
    
   echo json_encode($output);

?>