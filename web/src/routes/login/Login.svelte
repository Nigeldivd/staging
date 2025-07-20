<script lang="ts">
    import { Link } from "svelte-navigator";
    import DIVDWorks from "../../assets/divd-works-logo.svg";
    import GitHub from "../../assets/icons/github.svg";
    import Google from "../../assets/icons/google.svg";
</script>

<svelte:head>
    <title>Login - DIVD.works</title>
</svelte:head>

<article class="flex justify-center">
    <section
        class="px-3 lg:px-0 py-6 md:py-9 lg:py-6 flex flex-col items-center bg-white dark:bg-black lg:text-left
        justify-center w-full lg:w-2/3"
    >
        <article
            class="h-full bg-black text-[#FFD736] dark:bg-black dark:text-[#FFD736]"
        >
            <Link to="/">
                <figure>
                    <img
                        class="mx-auto h-10 w-auto"
                        src={DIVDWorks}
                        alt="DIVD.works"
                    />
                </figure>
            </Link>
            <h1
                class="my-6 text-center text-2xl/9 font-bold tracking-tight text-white"
            >
                Sign in to your account
            </h1>
        </article>

        <article class="mt-6 w-full sm:w-3/5 md:2/5 lg:1/4">
            <form class="space-y-4" action="#" method="POST">
                <label
                    for="email"
                    class="block text-sm/6 font-medium text-white"
                    >Email address</label
                >
                <input
                    type="email"
                    name="email"
                    id="email"
                    autocomplete="email"
                    required
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1
                    -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2
                    focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <label
                    for="password"
                    class="block text-sm/6 font-medium text-white"
                    >Password</label
                >
                <input
                    type="password"
                    name="password"
                    id="password"
                    autocomplete="current-password"
                    required
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1
                    -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2
                    focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <article class="flex flex-row justify-between">
                    <div class="flex flex-row justify-center items-center">
                        <div class="group grid size-4 grid-cols-1">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300
                                bg-white checked:border-indigo-600 checked:bg-indigo-600
                                indeterminate:border-indigo-600indeterminate:bg-indigo-600
                                focus-visible:outline-2 focus-visible:outline-offset-2
                                focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100
                                disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                            />
                        </div>

                        <label
                            for="remember-me"
                            class="block text-sm/6 text-white pl-2"
                            >Remember me</label
                        >
                    </div>

                    <div class="text-sm/6">
                        <a
                            href="#"
                            class="font-semibold text-white hover:text-indigo-500"
                            >Forgot password?</a
                        >
                    </div>
                </article>
                <div>
                    <button
                        type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >Sign in</button
                    >
                </div>
            </form>

            <div
                class="relative flex justify-center text-sm/6 font-medium mt-4"
            >
                <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-300"></div>
                </div>
                <span class="bg-white px-6 text-gray-900 relative"
                    >Or continue with</span
                >
            </div>

            <div class="my-4 grid grid-cols-2 gap-4">
                <a
                    href="#"
                    class="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 focus-visible:ring-transparent"
                >
                    <figure class="size-5">
                        <img
                            src={Google}
                            alt="Google"
                            class="size-5 fill-[#4285F4]"
                        />
                    </figure>
                    <span class="text-sm/6 font-semibold">Google</span>
                </a>

                <a
                    href="#"
                    class="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 focus-visible:ring-transparent"
                >
                    <figure class="size-5">
                        <img
                            src={GitHub}
                            alt="GitHub"
                            class="size-5 fill-[#333]"
                        />
                    </figure>
                    <span class="text-sm/6 font-semibold">GitHub</span>
                </a>
            </div>

            <p class="text-center text-sm/6 text-gray-500">
                Not a member?
                <Link
                    to="/join"
                    class="font-semibold text-indigo-600 hover:text-indigo-500"
                    >Signup here.
                </Link>
            </p>
        </article>
    </section>
</article>
