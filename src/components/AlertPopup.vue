<template>
    <div class="darkScreen">
        <div class="showData">
            <header class="modal-header">
                <strong>
                    <p>{{ titleModal }}</p>
                </strong>
            </header>
            <div class="modal-container">
                <slot></slot>
            </div>
            <button @click="closePopup" class="button is-black">Ok</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        titleModal: String
    },
    methods: {
        closePopup() {
            this.$emit("ClosePopup", false)
        }
    }
}
</script>
