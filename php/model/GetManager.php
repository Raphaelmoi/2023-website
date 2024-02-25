<?php
require_once("model/Manager.php"); 

class GetManager extends Manager 
{
    public function getKeywords(){
        $bdd = $this->dbConnect();
        $req = $bdd->prepare('SELECT id, keywords, imageName, main_image FROM keyword');
        $req->execute();
        $result = $req->fetchAll();
        return $result;
    }
    public function getImageTable(){
        $bdd = $this->dbConnect();
        $req = $bdd->prepare('SELECT id, title, alt, legend, nbre_utilisation FROM imagedatas');
        $req->execute();
        $result = $req->fetchAll();
        return $result;
    }

}
