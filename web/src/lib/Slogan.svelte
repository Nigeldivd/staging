<script lang="ts">
    import { Link } from "svelte-navigator";

    export let divd_works: string = "";
</script>

<article>
    <Link to="/">
        <figure>
            <img
                class="w-full h-24 mb-4"
                src={divd_works}
                alt="DIVD.works Powered by Purpose"
            />
        </figure>
    </Link>
    <h1 class="text-black dark:text-white text-center text-3xl font-semibold">
        Powered by Purpose
    </h1>
</article>

<hr class="w-full mt-4 text-black dark:text-white" />
