<script lang="ts">
    import { onMount } from "svelte";
    import { DocumentCheck, Icon } from "svelte-hero-icons";
    import DIVDWorks from "../../assets/divd-works-logo.svg";
    import CareerAdvancement from "../../assets/stock/career_advancement.png";
    import InternationalExposure from "../../assets/stock/international_exposure.png";
    import SkillDevelopment from "../../assets/stock/skill_development.png";
    import Chatbot from "../../lib/Chatbot.svelte";
    import Slogan from "../../lib/Slogan.svelte";
    import type { SkillTrajectory } from "../../types";

    const skill_trajectory: SkillTrajectory[] = [
        {
            image: SkillDevelopment,
            alt: "Skill Development",
            title: "Skill Development",
            description:
                "Engage in hands-on projects that enhance both technical and soft skills crucial for the global digital landscape.",
        },
        {
            image: InternationalExposure,
            alt: "International Exposure",
            title: "International Exposure",
            description:
                "Collaborate with peers from around the world, gaining insights into diverse cultures and global practices.",
        },
        {
            image: CareerAdvancement,
            alt: "Career Advancement",
            title: "Career Advancement",
            description:
                "Build a robust foundation that prepares you for opportunities in international organizations and the broader digital economy.",
        },
    ];

    export const divd_works: string = DIVDWorks;

    onMount<void>((): void => {
        Chatbot();
    });
</script>

<svelte:head>
    <title>Internships - DIVD.works</title>
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

        <article>
            <h2 class="text-4xl sm:text-5xl text-yellow-400 font-semibold pb-8">
                Internships - Shape your future
            </h2>
            <p class="text-gray-700 dark:text-gray-300 pb-2 text-lg">
                At DIVD.works, we are committed to nurturing the next generation
                professionals through our comprehensive Internship Program. This
                initiative is designed to equip participants with essential
                skills, practical experience, and a global network, paving the
                way for a successful career in the digital world.
            </p>
            <p class="text-gray-700 dark:text-gray-300 pt-2 text-lg">
                Discover new skills, gain real-world experience, build
                international connections — and take your first step toward an
                exciting career in the global digital landscape.
            </p>
        </article>

        <hr class="w-full mt-4 text-black dark:text-white" />

        <article>
            <h2
                class="text-4xl sm:text-5xl text-black dark:text-white font-semibold pb-8"
            >
                Skill trajectory
            </h2>
            <article
                class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
                {#each skill_trajectory as { image, alt, title, description }, _}
                    <div>
                        <figure
                            class="scale-100 hover:scale-105 ease-in-out duration-300"
                        >
                            <img
                                src={image}
                                {alt}
                                class="w-full h-80 sm:h-120 md:h-100 lg:h-72 mb-8"
                            />
                        </figure>
                        <h3 class="text-2xl text-yellow-400 font-medium pb-4">
                            {title}
                        </h3>
                        <p class="text-gray-700 dark:text-gray-300 text-lg">
                            {description}
                        </p>
                    </div>
                {/each}
            </article>
        </article>

        <hr class="w-full mt-4 text-black dark:text-white" />

        <article>
            <article class="grid grid-cols-12 gap-4 sm:gap-8 md:gap-16">
                <div class="col-span-12 sm:col-span-8 md:col-span-9">
                    <h2
                        class="text-4xl sm:text-5xl text-yellow-400 font-semibold pb-8"
                    >
                        Benefits of joining
                    </h2>
                    <ol
                        class="text-gray-700 dark:text-gray-300 list-decimal text-lg ml-5 flex-1"
                    >
                        <li>
                            Acquire and enhance essential hard and soft skills
                            vital for a career in cybersecurity.
                        </li>
                        <li class="my-3">
                            Gain practical experience working within an
                            international organization.
                        </li>
                        <li>
                            Receive a certificate upon successful completion of
                            the program.
                        </li>
                        <li class="my-3">
                            Connect with a network of motivated and like-minded
                            individuals worldwide.
                        </li>
                        <li>
                            Improve your English proficiency in a professional
                            setting.
                        </li>
                    </ol>
                </div>
                <div
                    class="col-span-12 sm:col-span-4 md:col-span-3 text-yellow-400 md:-mt-10 text-center"
                >
                    <Icon
                        src={DocumentCheck}
                        class="scale-100 hover:scale-105 ease-in-out duration-300 h-40 sm:h-60"
                    />
                    <a
                        href="https://form.jotform.com/250672969917070"
                        target="_blank"
                        class="text-3xl text-black dark:text-white font-bold underline"
                    >
                        Apply
                    </a>
                </div>
            </article>
        </article>

        <hr class="w-full mt-4 text-black dark:text-white" />
    </section>
</article>
