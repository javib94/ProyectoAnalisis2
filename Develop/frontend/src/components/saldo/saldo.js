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
            saldo:0.0
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
 

            let uri3 = this.ip + "saldo";
            this.axios.post(uri3, this.item).then(response => {
                this.item = response.data;
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