<template>  
<v-container fluid>
    <v-card flat color="grey lighten-3">
        <v-card-title>
            <span class="display-1">Saldo:</span>
        </v-card-title>
        <v-card-text  >
            <span class=" display-1">Q {{this.item.saldo}}</span>
        </v-card-text>
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

<script src ="./saldo.js">
