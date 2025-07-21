<script lang="ts">
    import { Link } from "svelte-navigator";
    import DIVDWorks from "../../assets/divd-works-logo.svg";
    import PoweredByPurpose from "../../assets/stock/Powered-by-purpose.png";
    import Ahmed from "../../assets/team/Ahmed.jpg";
    import Akiko from "../../assets/team/akiko.jpeg";
    import Baran from "../../assets/team/baran.jpeg";
    import Dirk from "../../assets/team/Dirk.jpeg";
    import Liam from "../../assets/team/Liam.jpeg";
    import Loek from "../../assets/team/Loek.jpeg";
    import Luc from "../../assets/team/Luc.jpeg";
    import Nigel from "../../assets/team/Nigel.png";
    import Anonymous from "../../assets/team/stock.jpg";
    import Victor from "../../assets/team/Victor.jpg";
    import Slogan from "../../lib/Slogan.svelte";
    import type { Team } from "../../types";

    const team: Team[] = [
        {
            source: Victor,
            identifier: "Victor Gevers",
            position: "CEO",
        },
        {
            source: Akiko,
            identifier: "Akiko Takashima",
            position: "Chief Financial Officer",
        },
        {
            source: Anonymous,
            identifier: "Jared Hofman",
            position: "SVP, Business Operations",
        },
        {
            source: Liam,
            identifier: "Liam Plokkaar",
            position: "SVP, Sales",
        },
        {
            source: Baran,
            identifier: "Baran Canakci",
            position: "Chief Marketing Officer",
        },
        {
            source: Loek,
            identifier: "Loek Ota",
            position: "SVP, Chief People Office",
        },
        {
            source: Luc,
            identifier: "Luc van Kessel",
            position: "SVP, Support",
        },
        {
            source: Dirk,
            identifier: "Dirk Rijntalder",
            position: "SVP, Chief Legal Officer",
        },
        {
            source: Nigel,
            identifier: "Nigel van Maanen",
            position: "Chief Creative Officer (CCO)",
        },
        {
            source: Ahmed,
            identifier: "Ahmed Ezzammouri",
            position: "CISO",
        },
        {
            source: PoweredByPurpose,
            identifier: "Vacant",
            position: "Vacant",
        },
        {
            source: PoweredByPurpose,
            identifier: "Vacant",
            position: "Vacant",
        },
    ];

    const draggable: boolean = false;
    export const divd_works: string = DIVDWorks;
</script>

<svelte:head>
    <title>About - DIVD.works</title>
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

        <article
            class="w-full flex flex-col gap-4 py-12 justify-center items-center text-center"
        >
            <p
                class="text-xl text-gray-700 dark:text-gray-300 font-medium mb-6"
            >
                The goal of the DIVD.works project is to create a platform that
                brings together young digital talent and employers. We help you
                not only further develop your skills but also find an internship
                or (part-time) job that suits you. Finding an internship – or
                later a graduation internship – turns out to be quite a
                challenge, causing more and more young people to give up. A
                shame, isn’t it? We aim to fix that! Click the button to get
                started and to obtain a suitable internship as fast as possible.
            </p>
            <article class="flex flex-row gap-6">
                <div
                    class="text-[#ffd736] font-bold uppercase text-xl cursor-pointer inline-block font-inherit
                    transition-all duration-100 ease-in bg-gray-800 border-2 border-[#ffd736] hover:bg-[#ffd736]
                    hover:text-black rounded-2xl"
                    style="width: 250px; height: 60px; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 10px 2px #ffd736;"
                >
                    <Link to="/join">
                        <button class="cursor-pointer">Join our cause!</button>
                    </Link>
                </div>
                <div
                    class="text-black dark:text-white font-bold uppercase text-xl cursor-pointer inline-block
                    font-inherit transition-all duration-100 ease-in bg-gray-200 hover:bg-gray-300
                    dark:bg-gray-800 dark:hover:bg-gray-700 rounded-2xl"
                    style="width: 250px; height: 60px; display: flex; align-items: center; justify-content: center;"
                >
                    <Link to="/join">
                        <button class="cursor-pointer"
                            >Looking for an Internship?</button
                        >
                    </Link>
                </div>
            </article>
        </article>

        <hr class="w-full mt-4 text-black dark:text-white" />

        <h2 class="text-4xl font-bold text-center text-yellow-400">
            DIVD.works Team
        </h2>
        <article class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {#each team as { source, identifier, position }, _}
                <div
                    class="bg-white p-6 rounded-lg shadow-md text-center dark:bg-gray-800 flex flex-col items-center"
                >
                    <figure>
                        <img
                            src={source}
                            {draggable}
                            alt={identifier}
                            class="w-56 xl:w-44 h-56 xl:h-44 mx-auto rounded-full mb-4 border-2 border-[#ffd736]"
                        />
                    </figure>
                    <h3 class="text-2xl font-bold text-yellow-400">
                        {identifier}
                    </h3>
                    <p
                        class="text-black dark:text-white text-lg font-medium py-1"
                    >
                        {position}
                    </p>
                    <li
                        class="bg-[#ffd736] h-[1px] w-[233px] mt-6 list-none"
                    ></li>
                </div>
            {/each}
        </article>

        <hr class="w-full mt-4 text-black dark:text-white" />
    </section>
</article>
