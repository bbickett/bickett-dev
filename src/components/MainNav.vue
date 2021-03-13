<template>
    <div>
        <b-navbar toggleable="lg" >
            <b-navbar-brand to="/" class="mr-4"><logo></logo></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="nav-pages">
                    <b-nav-item exact exact-active-class="active" to="/blog">Blog</b-nav-item>
                    <b-nav-item exact exact-active-class="active" to="/about">About</b-nav-item>
                    <b-nav-item exact exact-active-class="active" to="/contact">Contact</b-nav-item>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>

import Logo from './Logo'

export default {
    components: {
        Logo
    },
    data() {
        return {

        }
    }
}
</script>

<style>
    .nav-pages {
        font-size: 1.3rem;
        font-family: "Architects Daughter";
    }
</style>