import getDefaultData from "./datos.js";
export default {
    /*
    |--------------------------------------------------------------------------
    | Data
    |--------------------------------------------------------------------------
    */

    props: ['ip'],
    data: () => ({
        /* SnackBar */
        snackColor: "teal darken-4",
        snackStatus: false,
        sanckText: " ",

        /* Items */
        item: {
            correo: "",
            password: ""
        },
        drawer: null
    }),

    created() {
        this.inicializar();

    },
    /*
    |--------------------------------------------------------------------------
    | Metodos
    |--------------------------------------------------------------------------
    */
    methods: {
        inicializar() {

            window.scrollTo(0, 0);
        },

        validar() {


            let uri3 = this.ip + "login";

            this.axios.post(uri3, this.item).then(response => {
                if (response.data.respuesta == 1) {
                    this.$session.start()
                    this.$session.set('idUsuario', response.data.idUsuario);
                    this.$session.set('nombre', this.item.correo);
              
                    

                    this.$router.push({
                        name: "masterUsuario"
                    });

                    //si exist el usuario
                } else {
                    this.item = {};
                    this.mensajeError("Usuario y/o contraseña incorrecta");
                    //Error en contraseña y usuario
                }
            });
        },
        clckRegistro() {
            this.$router.push({
                name: "registro"
            });
        },
        /*
        +------------------------------------------------+
        |   Mensajes
        +------------------------------------------------+
        */
        mensajeError(mensaje) {
            this.snackColor = "red";
            this.sanckText = "[Error] " + mensaje;
            this.snackStatus = true;
        },
        mensajeInfo(mensaje) {
            this.snackColor = "light-blue darken-4";
            this.sanckText = mensaje;
            this.snackStatus = true;
        },
        mensajeAdvertencia(mensaje) {
            this.snackColor = "amber darken-4";
            this.sanckText = "[Advertencia] " + mensaje;
            this.snackStatus = true;
        }

    }
};