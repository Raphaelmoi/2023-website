<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST,  DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require('controller/Controller.php');
$controller = new Controller();

try {

    if (isset($_GET['action'])) {

        if ($_GET['action'] == 'getKeyWords') {
            $controller->getKeyWordsList();
        } elseif ($_GET['action'] == 'getImages') {
            $controller->getImagesDatas();
        } elseif ($_GET['action'] == 'newdatas') {
            if (isset($_POST['datas']) && isset($_POST['key'])) {
                $validateToken = $controller->validateKey(json_decode($_POST['key']));
                if ($validateToken == "good") {
                    $datas = json_decode($_POST['datas'], true);
                    $controller->uploadImg($_FILES);
                    $controller->uploadDatas($datas);
                }
            }
        } elseif ($_GET['action'] == 'deleteFullDiaporama') {
            if (isset($_POST['key']) &&  isset($_POST['id']) && isset($_POST['imageDatas'])) {
                $validateToken = $controller->validateKey(json_decode($_POST['key']));
                if ($validateToken == "good") {
                    $controller->deleteFullDiaporama($_POST['id'], json_decode($_POST['imageDatas'], true));
                } else echo 'go_login';
            }
        } elseif ($_GET['action'] == 'updateFullKWTable') {
            if (isset($_POST['fullKeywordTable']) && isset($_POST['key'])) {
                $validateToken = $controller->validateKey(json_decode($_POST['key']));
                if ($validateToken == "good") {
                    $controller->updateFullKeywordTable(json_decode($_POST['fullKeywordTable']), true);
                } else echo 'go_login';
            }
        } elseif ($_GET['action'] == 'updateFullImgTable') {
            if (isset($_POST['fullImgTable']) && isset($_POST['key'])) {
                $validateToken = $controller->validateKey(json_decode($_POST['key']));
                if ($validateToken == "good") {
                    $controller->updateFullImgTable(json_decode($_POST['fullImgTable']), true);
                } else echo 'go_login';
            }
        } elseif ($_GET['action'] == 'newdiapo') {
            if (isset($_POST['datas'])  && isset($_POST['key'])) {
                $validateToken = $controller->validateKey(json_decode($_POST['key']));
                if ($validateToken == "good") {
                    $controller->createNewDiapo($_POST['datas']);
                } else echo 'go_login';
            }
        } elseif ($_GET['action'] == 'connect_user') {
            if (isset($_POST['user']) && isset($_POST['pass'])) {
                $controller->logIn(json_decode($_POST['user']), json_decode($_POST['pass']));
            }
        } elseif ($_GET['action'] == 'validate_key') {
            if (isset($_POST['key'])) {
                $controller->validateKey(json_decode($_POST['key']));
            }
        }
    }
} catch (Exception $e) {
    echo 'Erreur : ' . $e->getMessage();
}
