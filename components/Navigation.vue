<template>
    <ul>
        <li>
            <n-link to="/">Accueil </n-link>
        </li>
        <li>
            <n-link to="/pack"> Nos Abonnements </n-link>
        </li>
        <li>
            <n-link to="/about"> About </n-link>
        </li>
        <li>
            <n-link to="/contact">Contact </n-link>
        </li>
    </ul>
</template>

<style>
.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
.nuxt-link-exact-active {
    color: #22c8e5  !important;
    font-weight: bold !important;
}
</style>