<template>
    <button @click="openSocial(linkSocial)" class="button is-mobile is-fullwidth">
        <span class="icon-text">
            <span class="icon">
                <i :class="classIcon"></i>
            </span>
        </span>
    </button>
</template>

<script>
export default {
    props: { classIcon: String, linkSocial:String },
    methods:{
        openSocial(link){
            window.open(link)
        }
    }
}
</script>
