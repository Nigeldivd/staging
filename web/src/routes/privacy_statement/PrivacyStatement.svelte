<script lang="ts">
    import DIVDWorks from "../../assets/divd-works-logo.svg";
    import Slogan from "../../lib/Slogan.svelte";
    export const divd_works: string = DIVDWorks;
</script>

<svelte:head>
    <title>Privacy policy - DIVD.works</title>
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
        <iframe
            src="https://docs.google.com/document/d/e/2PACX-1vSvQ6NjQ5JAxvc6djVRV5IoutTs8QQMF_57keYWol6_5WyApUKzx-xgwBBduzMcUS4HURh2r4Rj8wa_/pub?embedded=true"
            class="w-full h-61 border-none"
            title="Privacy Statement"
        >
        </iframe>

        <hr class="w-full mt-4 text-black dark:text-white" />
    </section>
</article>
