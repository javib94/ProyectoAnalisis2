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



        item: {},

        items: [],
        itemsS: null,
        itemId: null
    }),

    created() {
        this.inicializar();
        this.item.idUsuario = this.$session.get('idUsuario');
    },
    /*
    |--------------------------------------------------------------------------
    | Metodos
    |--------------------------------------------------------------------------
    */
    methods: {
        inicializar() {

            window.scrollTo(0, 0);

            let uri3 = this.ip + "cuentas_asociadas";
            this.axios.post(uri3, this.item).then(response => {

                    this.items = response.data.cuentas;
                    console.log(this.items);
                })
                .catch(error => {
                    console.log(error);
                    this.mensajeError("Error interno en el servidor");
                });
        },

        cbCambio(e) {
            console.log(e);
            if (e == null)
                return;

            if (e == parseInt(e, 10)) { //es numero
                this.item.idSocio = e;
            }
        },

        clckCancelar() {

            this.$router.push({
                name: "saldo"
            });
        },

        clckAceptar() {


            this.item.monto = parseFloat(this.item.monto); 

            let uri3 = this.ip + "transferir";
            console.log(this.item);
            this.axios.post(uri3, this.item).then(response => {
                    if (response.data.respuesta) {
                        this.itemsS = null;
                        this.mensajeInfo("Operación realizada exitosamente");
                    } else {
                        this.mensajeError("Probablemente no tenga fondos");
                    }
                })
                .catch(error => {
                    console.log(error);
                    this.mensajeError("Error interno en el servidor");
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