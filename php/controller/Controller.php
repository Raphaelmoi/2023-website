<?php
class Controller
{
    function __construct()
    {
        spl_autoload_register('Controller::chargerClasse');
        // require 'controller/UtiController.php';
        require 'controller/UserController.php';
    }
    //autoload
    function chargerClasse($classname)
    {
        // require $_SERVER['DOCUMENT_ROOT'] . "/php/model/" . $classname . '.php';
        require 'model/' . $classname . '.php';
    }
    function logIn($pseudo, $motdepasse)
    {
        $userController = new UserController();
        $connexion = $userController->logIn($pseudo, $motdepasse);
    }
    function validateKey($key)
    {
        $userController = new UserController();
        $control = $userController->token_permission($key);
        echo $control;
        return $control;
    }
    function updateFullKeywordTable($keywordArray)
    {
        $updateManager = new UpdateManager();
        $result = $updateManager->updateKeywordTable($keywordArray);
    }
    function updateFullImgTable($imageArray)
    {
        $updateManager = new UpdateManager();
        $result = $updateManager->updateImageTable($imageArray);

        return $result;
    }
    function deleteImage($id)
    {
        // echo('controller');
        $deleteManager = new DeleteManager();
        $result = $deleteManager->deleteImageById($id);

        return $result;
    }
    function deleteFullDiaporama($id, $imageArray)
    {
        $deleteManager = new DeleteManager();
        $updateManager = new UpdateManager();

        $result = $deleteManager->deleteDiaporama($id);
        // $resultb = $updateManager->downNbreUtilisationImg($imageArray);
        return $result;
    }
    function updateDiaporama($imageArray, $keywordArray)
    {
        $updateManager = new UpdateManager();

        $result = $updateManager->updateImageTable($imageArray);
        $resultb = $updateManager->updateOneKeywordTable($keywordArray);

        return $result;
    }

    function getKeyWordsList()
    {
        $getManager = new GetManager();
        $result = $getManager->getKeywords();
        echo json_encode($result);
        return $result;
    }
    function getImagesDatas()
    {
        $getManager = new GetManager();
        $result = $getManager->getImageTable();
        echo json_encode($result);
        return $result;
    }
    function createNewDiapo($keyword)
    {
        $postManager = new PostManager();
        $sendNewKeyword = $postManager->addNewKeyword($keyword);
    }
    function uploadDatas($datas)
    {
        $postManager = new PostManager();
        //add new keyword
        $qttNewKW = count($datas[0]['newKeywords']);
        if ($qttNewKW > 0) {
            for ($i = 0; $i < $qttNewKW; $i++) {
                $sendNewKeyword = $postManager->addNewKeyword($datas[0]['newKeywords'][$i]);
            }
        }
        $totalNewImages = count($datas);
        //start at 1 because 0 is newkeyword
        for ($i = 1; $i < $totalNewImages; $i++) {
            // fil table imageDatas
            $send = $postManager->postImgDatas(
                $datas[$i]['name'],
                $datas[$i]['description'],
                $datas[$i]['legend'],
                $datas[$i]['qttUtillisation']
            );
            // fil table keyword 
            $totalSelectedKeyword = count($datas[$i]['keyword']);
            for ($j = 0; $j < $totalSelectedKeyword; $j++) {
                $post = $postManager->addImgNameToSelectedKeyword($datas[$i]['keyword'][$j],  $datas[$i]['name']);
            }
        }
    }

    function uploadImg()
    {
        $accepted_origins = array("https://localhost");
        // Images upload path
        // PRODUCTION
        // $imageFolder =  "static/uploadimg/";
        $imageFolder =  $_SERVER['DOCUMENT_ROOT'] . "/static/uploadimg/";

        reset($_FILES);
        $temp = current($_FILES);
        $total = count($temp['tmp_name']);

        for ($i = 0; $i < $total; $i++) {
            if (is_uploaded_file($temp['tmp_name'][$i])) {
                if (isset($_SERVER['HTTPS_ORIGIN'])) {
                    // Same-origin requests won't set an origin. If the origin is set, it must be valid.
                    if (in_array($_SERVER['HTTPS_ORIGIN'], $accepted_origins)) {
                        header('Access-Control-Allow-Origin: ' . $_SERVER['HTTPS_ORIGIN']);
                    } else {
                        header("HTTPS/1.1 403 Origin Denied");
                        return;
                    }
                }
                // Accept upload if there was no origin, or if it is an accepted origin
                $filetowrite =  $imageFolder . $temp['name'][$i];
                move_uploaded_file($temp['tmp_name'][$i], $filetowrite);
                // Respond to the successful upload with JSON.
                echo json_encode(array('location' => $filetowrite));
            } else {
                // Notify editor that the upload failed
                header("HTTPS/1.1 500 Server Error");
            }
        }
        return $filetowrite;
    }
}
