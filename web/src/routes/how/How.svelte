<script lang="ts">
    import { Link } from "svelte-navigator";

    if (window.matchMedia("prefers-color-scheme: dark").matches) {
        // Enable dark mode based on system preference
        document.documentElement.classList.add("dark");
    }
</script>

<svelte:head>
    <title>HowItWorks - DIVD.works</title>
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

<section
    class="bg-black text-[#FFD736] dark:bg-black dark:text-[#FFD736] m-0 p-0"
>
    <article class="mx-auto py-10 flex flex-col items-center text-center">
        <Link href="/">
            <figure>
                <img
                    class="logo glow-filter2"
                    src="img/divd-works-logo-v2.svg"
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

    <!--Section 1-->
    <article class="flex flex-row p-8">
        <article class="border-8 border-r-0 w-20 h-36"></article>
        <article
            class="border-8 w-full sm:w-[60%] md:w-[40%] h-36 rounded-r-full bg-[#f3cd34] flex items-center
            justify-center text-black font-bold text-2xl lg:text-5xl sm:text-4xl md:text-4xl"
        >
            Bridging the Gap
        </article>
    </article>

    <article
        class="flex flex-wrap justify-between items-center lg:justify-center p-12"
    >
        <article
            class="text-center max-w-full sm:max-w-4xl text-base sm:text-lg md:text-[28px] font-bold px-4 p-8"
        >
            <p>
                Isn't it a shame that it's so hard for students to find an
                internship? Despite their motivation, creativity, and fresh
                perspectives, countless students struggle to secure a place
                where they can put their skills to the test and gain real-world
                experience. This not only holds them back but also means that
                companies miss out on young talent eager to contribute and
                learn.
            </p>
            <br />
            <p>
                What if we could change that? Imagine a platform that bridges
                the gap between ambitious students and forward-thinking
                companies, offering opportunities that benefit both sides. A
                place where students can showcase their potential, and companies
                can discover motivated individuals ready to make a difference.
            </p>
            <br />
            <p>
                Let’s create that connection. Let’s make internships accessible,
                rewarding, and impactful—for students and businesses alike.
            </p>
        </article>
        <div class="max-w-full sm:max-w-3xl px-4">
            <img
                class="w-full rounded-[100px]"
                src="img/stock/stress.jpg"
                alt=""
            />
        </div>
    </article>

    <!--Section 2-->
    <article class="bg-[#101010]">
        <article class="flex flex-row justify-end p-8">
            <div
                class="border-8 w-full sm:w-[60%] md:w-[40%] h-36 rounded-l-full bg-[#f3cd34] flex items-center
                justify-center text-black font-bold text-2xl lg:text-4xl sm:text-4xl md:text-4xl"
            >
                Connecting Ambition
            </div>
            <div class="border-8 border-l-0 w-20 h-36 bg-black"></div>
        </article>

        <article
            class="flex flex-wrap justify-between items-center lg:justify-center p-12"
        >
            <div class="max-w-full sm:max-w-3xl px-4">
                <img
                    class="w-full rounded-[100px]"
                    src="img/stock/accepted.jpg"
                    alt=""
                />
            </div>
            <div
                class="text-center max-w-full sm:max-w-4xl text-base sm:text-lg md:text-[28px] font-bold px-4"
            >
                <p>
                    We aim to bridge the gap between companies and students by
                    creating a transparent, efficient platform. Currently, the
                    internship process is unclear and overwhelming, making it
                    difficult for students to find the right match.
                </p>
                <br />
                <p>
                    Our solution is to enable clear filtering based on skills,
                    interests, and requirements, allowing both students and
                    companies to connect more effectively. This way, companies
                    gain access to motivated talent, and students find
                    internships that truly fit their abilities and ambitions.
                </p>
                <br />
                <p>
                    By fostering direct communication and clarity, we make
                    internships fair and accessible for everyone.
                </p>
            </div>
        </article>
    </article>
</section>
