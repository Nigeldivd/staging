<script lang="ts">
    import { onMount } from "svelte";
    import DIVDWorks from "../../assets/divd-works-logo.svg";
    import Accepted from "../../assets/stock/accepted.jpg";
    import Stress from "../../assets/stock/stress.jpg";
    import Chatbot from "../../lib/Chatbot.svelte";
    import Slogan from "../../lib/Slogan.svelte";

    export const divd_works: string = DIVDWorks;

    onMount<void>((): void => {
        Chatbot();
    });
</script>

<svelte:head>
    <title>How it works - DIVD.works</title>
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

        <article class="grid grid-cols-12 gap-8 w-full">
            <div
                class="col-span-12 md:col-span-5 w-full h-36 rounded-r-full bg-[#f3cd34] flex items-center
                justify-center text-black font-bold text-4xl"
            >
                <h2>Bridging the Gap</h2>
            </div>
            <div class="col-span-12 md:col-span-7">
                <figure
                    class="scale-100 hover:scale-105 duration-300 ease-in-out"
                >
                    <img
                        class="w-full rounded-[100px] h-80 sm:h-100 md:h-[450px]"
                        src={Stress}
                        alt="Stress"
                    />
                </figure>
            </div>
            <div
                class="col-span-12 text-black dark:text-white text-xl font-medium"
            >
                <p>
                    Isn't it a shame that it's so hard for students to find an
                    internship? Despite their motivation, creativity, and fresh
                    perspectives, countless students struggle to secure a place
                    where they can put their skills to the test and gain
                    real-world experience. This not only holds them back but
                    also means that companies miss out on young talent eager to
                    contribute and learn.
                </p>
                <p class="my-6">
                    What if we could change that? Imagine a platform that
                    bridges the gap between ambitious students and
                    forward-thinking companies, offering opportunities that
                    benefit both sides. A place where students can showcase
                    their potential, and companies can discover motivated
                    individuals ready to make a difference.
                </p>
                <p>
                    Let’s create that connection. Let’s make internships
                    accessible, rewarding, and impactful—for students and
                    businesses alike.
                </p>
            </div>
        </article>

        <hr class="w-full mt-4 text-black dark:text-white" />

        <article class="grid grid-cols-12 gap-8 w-full">
            <div class="col-span-12 md:col-span-7">
                <figure
                    class="scale-100 hover:scale-105 duration-300 ease-in-out"
                >
                    <img
                        class="w-full rounded-[100px] h-80 sm:h-100 md:h-[450px]"
                        src={Accepted}
                        alt="Accepted"
                    />
                </figure>
            </div>
            <div
                class="col-span-12 md:col-span-5 w-full h-36 rounded-l-full bg-[#f3cd34] flex items-center
                justify-center text-black font-bold text-4xl"
            >
                <h2>Connecting Ambition</h2>
            </div>
            <div
                class="col-span-12 text-black dark:text-white text-xl font-medium"
            >
                <p>
                    We aim to bridge the gap between companies and students by
                    creating a transparent, efficient platform. Currently, the
                    internship process is unclear and overwhelming, making it
                    difficult for students to find the right match.
                </p>
                <p class="my-6">
                    Our solution is to enable clear filtering based on skills,
                    interests, and requirements, allowing both students and
                    companies to connect more effectively. This way, companies
                    gain access to motivated talent, and students find
                    internships that truly fit their abilities and ambitions.
                </p>
                <p>
                    By fostering direct communication and clarity, we make
                    internships fair and accessible for everyone.
                </p>
            </div>
        </article>

        <hr class="w-full mt-4 text-black dark:text-white" />
    </section>
</article>
