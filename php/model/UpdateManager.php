<?php
require_once("model/Manager.php");

class UpdateManager extends Manager
{
    function updateImageTable($imageArray)
    {
        $bdd = $this->dbConnect();
        for ($i = 0; $i < count($imageArray); $i++) {
            $item = $imageArray[$i];
            $bdd->query("UPDATE imagedatas SET title = '" . $item->title . "', alt = '" . $item->alt . "', legend = '" . $item->legend . "' WHERE id = '" . $item->id . "'");
        }
    }
    function updateOneKeywordTable($keywordArray)
    {
        var_dump('one keyword table ');
        $bdd = $this->dbConnect();
        $bdd->query("UPDATE keyword SET keywords = '" . $keywordArray['keywords'] . "', imageName = '" . $keywordArray['imageName'] . "', main_image = '" . $keywordArray['main_image'] . "' WHERE id = '" . $keywordArray['id'] . "'");
    }

    function downNbreUtilisationImg($imageArray)
    {
        $bdd = $this->dbConnect();
        for ($i = 0; $i < count($imageArray); $i++) {
            $item = $imageArray[$i];
            $bdd->query("UPDATE imagedatas SET nbre_utilisation = nbre_utilisation - 1 WHERE id = '" . $item['id'] . "'");
        }
    }

    function updateKeywordTable($keywordArray)
    {
        var_dump('updateKeywordTable');
        $bdd = $this->dbConnect();
        for ($i = 0; $i < count($keywordArray); $i++) {
            $item = $keywordArray[$i];
            var_dump($item->imageName);

            $bdd->query("UPDATE keyword SET keywords = '" . $item->keywords . "', imageName = '" . $item->imageName . "', main_image = '" . $item->main_image . "' WHERE id = '" . $item->id . "'");
        }
    }
}
