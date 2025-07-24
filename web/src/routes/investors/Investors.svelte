<script lang="ts">
    import DIVDWorks from "../../assets/divd-works-logo.svg";
    import InvestorsPicture from "../../assets/stock/investors.jpg";
    import Slogan from "../../lib/Slogan.svelte";

    export const divd_works: string = DIVDWorks;
</script>

<svelte:head>
    <title>Investors - DIVD.works</title>
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
                        src={InvestorsPicture}
                        alt="Investors pictures"
                        class="w-full h-80 sm:h-120 md:h-100 lg:h-72 mb-8"
                    />
                </figure>
            </article>
            <article class="col-span-12 md:col-span-6 lg:col-span-7">
                <h2
                    class="text-4xl sm:text-5xl text-yellow-400 font-semibold pb-8"
                >
                    Invest. Impact. Innovate.
                </h2>
                <p class="text-gray-700 dark:text-gray-300 pb-2 text-lg">
                    At DIVD.works, we are committed to driving innovation,
                    sustainability, and social impact. Here, we provide insights
                    into our mission, strategies, and opportunities for growth.
                    We invite you to explore how your investment can contribute
                    to building a more sustainable and purposeful world while
                    achieving long-term value.
                </p>
            </article>
        </article>

        <hr class="w-full mt-4 text-black dark:text-white" />
    </section>
</article>
