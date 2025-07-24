<script lang="ts">
    import { onMount } from "svelte";
    import DIVDWorks from "../../assets/divd-works-logo.svg";
    //import Chatbot from "../../lib/Chatbot.svelte";
    import Slogan from "../../lib/Slogan.svelte";

    export const divd_works: string = DIVDWorks;

    onMount<void>((): void => {
        //Chatbot();
    });
</script>

<svelte:head>
    <title>{} - DIVD.works</title>
    <meta
        name="description"
        content="Powered by Purpose - The goal of the DIVD.works project is to create a platform
        that brings together young digital talent and employers."
    />
    <meta name="author" content="divd.works" />
    <meta
        name="keywords"
        content="Digital Talent, Online Platform, Internship, DIVD, students"
    />
</svelte:head>

<article class="flex justify-center">
    <section
        class="px-3 lg:px-0 py-6 lg:py-12 flex flex-col items-center bg-white dark:bg-black gap-10
        lg:gap-6 text-center lg:text-left justify-center w-full lg:w-2/3"
    >
        <Slogan {divd_works} />

        <!-- Content goes here... -->

        <hr class="w-full mt-4 text-black dark:text-white" />
    </section>
</article>
