<script lang="ts">
    import DIVDWorks from "../../assets/divd-works-logo.svg";
    import SustainabilityPicture from "../../assets/stock/sustainability.jpg";
    import Slogan from "../../lib/Slogan.svelte";

    export const divd_works: string = DIVDWorks;
</script>

<svelte:head>
    <title>Sustainability - DIVD.works</title>
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

        <article class="grid grid-cols-12 gap-4 sm:gap-8 w-full">
            <article class="col-span-12 md:col-span-6 lg:col-span-7">
                <h2
                    class="text-4xl sm:text-5xl text-yellow-400 font-semibold pb-8"
                >
                    Sustainability
                </h2>
                <p class="text-gray-700 dark:text-gray-300 pb-2 text-lg">
                    At DIVD.works, we’re dedicated to shaping the future by
                    empowering individuals to build meaningful careers, pursue
                    lifelong learning, and contribute to a sustainable and
                    purposeful world. Our commitment extends beyond just
                    offering jobs – we focus on fostering education, mentorship,
                    and guidance that help individuals grow and make a lasting
                    impact. Together, we’re building a community that thrives on
                    personal and professional development with a clear sense of
                    purpose.
                </p>
            </article>
            <article class="col-span-12 md:col-span-6 lg:col-span-5">
                <figure
                    class="scale-100 hover:scale-105 ease-in-out duration-300"
                >
                    <img
                        src={SustainabilityPicture}
                        alt="Sustainability pictures"
                        class="w-full h-80 sm:h-120 md:h-100 lg:h-72 mb-8"
                    />
                </figure>
            </article>
        </article>

        <hr class="w-full mt-4 text-black dark:text-white" />

        <article>
            <h2 class="text-4xl sm:text-5xl text-yellow-400 font-semibold pb-8">
                Empower, Impact, Thrive
            </h2>
            <p class="text-gray-700 dark:text-gray-300 pb-2 text-lg">
                At DIVD.works, we are dedicated to empowering individuals with
                purposeful careers that make a positive impact on society and
                the environment. Beginning in 2025, we began creating pathways
                for meaningful work, and by 2023, we expanded our efforts to
                include global education and mentorship opportunities. By 2026,
                we aim to offer comprehensive training programs to help people
                transition into sustainable, purpose-driven roles focusing on
                personal development, sustainability, and leadership. All our
                workforce and mentorship initiatives will be designed to
                cultivate careers contributing to a sustainable, equitable, and
                purpose-driven future.
            </p>
        </article>

        <hr class="w-full mt-4 text-black dark:text-white" />
    </section>
</article>
