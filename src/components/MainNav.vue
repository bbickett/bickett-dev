<template>
    <div>
        <b-navbar toggleable="lg" class="main-nav container">
            <b-navbar-brand to="/" class="mr-4"><logo></logo></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="nav-pages ml-auto">
                    <b-nav-item exact exact-active-class="active" disabled to="/blog">Blog</b-nav-item>
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

<style lang="scss">

    
    .main-nav .navbar-nav {
        .nav-pages {
            font-family: "Architects Daughter";
        }

        .nav-link {
            font-size: 1.4rem;
            color: var(--brand);
            font-weight: 600;
            padding-left: 1.5rem;
            padding-right: 1.5rem;

            &:hover {
                color: var(--alternate);
                background-color: rgba(150,150,150,0.1);
                border-radius: 0.5rem;
            }

            &:active, &.active {
                color: var(--alternate);
            }
        }
    }



</style>