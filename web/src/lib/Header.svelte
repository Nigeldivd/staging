<script lang="ts">
    import { Bars3, Icon, XMark } from "svelte-hero-icons";
    import { Link } from "svelte-navigator";
    import DIVDWorks from "../assets/divd-works-logo.svg";
    import type { MenuItem } from "../types";

    let collapsed: boolean = true;

    function open_menu(): void {
        collapsed = false;
        return;
    }

    function close_menu(): void {
        collapsed = true;
        return;
    }

    const menu_item: MenuItem[] = [
        {
            to: "/how",
            title: "How It Works",
        },
        {
            to: "/join",
            title: "Join",
        },
        {
            to: "/projects",
            title: "Projects",
        },
        {
            to: "/about",
            title: "About",
        },
    ];

    const hamburger_menu_item: MenuItem[] = [
        ...menu_item,
        {
            to: "/codeofconduct",
            title: "Code of Conduct",
        },
        {
            to: "/privacystatement",
            title: "Privacy Statement",
        },
        {
            to: "/internships",
            title: "Internships",
        },
        {
            to: "/sustainability",
            title: "Sustainability",
        },
        {
            to: "/investors",
            title: "Investors",
        },
        {
            to: "/careers",
            title: "Careers",
        },
    ];

    let dropdown_collapsed: boolean = true;
    let dropdown_menu: boolean = false;
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
                    <img
                        class="h-8 w-auto"
                        src={DIVDWorks}
                        alt="DIVD.works Powered by Purpose"
                    />
                </figure>
            </Link>
        </article>
        <button class="flex md:hidden" onclick={open_menu}>
            <span class="sr-only">Open menu</span>
            <Icon
                src={Bars3}
                class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 w-20"
            />
        </button>
        <article class="hidden md:flex md:gap-x-12">
            {#each menu_item as { to, title }, index}
                {#if index != menu_item.length - 1}
                    <Link
                        {to}
                        class="text-sm/6 font-semibold text-black dark:text-white"
                    >
                        {title}
                    </Link>
                {:else}
                    <article
                        class="relative"
                        onmouseover={(): boolean => {
                            return !dropdown_menu
                                ? (dropdown_collapsed = false)
                                : dropdown_collapsed;
                        }}
                        onmouseleave={(): boolean => {
                            return !dropdown_menu
                                ? (dropdown_collapsed = true)
                                : dropdown_collapsed;
                        }}
                    >
                        <Link
                            {to}
                            class="text-sm/6 font-semibold text-black dark:text-white"
                        >
                            {title} <span aria-hidden="true">&#8595;</span>
                        </Link>

                        {#if !dropdown_collapsed}
                            <div
                                class="bg-gray-100 dark:bg-gray-900 absolute top-full opacity-95 rounded-b-2xl
                                shadow-lg"
                            >
                                {#each hamburger_menu_item as { to, title }, index}
                                    {#if index >= menu_item.length}
                                        <Link
                                            {to}
                                            class="block px-3 py-4 text-base/7 font-semibold text-white
                                            hover:bg-gray-200 dark:hover:bg-gray-800 duration-300 ease-in
                                            hover:ease-out w-153"
                                        >
                                            {title}
                                        </Link>
                                    {/if}
                                {/each}
                            </div>
                        {/if}
                    </article>
                {/if}
            {/each}
        </article>
        <article class="hidden md:flex lg:flex-1 lg:justify-end">
            <Link
                to="/"
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
                        <button onclick={close_menu}>
                            <Icon
                                src={XMark}
                                class="-m-2.5 rounded-md p-2.5 text-gray-400 w-20"
                            />
                        </button>
                    </div>
                    <article class="mt-6 flow-root">
                        <div class="-my-6 divide-y divide-gray-500/25">
                            <div class="space-y-2 py-6">
                                {#each hamburger_menu_item as { to, title }, _}
                                    <Link
                                        {to}
                                        class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold
                                        text-white hover:bg-gray-800"
                                    >
                                        {title}
                                    </Link>
                                {/each}
                            </div>
                            <div class="py-6">
                                <Link
                                    to="/"
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
