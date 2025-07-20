<script lang="ts">
    import { Link } from "svelte-navigator";
    import DIVDWorks from "../../assets/divd-works-logo.svg";
    import CSIRTGlobal from "../../assets/stock/csirt_global.png";
    import ICY from "../../assets/stock/icy.png";
    import VlamAI from "../../assets/stock/vlam.png";
</script>

<svelte:head>
    <title>Projects - DIVD.works</title>
</svelte:head>

<section
    class="bg-black text-[#FFD736] dark:bg-black dark:text-[#FFD736] m-0 p-0"
>
    <!-- Main Content -->
    <article
        class="mx-auto py-10 flex flex-col items-center text-center w-2/4 h-auto p-12"
    >
        <Link to="/">
            <figure>
                <img
                    class="logo glow-filter"
                    src={DIVDWorks}
                    alt="DIVD Works Logo"
                />
            </figure>
        </Link>
        <!-- Introduction Section -->
        <article class="mt-4 bg-black">
            <h1 class="text-4xl font-bold text-[#ffd736] animate-glow">
                Powered by Purpose
            </h1>
        </article>
    </article>

    <article
        class="p-12 flex flex-col items-center justify-center text-center h-auto w-full mx-auto"
    >
        <article class="flex flex-col items-center">
            <p class="font-bold text-2xl text-white hidden lg:block w-3/5">
                At DIVD.works, we are proud to collaborate with a diverse array
                of esteemed partners to drive innovation and excellence across
                multiple projects. Our mission is to foster a collaborative
                environment where expertise and creativity converge to tackle
                the challenges of today and tomorrow. Together, we contribute to
                a wide range of initiatives that advance knowledge, enhance
                skills, and promote a secure digital future. Explore our
                projects and join us in our commitment to making a meaningful
                impact in the world.
            </p>
            <hr class="w-3/4 mt-12" />
        </article>

        <!-- Projects -->
        <article
            class="p-6 sm:p-12 w-full h-auto flex flex-col sm:flex-row gap-4 sm:gap-8 flex-wrap items-start
            justify-center text-start"
        >
            <div
                class="transform transition-transform duration-300 hover:scale-105"
            >
                <figure>
                    <img
                        class="h-48 sm:h-72 w-full object-cover"
                        src={CSIRTGlobal}
                        alt="Global Universities"
                    />
                </figure>
            </div>
            <div class="w-full sm:w-1/2">
                <Link
                    to="https://divd-works.github.io/projects/csirt-global_global-universities.html"
                    target="_blank"
                    class="underline text-2xl sm:text-4xl font-bold text-[#ffd736] p-2"
                    >Global Universities
                </Link>
                <p
                    class="text-white text-start text-lg sm:text-xl sm:text-center p-2 sm:p-4"
                >
                    CSIRT.global's Global Universities project aims to identify
                    and mitigate cybersecurity vulnerabilities affecting
                    universities worldwide. We work closely with talented
                    cybersecurity students who contribute their skills through
                    hands-on research and analysis. These students investigate
                    exposed systems, analyze threats, and support responsible
                    disclosure processes. The goal is to enhance digital
                    resilience in the academic sector while nurturing the next
                    generation of cybersecurity professionals.
                </p>
            </div>
        </article>
        <hr class="w-3/4 mt-4" />

        <article
            class="p-6 sm:p-12 w-full h-auto flex flex-col sm:flex-row gap-4 sm:gap-8 flex-wrap items-start
            justify-center text-start"
        >
            <div class="w-full sm:w-1/2">
                <Link
                    to="https://www.divd.works"
                    target="_blank"
                    class="underline text-2xl sm:text-4xl font-bold text-[#ffd736] p-2"
                    >Building DIVD.works
                </Link>
                <p
                    class="text-white text-start text-lg sm:text-xl sm:text-center p-2 sm:p-4"
                >
                    The students of DIVD.works actively contribute to building
                    the DIVD.works platform by developing tools, writing
                    documentation, improving workflows, and helping run the
                    entire organization. This collaboration bridges education
                    and impact, making their work meaningful and practical.
                </p>
            </div>
            <div
                class="transform transition-transform duration-300 hover:scale-105"
            >
                <figure>
                    <img
                        class="h-20 sm:h-24 w-full object-cover"
                        src={DIVDWorks}
                        alt="divd.works"
                    />
                </figure>
            </div>
        </article>
        <hr class="w-3/4 mt-4" />

        <article
            class="p-6 sm:p-12 w-full h-auto flex flex-col sm:flex-row gap-4 sm:gap-8 flex-wrap items-start
            justify-center text-start"
        >
            <div
                class="transform transition-transform duration-300 hover:scale-105"
            >
                <figure>
                    <img
                        class="h-48 sm:h-72 w-full object-cover"
                        src={ICY}
                        alt="ICY Project"
                    />
                </figure>
            </div>
            <div class="w-full sm:w-1/2">
                <p class="text-2xl sm:text-4xl font-bold text-[#ffd736] p-2">
                    Project ICY
                </p>
                <p
                    class="text-white text-start text-lg sm:text-xl sm:text-center p-2 sm:p-4"
                >
                    An open-source alternative Survey app for the Dutch
                    Government.
                </p>
            </div>
        </article>
        <hr class="w-3/4 mt-4" />

        <article
            class="p-6 sm:p-12 w-full h-auto flex flex-col sm:flex-row gap-4 sm:gap-8 flex-wrap items-start
            justify-center text-start"
        >
            <div class="w-full sm:w-1/2">
                <Link
                    to="https://vlam.ai"
                    target="_blank"
                    class="underline text-2xl sm:text-4xl font-bold text-[#ffd736] p-2"
                    >Vlam.ai
                </Link>
                <p
                    class="text-white text-start text-lg sm:text-xl sm:text-center p-2 sm:p-4"
                >
                    The project VLAM (Veilige Lokale AI Modellen) is an
                    open-source project as a follow-up to the LearningLion
                    project.
                </p>
            </div>
            <div
                class="transform transition-transform duration-300 hover:scale-105"
            >
                <figure>
                    <img
                        class="h-48 sm:h-72 w-full object-cover"
                        src={VlamAI}
                        alt="Vlam AI"
                    />
                </figure>
            </div>
        </article>
    </article>
</section>
