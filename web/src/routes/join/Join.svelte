<script lang="ts">
    import { onMount } from "svelte";
    import { Link } from "svelte-navigator";
    import DIVDWorks from "../../assets/divd-works-logo.svg";
    import { countries } from "../../lib/countries";
    import Slogan from "../../lib/Slogan.svelte";

    onMount<void>((): void => {
        const canvas = <HTMLCanvasElement>(
            document.getElementById("signatureCanvas")
        );
        const ctx = <CanvasRenderingContext2D>canvas.getContext("2d")!;
        const signatureDataInput = <HTMLInputElement>(
            document.getElementById("signatureData")
        );
        const clearButton = <HTMLButtonElement>(
            document.getElementById("clearSignature")
        );
        const signatureError = <HTMLParagraphElement>(
            document.getElementById("signatureError")
        );

        let isDrawing: boolean = false;

        // Resize the canvas dynamically
        function resizeCanvas(): void {
            const rect: DOMRect = canvas.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        }

        // Initialize canvas size
        resizeCanvas();

        // Redraw canvas on window resize
        window.addEventListener("resize", resizeCanvas);

        // Start drawing
        canvas.addEventListener("mousedown", (event: MouseEvent): void => {
            isDrawing = true;
            ctx.beginPath();
            ctx.moveTo(event.offsetX, event.offsetY);
        });

        // Draw on the canvas
        canvas.addEventListener("mousemove", (event: MouseEvent): void => {
            if (isDrawing) {
                ctx.lineTo(event.offsetX, event.offsetY);
                ctx.stroke();
            }
        });

        // Stop drawing
        canvas.addEventListener("mouseup", (): void => {
            isDrawing = false;
            // Save the signature as base64 data
            signatureDataInput.value = canvas.toDataURL("image/png");
            signatureError.classList.add("hidden"); // Hide error if signature is provided
        });

        // Clear the canvas
        clearButton.addEventListener("click", (): void => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            signatureDataInput.value = ""; // Clear the hidden input
        });
    });

    export const divd_works: string = DIVDWorks;
</script>

