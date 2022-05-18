<template>
    <div>
        <table class="table table is-fullwidth is-hoverable">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="res" v-for="res in dataTab">
                    <td>{{ res.title }}</td>
                    <td><a>{{ res.link }}</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataTab: [{
                title: "",
                link: "",
            }]
        }
    },
    props: {
        inputTxtTab: String
    },
    methods: {
        async resAnime() {

            const options = {
                method: "GET",
                headers: {
                    "X-RapidAPI-Host": "top-anime.p.rapidapi.com",
                    "X-RapidAPI-Key":
                        "172d5540d9mshc7753ad9d75b090p173ef9jsn869109d78a2e",
                },
            };
            let q = this.inputTxtTab;

            let result = await fetch(
                `https://top-anime.p.rapidapi.com/anime/${q}`,
                options
            )
                .then((response) => response.json())
                .then((response) => console.log(response))
                .catch((err) => console.error(err));

            return result;

        },
    },
}
</script>
