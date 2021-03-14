<template>
    <footer class="footer">
        <b-navbar class="container">

            <b-navbar-nav class="ml-auto social-icons">
                <b-nav-item href="https://github.com/bbickett/" aria-label="github" target="_blank" rel="noopener noreferrer">
                    <fa-icon :icon="['fab', 'github']" class="social-icon" />    
                </b-nav-item>
                <b-nav-item href="https://www.linkedin.com/in/bbickett/" aria-label="linkedin" target="_blank" rel="noopener noreferrer">
                    <fa-icon :icon="['fab', 'linkedin']" class="social-icon" />    
                </b-nav-item>
            </b-navbar-nav>
        </b-navbar>
  </footer>
</template>


<style lang="scss">
    .footer {
        background-color: $b-blue;
        margin-top: 2rem;
    }

    .social-icon {
        color: $offwhite;
        font-size: 1.3rem;
    }

</style>