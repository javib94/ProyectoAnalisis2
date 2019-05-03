<template>
<v-container fluid>
    <v-card
        flat
        color="grey lighten-3">
        <v-card-title>
            <span class="display-1">Realizar transferencia</span>
        </v-card-title>
        <v-card-text>

            <v-flex xs12>
                
                
                <v-text-field
                    autofocus
                    v-model="item.monto"
                    label="Monto a transferir"
                    prefix="Q"
                    box></v-text-field>
                    

                <v-autocomplete
                    :items="items"
                    v-model="itemsS"
                    item-text="correo"
                    item-value="idUsuario"
                    placeholder="Seleccione la cuenta para transferir"
                    @change="cbCambio">
                </v-autocomplete>

            </v-flex>

        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="orange darken-4"
                @click.native="clckAceptar"
                dark
                depressed
                large>
                Asociar
            </v-btn>
            <v-btn
                @click.native="clckCancelar"
                color="blue-grey lighten-4"
                depressed
                large>
                Cancelar
            </v-btn>
        </v-card-actions>
    </v-card>

    <!-- Snackbar -->
    <v-snackbar
        :timeout=3000
        button
        v-model="snackStatus"
        :color="snackColor">
        {{ sanckText }}
        <!-- <v-btn    @click.native="snackStatus = false">Cerrar</v-btn> -->
        <div>
            <v-btn
                depressed
                small
                dark
                :color="snackColor"
                @click.native="snackStatus = false">Cerrar</v-btn>
        </div>
    </v-snackbar>
</v-container>
</template>

<script src ="./transferencia.js">