<svelte:head>
    <title>Join - DIVD.works</title>
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

        <form
            id="volunteerForm"
            action="https://submit.jotform.com/submit/250454217214347/"
            method="POST"
            class="bg-black p-6 rounded-lg w-full max-w-2xl mx-auto flex flex-col gap-6"
        >
            <h2 class="text-yellow-400 text-4xl font-semibold">Sign up</h2>
            <article class="flex flex-col md:flex-row gap-4">
                <div class="flex-1">
                    <label
                        for="firstname"
                        class="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300
                        after:content-['_*'] after:text-red-500"
                    >
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstname"
                        name="q4_name[first]"
                        placeholder="First Name"
                        class="w-full p-2 bg-black border border-yellow-400 rounded text-[#ffd736]"
                        required
                    />
                </div>
                <div class="flex-1">
                    <label
                        for="lastname"
                        class="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300
                        after:content-['_*'] after:text-red-500"
                    >
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastname"
                        name="q4_name[last]"
                        placeholder="Last Name"
                        class="w-full p-2 bg-black border border-yellow-400 rounded text-[#ffd736]"
                        required
                    />
                </div>
            </article>
            <article>
                <label
                    for="emailaddress"
                    class="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300
                    after:content-['_*'] after:text-red-500"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="emailaddress"
                    name="q5_email"
                    placeholder="example@email.com"
                    class="w-full p-2 bg-black border border-yellow-400 rounded text-[#ffd736]"
                    required
                />
                <small class="text-gray-400 block mt-1"
                    >Please do not use a hotmail/outlook account</small
                >
            </article>

            <article>
                <label
                    for="phonenumber"
                    class="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300
                    after:content-['_*'] after:text-red-500"
                >
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phonenumber"
                    name="q6_phoneNumber[full]"
                    placeholder="0000000000"
                    class="w-full p-2 bg-black border border-yellow-400 rounded text-[#ffd736]"
                    required
                />
                <small class="text-gray-400 block mt-1"
                    >Please enter a valid phone number.</small
                >
            </article>

            <article>
                <label
                    for="address"
                    class="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300
                    after:content-['_*'] after:text-red-500"
                >
                    Address
                </label>
                <input
                    type="text"
                    id="streetaddress"
                    name="q20_address[addr_line1]"
                    placeholder="Street Address"
                    class="w-full p-2 bg-black border border-yellow-400 rounded mb-2 text-[#ffd736]"
                    required
                />
                <input
                    type="text"
                    id="streetaddress2"
                    name="q20_address[addr_line2]"
                    placeholder="Street Address Line 2"
                    class="w-full p-2 bg-black border border-yellow-400 rounded mb-2 text-[#ffd736]"
                />
                <div class="flex flex-col md:flex-row gap-4">
                    <input
                        type="text"
                        id="city"
                        name="q20_address[city]"
                        placeholder="City"
                        class="flex-1 p-2 bg-black border border-yellow-400 rounded text-[#ffd736]"
                        required
                    />
                    <input
                        type="text"
                        id="state"
                        name="q20_address[state]"
                        placeholder="State / Province"
                        class="flex-1 p-2 bg-black border border-yellow-400 rounded text-[#ffd736]"
                        required
                    />
                </div>
                <input
                    type="text"
                    id="input_20_postal"
                    name="q20_address[postal]"
                    placeholder="Postal / Zip Code"
                    class="w-full p-2 bg-black border border-yellow-400 rounded mt-2 text-[#ffd736]"
                    required
                />
            </article>

            <article class="mb-4">
                <label
                    for="country"
                    class="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300
                    after:content-['_*'] after:text-red-500"
                >
                    Country
                </label>
                <select
                    id="country"
                    name="q7_country"
                    class="w-full p-2 bg-black border border-yellow-400 rounded text-[#ffd736]"
                    required
                >
                    <option value="" disabled selected>
                        Select your country
                    </option>
                    {#each countries as countryname}
                        <option value={countryname.country}>
                            {countryname.country}</option
                        >
                    {/each}
                </select>
            </article>

            <article>
                <label
                    for="linkedin"
                    class="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300
                    after:content-['_*'] after:text-red-500"
                >
                    LinkedIn Profile or Online CV
                </label>
                <input
                    type="url"
                    id="linkedin"
                    name="q8_linkedinProfile"
                    placeholder="URL"
                    class="w-full p-2 bg-black border border-yellow-400 rounded text-[#ffd736]"
                    required
                />
            </article>

            <article>
                <label
                    for="experiences"
                    class="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300
                    after:content-['_*'] after:text-red-500"
                >
                    Something else you would like to share with us?
                </label>
                <textarea
                    id="input_11"
                    name="experiences"
                    placeholder="What makes you you and what makes you truly happy?"
                    class="w-full p-2 bg-black border border-yellow-400 rounded text-[#ffd736]"
                ></textarea>
            </article>

            <article class="flex items-start gap-2">
                <input
                    type="checkbox"
                    id="agree"
                    name="q12_typeA"
                    class="mt-1"
                    required
                />
                <label
                    for="agree"
                    class="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300
                    after:content-['_*'] after:text-red-500"
                >
                    I agree to
                    <Link to="/codeofconduct" class="text-blue-400">
                        the Code of Conduct
                    </Link>
                </label>
            </article>

            <article>
                <label
                    for="signatureCanvas"
                    class="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300
                    after:content-['_*'] after:text-red-500"
                >
                    Signature
                </label>
                <div
                    class="w-full p-6 bg-white text-black rounded-md flex items-center justify-center"
                >
                    <canvas
                        id="signatureCanvas"
                        class="border border-gray-300 rounded"
                    ></canvas>
                </div>
                <div class="mt-2 flex justify-between">
                    <button
                        type="button"
                        id="clearSignature"
                        class="bg-gray-500 text-white px-4 py-2 rounded"
                    >
                        Clear
                    </button>
                    <input
                        type="hidden"
                        id="signatureData"
                        name="q18_signature"
                    />
                </div>
                <p id="signatureError" class="text-red-500 text-sm mt-2 hidden">
                    Signature is required.
                </p>
            </article>

            <button
                type="submit"
                class="w-full bg-yellow-400 text-black font-bold py-2 rounded"
                >Submit</button
            >
        </form>

        <article
            id="thankYouMessage"
            class="hidden text-center text-[#ffd736] font-bold text-xl mt-6"
        >
            Thank you for filling in the form!
        </article>
    </section>
</article>

<style>
    #signatureCanvas {
        width: 100%; /* Make the canvas take the full width of its container */
        height: auto; /* Maintain aspect ratio */
        max-width: 400px; /* Limit the maximum width */
        max-height: 150px; /* Limit the maximum height */
    }

    @media (max-width: 768px) {
        #signatureCanvas {
            max-width: 300px; /* Adjust for smaller screens */
            max-height: 100px;
        }
    }

    @media (max-width: 480px) {
        #signatureCanvas {
            max-width: 250px; /* Further adjust for very small screens */
            max-height: 80px;
        }
    }
</style>
