<template>
<v-app id="inspire">
    <v-toolbar
        color="blue darken-3"
        dark
        app
        fixed>
        <v-toolbar-title
            style="width: 300px"
            class="ml-0 pl-3">
            <span class="headline">Banco de Guatemala</span>
        </v-toolbar-title>
    </v-toolbar>

    <v-content fluid>
        <br>

        <v-container fluid>
            <v-card color="grey lighten-3">
                <v-card-title>
                    <span class="headline">Registrarse</span>
                </v-card-title>
                <v-card-text>
                    <v-layout
                        row
                        wrap>

                        <v-flex xs12>
                            <v-text-field
                                v-model="item.correo"
                                autofocus
                                label="Correo"
                                box></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field
                                v-model="item.nombre"
                                label="Nombre"
                                box></v-text-field>
                        </v-flex>

                        <v-flex xs12>
                            <v-text-field
                                v-model="item.apellido"
                                label="Apellido"
                                box></v-text-field>
                        </v-flex>

                        <v-flex xs12>
                            <v-text-field
                                v-model="item.password"
                                label="Password"
                                box></v-text-field>
                        </v-flex>

                    </v-layout>
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

        </v-container>
    </v-content>

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
</v-app>
</template>

<script src ="./registro.js">
