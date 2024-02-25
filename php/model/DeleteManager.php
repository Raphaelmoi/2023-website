<?php
require_once("model/Manager.php");

class DeleteManager extends Manager
{
    function deleteDiaporama($id){
        echo 'delete';
        $bdd = $this->dbConnect();
        $delete = $bdd->query("DELETE FROM keyword WHERE id = $id; ");
        // $bdd = $this->dbConnect();
        // $bdd->query("UPDATE imageDatas SET title = '" . $item['title'] ."', alt = '" .$item['alt'] . "', legend = '" .$item['legend'] . "' WHERE id = '" . $item['id'] ."'");

    }

    function deleteImageById($id)
    {
        $bdd = $this->dbConnect();
        $delete = $bdd->query("DELETE FROM imageDatas WHERE id = $id; ");
        //RAJOUTER 
        // SUPPRIMER LE FICHIER IMAGE
        // SI IMAGE PLUS UTILISEE
        echo('deleted img');
    }
}
