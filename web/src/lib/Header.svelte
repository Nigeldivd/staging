<script lang="ts">
    import { Link } from "svelte-navigator";
    import DIVDWorks from "../assets/divd-works-logo.svg";
</script>

<header class="bg-white dark:bg-black">
    <nav
        class="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
    >
        <article class="flex lg:flex-1">
            <Link to="/" class="-m-1.5 p-1.5">
                <span class="sr-only">DIVD.works</span>
                <figure>
                    <img class="h-8 w-auto" src={DIVDWorks} alt="DIVD.works" />
                </figure>
            </Link>
        </article>
        <article class="flex lg:hidden">
            <button
                id="hamburgerButton"
                type="button"
                class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            >
                <span class="sr-only">Open main menu</span>
                <svg
                    class="size-12"
                    fill="none"
                    viewBox="0 0 22 22"
                    stroke-width="1.7"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </button>
        </article>
        <article class="hidden lg:flex lg:gap-x-12">
            <Link to="/how_it_works" class="text-sm/6 font-semibold text-white">
                How It Works
            </Link>
            <Link to="/join" class="text-sm/6 font-semibold text-white">
                Join
            </Link>
            <Link to="/projects" class="text-sm/6 font-semibold text-white">
                Internships & Projects
            </Link>
            <Link to="/about" class="text-sm/6 font-semibold text-white">
                About
            </Link>
        </article>
        <article class="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/login" class="text-sm/6 font-semibold text-white">
                Log in <span aria-hidden="true">&rarr;</span>
            </Link>
        </article>
    </nav>
</header>
