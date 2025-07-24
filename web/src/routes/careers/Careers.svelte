<script lang="ts">
    import { onMount } from "svelte";
    import DIVDWorks from "../../assets/divd-works-logo.svg";
    import CareersPicture from "../../assets/stock/careers.jpg";
    import Chatbot from "../../lib/Chatbot.svelte";
    import Slogan from "../../lib/Slogan.svelte";

    export const divd_works: string = DIVDWorks;

    onMount<void>((): void => {
        Chatbot();
    });
</script>

<svelte:head>
    <title>Careers - DIVD.works</title>
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
        lg:gap-6 justify-center w-full lg:w-2/3"
    >
        <Slogan {divd_works} />

        <article class="grid grid-cols-12 gap-4 sm:gap-8 w-full">
            <article class="col-span-12 md:col-span-6 lg:col-span-5">
                <figure
                    class="scale-100 hover:scale-105 ease-in-out duration-300"
                >
                    <img
                        src={CareersPicture}
                        alt="Careers pictures"
                        class="w-full h-80 sm:h-120 md:h-100 lg:h-72 mb-8"
                    />
                </figure>
            </article>
            <article class="col-span-12 md:col-span-6 lg:col-span-7">
                <h2
                    class="text-4xl sm:text-5xl text-yellow-400 font-semibold pb-8"
                >
                    Ready to start a new career?
                </h2>
                <p class="text-gray-700 dark:text-gray-300 pb-2 text-lg">
                    Explore exciting career opportunities at DIVD.works! Our
                    portal connects you with the latest job openings and
                    provides an easy way to apply for positions that align with
                    your skills and aspirations. Start your journey with us
                    today!
                </p>
            </article>
        </article>

        <hr class="w-full mt-4 text-black dark:text-white" />

        <article class="w-full md:w-auto flex flex-col">
            <h2 class="text-4xl sm:text-5xl text-yellow-400 font-semibold pb-8">
                Career oppertunities
            </h2>
            <p class="text-gray-700 dark:text-gray-300 pb-2 text-lg">
                These are the current job listings:
            </p>
            <a
                href="https://theorg.com/org/divd-works/jobs/senior-vice-president-bus-ced0e35"
                target="_blank"
                class="text-gray-700 dark:text-gray-300 text-lg font-semibold underline"
            >
                Senior Vice President, Business Operations
            </a>
            <a
                href="https://theorg.com/org/divd-works/jobs/senior-vice-president-chi-8ec7f768"
                target="_blank"
                class="text-gray-700 dark:text-gray-300 text-lg font-semibold underline my-3"
            >
                Senior Vice President, Chief Legal Officer
            </a>
            <a
                href="https://theorg.com/org/divd-works/jobs/senior-vice-president-chi-60175d7"
                target="_blank"
                class="text-gray-700 dark:text-gray-300 text-lg font-semibold underline"
            >
                Senior Vice President, Chief People Officer
            </a>
            <a
                href="https://theorg.com/org/divd-works/jobs/senior-vice-president-com-f90cea2c"
                target="_blank"
                class="text-gray-700 dark:text-gray-300 text-lg font-semibold underline my-3"
            >
                Senior Vice President, Communications & Public Policy
            </a>
            <a
                href="https://theorg.com/org/divd-works/jobs/senior-vice-president-saf-299581"
                target="_blank"
                class="text-gray-700 dark:text-gray-300 text-lg font-semibold underline"
            >
                Senior Vice President, Safety & Core Services
            </a>
            <a
                href="https://theorg.com/org/divd-works/jobs/senior-vice-president-sal-cb7102b5"
                target="_blank"
                class="text-gray-700 dark:text-gray-300 text-lg font-semibold underline"
            >
                Senior Vice President, Sales
            </a>
            <a
                href="https://theorg.com/org/divd-works/jobs/senior-vice-president-bus-ced0e35"
                target="_blank"
                class="text-gray-700 dark:text-gray-300 text-lg font-semibold underline my-3"
            >
                Senior Vice President, Support
            </a>
        </article>

        <hr class="w-full mt-4 text-black dark:text-white" />
    </section>
</article>
