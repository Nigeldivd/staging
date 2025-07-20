<script lang="ts">
    import { Bars3, Icon, XMark } from "svelte-hero-icons";
    import { Link } from "svelte-navigator";
    import DIVDWorks from "../assets/divd-works-logo.svg";

    let collapsed: boolean = true;

    function open_menu(): void {
        collapsed = false;
        return;
    }

    function close_menu(): void {
        collapsed = true;
        return;
    }
</script>

<header class="bg-white dark:bg-black sticky top-0 z-10 shadow-md">
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
        <button class="flex md:hidden" on:click={open_menu}>
            <span class="sr-only">Open menu</span>
            <Icon
                src={Bars3}
                class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 w-20"
            />
        </button>
        <article class="hidden md:flex md:gap-x-12">
            <Link
                to="/how"
                class="text-sm/6 font-semibold text-black dark:text-white"
            >
                How It Works
            </Link>
            <Link
                to="/join"
                class="text-sm/6 font-semibold text-black dark:text-white"
            >
                Join
            </Link>
            <Link
                to="/projects"
                class="text-sm/6 font-semibold text-black dark:text-white"
            >
                Internships & Projects
            </Link>
            <Link
                to="/about"
                class="text-sm/6 font-semibold text-black dark:text-white"
            >
                About
            </Link>
        </article>
        <article class="hidden md:flex lg:flex-1 lg:justify-end">
            <Link
                to="/login"
                class="text-sm/6 font-semibold text-black dark:text-white"
            >
                Log in <span aria-hidden="true">&rarr;</span>
            </Link>
        </article>
        {#if collapsed}
            <slot />
        {:else}
            <!-- Mobile menu, show/hide based on menu open state. -->
            <dialog class="md:hidden inline" aria-modal="true">
                <!-- Background backdrop, show/hide based on slide-over state. -->
                <article class="fixed inset-0 z-50"></article>
                <article
                    class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6
                    sm:ring-1 sm:ring-white/10 opacity-95"
                >
                    <div class="flex items-center justify-between">
                        <Link to="#" class="-m-1.5 p-1.5">
                            <span class="sr-only">DIVD.works</span>
                            <figure>
                                <img
                                    class="h-8 w-auto"
                                    src={DIVDWorks}
                                    alt="DIVD.works"
                                />
                            </figure>
                        </Link>
                        <span class="sr-only">Close menu</span>
                        <button on:click={close_menu}>
                            <Icon
                                src={XMark}
                                class="-m-2.5 rounded-md p-2.5 text-gray-400 w-20"
                            />
                        </button>
                    </div>
                    <article class="mt-6 flow-root">
                        <div class="-my-6 divide-y divide-gray-500/25">
                            <div class="space-y-2 py-6">
                                <Link
                                    to="/how"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white
                                    hover:bg-gray-800"
                                >
                                    How It Works
                                </Link>
                                <Link
                                    to="/join"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white
                                    hover:bg-gray-800"
                                >
                                    Join
                                </Link>
                                <Link
                                    to="/projects"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white
                                    hover:bg-gray-800"
                                >
                                    Internships & Projects
                                </Link>
                                <Link
                                    to="/about"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white
                                    hover:bg-gray-800"
                                >
                                    About
                                </Link>
                            </div>
                            <div class="py-6">
                                <Link
                                    to="/login"
                                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white
                                    hover:bg-gray-800"
                                >
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </article>
                </article>
            </dialog>
        {/if}
    </nav>
</header>
