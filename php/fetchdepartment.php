<?php
$conn = mysqli_connect("localhost","root","","company") or die("connection failed");
$sql="select *from department order by (did) asc";

$result = mysqli_query($conn, $sql) or die("unreachable to fetch database");

if(mysqli_num_rows($result)>0)
{
    while($row=mysqli_fetch_assoc($result))
    {
        echo "<h1>".$row['did']."=".$row['departmentname']."</h1></br>";
    }
}
?>