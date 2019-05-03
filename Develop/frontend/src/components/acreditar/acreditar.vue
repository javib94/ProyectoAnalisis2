<template>
<v-container fluid>
    <v-card
        flat
        color="grey lighten-3">
        <v-card-title>
            <span class="display-1">Acreditar</span>
        </v-card-title>
        <v-card-text>

            <v-flex xs12>
                <v-text-field
                    autofocus
                    v-model="item.monto"
                    label="Monto"
                    prefix="Q"
                    box></v-text-field>
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
                Aceptar
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

<script src ="./acreditar.js">
