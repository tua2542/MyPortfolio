<html >

<body>
    <?php
        $bicyclePrice = $_POST["bicycle"];
        $carPrice = $_POST["car"];
        $motorcyclePrice = $_POST["motorcycle"];
        $amountBicycle = $_POST["amountBicycle"];
        $amountCar = $_POST["amountCar"];
        $amountMotorcycle = $_POST["amountMotorcycle"];
        
    ?>
    My ordered 
    <br>
    <?php echo $_POST["vehicle1"]; ?>
    <?php echo intval($bicyclePrice) ; ?> ฿<br>
    amount of bicycle : <?php echo intval($amountBicycle) ; ?> bicycles<br>
    <br>
     <?php echo $_POST["vehicle2"]; ?>
     <?php echo intval($carPrice) ; ?> ฿<br>
     amount of car : <?php echo intval($amountCar) ; ?> cars<br>
     <br>
     <?php echo $_POST["vehicle3"]; ?>
     <?php echo intval($motorcyclePrice); ?> ฿<br>
     amount of motorcycle : <?php echo intval($amountMotorcycle) ; ?> motorcycles<br>
    <br>
    The total is <?php echo (intval($amountBicycle)* intval($bicyclePrice)) + (intval($amountCar)* intval($bicyclePrice)) + (intval($amountMotorcycle)* intval($bicyclePrice)) ?> ฿ <br>
</body>
</html>