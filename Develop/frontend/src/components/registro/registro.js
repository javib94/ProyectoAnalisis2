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



        item: {
            nombre: "",
            apellido:"",
            correo: "",
            password: "",
        }
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

        clckCancelar() {

            this.$router.push({
                name: "login"
            });
        },

        clckAceptar() {

            let uri3 = this.ip + "registro";
            this.axios.post(uri3, this.item).then(response => {
                if (response.data.respuesta) {
                    this.$router.push({
                        name: "login"
                    });
                } else {
                    this.mensajeError("No se pudo registrar correctamente");
                }
            });
        }

        ,
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