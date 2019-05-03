<template>
<v-app id="inspire">
    <v-navigation-drawer
        app
        v-model="drawer"
        clipped
        fixed
        :mini-variant.sync="mini"
        mini>

        <v-toolbar
            flat
            class="transparent">
            <v-list class="pa-0">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="https://randomuser.me/api/portraits/men/85.jpg">
                    </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>{{this.$session.get('nombre')}}</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn
                                icon
                                @click.stop="mini = !mini">
                                <v-icon>chevron_left</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                </v-list-tile>
            </v-list>
        </v-toolbar>
        <v-list
            class="pt-0"
            dense>
            <v-divider></v-divider>

            <v-list-tile
                v-for="item in items"
                :to="item.path"
                :key="item.title">
                <v-list-tile-action>
                    <v-icon medium>{{ item.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title class="subheading">{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        color="blue darken-3"
        dark
        app
        fixed>
        <v-toolbar-title
            style="width: 300px"
            class="ml-0 pl-3">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <span class="hidden-sm-and-down headline">Banco de Guatemala</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>apps</v-icon>
        </v-btn>
        <v-btn
            @click="clckSalir"
            icon>
            <v-icon>exit_to_app</v-icon>
        </v-btn>
        <v-btn
            icon
            large>
            <v-avatar
                size="32px"
                tile>
                <img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          >
        </v-avatar>
        </v-btn>
    </v-toolbar>
    <v-content>
        <router-view></router-view>
    </v-content>
    <v-footer class="pa-3 justify-center">
        <div>&copy; AyD2 Primer Semestre {{ new Date().getFullYear() }} <strong>Grupo N</strong></div>
    </v-footer>

</v-app>
</template>

<script>
export default {
    data: () => ({
        drawer: true,
        items: [{
                title: 'Saldo',
                icon: 'monetization_on',
                path: '/masterUsuario/saldo'
            },
            {
                title: 'Acreditar',
                icon: 'add_circle',
                path: '/masterUsuario/acreditar'
            },
            {
                title: 'Debitar',
                icon: 'remove_circle',
                path: '/masterUsuario/debitar'
            },
            {
                title: 'Asociar cuenta',
                icon: 'how_to_reg',
                path: '/masterUsuario/asociar'
            },
            {
                title: 'Transferencia',
                icon: 'compare_arrows',
                path: '/masterUsuario/transferencia'
            },
            {
                title: 'Eliminar cuenta',
                icon: 'delete',
                path: '/masterUsuario/eliminar'
            }
        ],
        mini: true,
        right: null,
    }),
    props: {
        source: String
    },
    created() {

        this.$router.push({
            name: "saldo"
        });
    },
    methods: {

        clckSalir() {

            this.$router.push({
                name: "login"
            });
        }

    }
}
</script>

<style>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
}
</style>
