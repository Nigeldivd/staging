<script lang="ts">
    import DIVDWorks from "../../assets/divd-works-logo.svg";
    import CSIRTGlobal from "../../assets/stock/csirt_global.png";
    import ICY from "../../assets/stock/icy.png";
    import VlamAI from "../../assets/stock/vlam.png";
    import Slogan from "../../lib/Slogan.svelte";
    import type { Project } from "../../types";

    const project: Project[] = [
        {
            url: "https://divd-works.github.io/projects/csirt-global_global-universities.html",
            title: "Global Universities",
            description:
                "CSIRT.global's Global Universities project aims to identify and mitigate cybersecurity vulnerabilities affecting universities worldwide. We work closely with talented cybersecurity students who contribute their skills through hands-on research and analysis. These students investigate exposed systems, analyze threats, and support responsible disclosure processes. The goal is to enhance digital resilience in the academic sector while nurturing the next generation of cybersecurity professionals.",
            source: CSIRTGlobal,
            alt: "Global Universities",
        },
        {
            url: "https://www.divd.works",
            title: "Building DIVD.works",
            description:
                "The students of DIVD.works actively contribute to building the DIVD.works platform by developing tools, writing documentation, improving workflows, and helping run the entire organization. This collaboration bridges education and impact, making their work meaningful and practical.",
            source: DIVDWorks,
            alt: "divd.works",
        },
        {
            url: "/projects",
            title: "Project ICY",
            description:
                "An open-source alternative Survey app for the Dutch Government.",
            source: ICY,
            alt: "ICY Project",
        },
        {
            url: "https://vlam.ai",
            title: "Vlam.ai",
            description:
                "The project VLAM (Veilige Lokale AI Modellen) is an open-source project as a follow-up to the LearningLion project.",
            source: VlamAI,
            alt: "Vlam AI",
        },
    ];

    export const divd_works: string = DIVDWorks;
</script>

<svelte:head>
    <title>Projects - DIVD.works</title>
</svelte:head>

<article class="flex justify-center">
    <section
        class="px-3 lg:px-0 py-6 lg:py-12 flex flex-col items-center bg-white dark:bg-black gap-10
        lg:gap-6 text-center lg:text-left justify-center w-full lg:w-2/3"
    >
        <Slogan {divd_works} />

        {#each project as { url, title, description, source, alt }, _}
            <article
                class="py-6 w-full h-auto flex flex-col sm:flex-row gap-4 sm:gap-8 flex-nowrap items-start
                    justify-center text-start"
            >
                <div class="w-full">
                    <a
                        href={url}
                        target="_blank"
                        class="underline text-2xl sm:text-4xl font-bold text-[#ffd736] p-2"
                        ><h2>{title}</h2>
                    </a>
                    <p class="text-white text-start text-lg">
                        {description}
                    </p>
                </div>
                <div
                    class="transform transition-transform duration-300 hover:scale-105 w-full
                    flex items-center"
                >
                    <figure>
                        <img class="h-48 sm:h-72 w-full" src={source} {alt} />
                    </figure>
                </div>
            </article>
            <hr class="w-full mt-4 text-black dark:text-white" />
        {/each}
    </section>
</article>
