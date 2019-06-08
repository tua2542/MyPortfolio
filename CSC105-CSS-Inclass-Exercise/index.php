<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    
</head>
<body>
    
    <h1>My Order</h1>

    <form action = "hello.php" method = "post">
    <input type="checkbox" name ="vehicle1" value = "Bicycle">Bicycle
    <input type = "text" name = "amountBicycle" placeholder="amount">
    <input type ="text" name ="bicycle" placeholder="price">฿<br>

    <input type="checkbox" name="vehicle2" value="Car">Car
    <input type = "text" name = "amountCar" placeholder="amount" >
    <input type ="text" name ="car" placeholder="price">฿<br>

    <input type="checkbox" name="vehicle3" value="Motorcycle">Motorcycle
    <input type = "text" name = "amountMotorcycle" placeholder="amount">
    <input type ="text" name ="motorcycle" placeholder="price">฿<br>

    <input type = "submit" value = "Submit">
</form>
</body>
</html>