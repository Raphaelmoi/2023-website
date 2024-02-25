<template>
  <section class="corpConnectPage">
    <form id="form" method="post">
      <p>
        <br />
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
      </p>
      <p>
        <br />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
      </p>
      <input type="submit" value="Se connecter" class="btnConnect" @click.prevent="login()" />
    </form>
  </section>
</template>

<script>

export default {
  name: "LogIn",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.$store.state.waitingLogInResult = false;
    }, 250);
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        let req = this.$store.state.phpLink + "?action=connect_user";

        let formData = new FormData();
        formData.append("user", JSON.stringify(this.input.username));
        formData.append("pass", JSON.stringify(this.input.password));

        this.$axios
          .post(req, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            if (response.data) {
              if (response.data.includes("|||")) {
                let result = response.data.split("|||");
                if (result[0] === "true") {
                  this.$store.state.ws_key = result[1];
                  this.$store.state.message =
                    "Connexion réussie - Welcome back !";
                  sessionStorage.setItem("tok", result[1]);
                  this.$router.push({ name: "BackEndHome" });
                } else this.$store.state.message = "Connexion refusé";
              } else this.$store.state.message = "Connexion refusé";
            } else this.$store.state.message = "Connexion refusé";
          })
          .catch(function (error) {
            console.log("error");
            console.log(error);
          });
      } else {
        this.$store.state.message =
          "Vous devez fournir un pseudo et un mot de passe";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.corpConnectPage {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 2%;
}
.corpConnectPage form {
  position: absolute;
  width: 450px;
  border-radius: 10px;
  text-align: center;
  margin-top: 37vh; /* poussé de la moitié de hauteur de viewport */
  transform: translateY(-50%); /* tiré de la moitié de sa propre hauteur */
  padding-bottom: 30px;
}
.corpConnectPage input.btnConnect {
  border-radius: 0;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto 0;
  border: 1px black solid;
}
.corpConnectPage input.btnConnect:hover {
  background: #000;
  color: #fff;
  cursor: pointer;
}
.corpConnectPage input {
  width: 90%;
  height: 45px;
  border: none;
  padding-left: 10px;
}
.corpConnectPage form > input {
  width: 50%;
  font-size: 20px;
}
</style>
