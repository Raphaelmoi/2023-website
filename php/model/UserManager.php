<?php
require_once("Manager.php");

class UserManager extends Manager
{
    //get user data, needed when try to connect
    public function getUser($pseudo)
    {
        $bdd = $this->dbConnect();
        $req = $bdd->prepare('SELECT id, pseudo, pass, email FROM user WHERE pseudo = ?');
        $req->execute(array($pseudo));
        $result = $req->fetch();
        return $result;
    }
    public function addTokenConnexion($pseudo)
    {
        $bdd = $this->dbConnect();
        $token = bin2hex(random_bytes(50));
        $req = $bdd->query("UPDATE user SET token = '$token', token_time = NOW() WHERE pseudo = '$pseudo';");
        return $token;
    }
    public function findTokenMatch($token)
    {
        $bdd = $this->dbConnect();
        $sql = $bdd->prepare("SELECT token , token_time FROM user WHERE token='$token' LIMIT 1");
        $sql->execute();
        $result = $sql->fetch();
        $isValide = false;
        if ($token == $result['token']) {
            $date = new DateTime();
            $date =  $date->getTimestamp() - 3600;
            $dateServer = strtotime($result['token_time']);

            if ($dateServer > $date) {
                // echo 'valide time ';
                $isValide =  true;
            }
        }
        return $isValide;
    }

    //when user want to change password
    public function updateUserPw($pass, $pseudo)
    {
        $bdd = $this->dbConnect();
        $req = $bdd->query("UPDATE user SET pass = '$pass' WHERE pseudo = '$pseudo';");
        return $req;
    }
    //when user want to change mail
    public function updateUserMail($mail, $pseudo)
    {
        $bdd = $this->dbConnect();
        $req = $bdd->query("UPDATE user SET email = '$mail' WHERE pseudo = '$pseudo';");
        return $req;
    }
    //when user want to change pseudo
    public function updateUserPseudo($pseudo, $newpseudo)
    {
        $bdd = $this->dbConnect();
        $req = $bdd->query("UPDATE user SET pseudo = '$newpseudo' WHERE pseudo = '$pseudo';");
        return $req;
    }
    //if result = 0 $pseudo is not in the database
    public function count($pseudo)
    {
        $bdd = $this->dbConnect();
        $count = $bdd->query("SELECT count(pseudo) FROM user WHERE pseudo = '$pseudo'")->fetchColumn();
        return $count;
    }
}
