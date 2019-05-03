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
         }
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
         },


         clckCancelar() {

             this.$router.push({
                 name: "saldo"
             });
         },

         clckAceptar() {

             this.item.monto = parseFloat(this.item.monto); 

             let uri3 = this.ip + "acreditar";
             this.axios.post(uri3, this.item).then(response => {
                     if (response.data.respuesta) {
                         this.item = {};
                         this.mensajeInfo("Saldo acreditado exitosamente");
                     } else {
                         this.mensajeError("No se pudo acreditar a la cuenta");
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