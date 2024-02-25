<?php

class Manager
{
    protected function dbConnect()
    {
        $bdd = new PDO('mysql:host=localhost;dbname=imagedb;charset=utf8', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
        // PRODUCTION
        // $bdd = new PDO('mysql:host=localhost;dbname=raphael1_vueapp1;charset=utf8mb4', 'raphael1_raph', '_5-2w]Ur?frj', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
        return $bdd;
    }
}
