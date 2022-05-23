<template>
    <div class="column is-10 is-offset-1" v-if="activeLoad">
        <Loader />
    </div>
    <div v-else>
        <div v-if="emptyData">
            No data result
        </div>
        <div v-else>
            <table class="table is-striped is-narrow table is-fullwidth is-hoverable is-centered">
                <thead>
                    <tr>
                        <th class="txt-center">Title</th>
                        <th class="txt-center">Website</th>
                    </tr>
                </thead>
                <tbody :key="res" v-for="res in dataTab">
                    <tr>
                        <td>{{ res.title }}</td>
                        <td><button class="button is-black" @click="openLink(res.address)">More Info</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { options } from "@/assets/JS/options"
import Loader from "@/components/AppLoader.vue";

export default {
    components: {
        Loader,
    },
    data() {
        return {
            dataTab: [{
                title: "",
                address: "",
            }],
            emptyData: true,
        }
    },
    props: {
        inputTxtTab: String,
        activeLoad: Boolean
    },
    methods: {
        async resAnime() {

            let q = this.inputTxtTab;

            let result = await fetch(
                `https://top-anime.p.rapidapi.com/anime/${q}`,
                options
            )
                .then((response) => response.json())
                .catch((err) => console.error(err));

            return result;

        },
        openLink(link) {
            window.open(link)
        }
    },
    watch: {
        inputTxtTab: {
            async handler(newVal, oldVal) {
                if (newVal != oldVal) {

                    this.dataTab = []

                    let result = await this.resAnime();

                    if (result != "" && result != undefined) {

                        result.forEach(element => {
                            this.dataTab.push(element);
                        });
                        this.emptyData = false;

                    }

                    if (this.activeLoad) {
                        this.$emit("StopLoad", false);
                    }
                }

            },

        }
    }
}
</script>
