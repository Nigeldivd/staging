<script lang="ts">
    const canvas: HTMLCanvasElement = document.getElementById(
        "signatureCanvas",
    ) as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d");
    const signatureDataInput = document.getElementById("signatureData");
    const clearButton = document.getElementById("clearSignature");
    const signatureError: HTMLParagraphElement = document.getElementById(
        "signatureError",
    ) as HTMLParagraphElement;

    let isDrawing = false;

    // Resize the canvas dynamically
    function resizeCanvas() {
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    }

    // Initialize canvas size
    resizeCanvas();

    // Redraw canvas on window resize
    window.addEventListener("resize", resizeCanvas);

    // Start drawing
    canvas.addEventListener("mousedown", (e) => {
        isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    });

    // Draw on the canvas
    canvas.addEventListener("mousemove", (e) => {
        if (isDrawing) {
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
        }
    });

    // Stop drawing
    canvas.addEventListener("mouseup", () => {
        isDrawing = false;
        // Save the signature as base64 data
        signatureDataInput.value = canvas.toDataURL("image/png");
        signatureError.classList.add("hidden"); // Hide error if signature is provided
    });

    // Clear the canvas
    clearButton.addEventListener("click", () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        signatureDataInput.value = ""; // Clear the hidden input
    });
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

<section
    class="main"
    style="font-family: 'Arial Rounded MT'; font-weight: bold; font-style: normal;"
>
    <a href="/"
        ><img
            class="logo glow-filter"
            src="/img/divd-works-logo-v2.svg"
            alt="DIVD Works Logo"
        /></a
    >

    <article class="header-text" aria-hidden="true">
        <br />
        <span class="glow-filter" data-text="Powered by Purpose"
            >Powered by Purpose</span
        >
    </article>

    <svg
        class="filters"
        width="1440px"
        height="300px"
        viewBox="0 0 1440 300"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
    >
        <defs>
            <filter
                id="glow-4"
                color-interpolation-filters="sRGB"
                x="-50%"
                y="-200%"
                width="200%"
                Height="500%"
            >
                <feGaussianBlur
                    in="SourceGraphic"
                    data-target-blur="4"
                    stdDeviation="4"
                    result="blur4"
                />
                <feGaussianBlur
                    in="SourceGraphic"
                    data-target-blur="19"
                    stdDeviation="19"
                    result="blur19"
                />
                <feGaussianBlur
                    in="SourceGraphic"
                    data-target-blur="9"
                    stdDeviation="9"
                    result="blur9"
                />
                <feGaussianBlur
                    in="SourceGraphic"
                    data-target-blur="30"
                    stdDeviation="30"
                    result="blur30"
                />
                <feColorMatrix
                    in="blur4"
                    result="color-0-blur"
                    type="matrix"
                    values="1 0 0 0 0
                          0 0.9803921568627451 0 0 0
                          0 0 0.9647058823529412 0 0
                          0 0 0 0.8 0"
                />
                <feOffset
                    in="color-0-blur"
                    result="layer-0-offsetted"
                    dx="0"
                    dy="0"
                    data-target-offset-y="0"
                />
                <feColorMatrix
                    in="blur19"
                    result="color-1-blur"
                    type="matrix"
                    values="0.8156862745098039 0 0 0 0
                          0 0.49411764705882355 0 0 0
                          0 0 0.2627450980392157 0 0
                          0 0 0 1 0"
                />
                <feOffset
                    in="color-1-blur"
                    result="layer-1-offsetted"
                    dx="0"
                    dy="2"
                    data-target-offset-y="2"
                />
                <feColorMatrix
                    in="blur9"
                    result="color-2-blur"
                    type="matrix"
                    values="1 0 0 0 0
                          0 0.6666666666666666 0 0 0
                          0 0 0.36470588235294116 0 0
                          0 0 0 0.65 0"
                />
                <feOffset
                    in="color-2-blur"
                    result="layer-2-offsetted"
                    dx="0"
                    dy="2"
                    data-target-offset-y="2"
                />
                <feColorMatrix
                    in="blur30"
                    result="color-3-blur"
                    type="matrix"
                    values="1 0 0 0 0
                          0 0.611764705882353 0 0 0
                          0 0 0.39215686274509803 0 0
                          0 0 0 1 0"
                />
                <feOffset
                    in="color-3-blur"
                    result="layer-3-offsetted"
                    dx="0"
                    dy="2"
                    data-target-offset-y="2"
                />
                <feColorMatrix
                    in="blur30"
                    result="color-4-blur"
                    type="matrix"
                    values="0.4549019607843137 0 0 0 0
                          0 0.16470588235294117 0 0 0
                          0 0 0 0 0
                          0 0 0 1 0"
                />
                <feOffset
                    in="color-4-blur"
                    result="layer-4-offsetted"
                    dx="0"
                    dy="16"
                    data-target-offset-y="16"
                />
                <feColorMatrix
                    in="blur30"
                    result="color-5-blur"
                    type="matrix"
                    values="0.4235294117647059 0 0 0 0
                          0 0.19607843137254902 0 0 0
                          0 0 0.11372549019607843 0 0
                          0 0 0 1 0"
                />
                <feOffset
                    in="color-5-blur"
                    result="layer-5-offsetted"
                    dx="0"
                    dy="64"
                    data-target-offset-y="64"
                />
                <feColorMatrix
                    in="blur30"
                    result="color-6-blur"
                    type="matrix"
                    values="0.21176470588235294 0 0 0 0
                          0 0.10980392156862745 0 0 0
                          0 0 0.07450980392156863 0 0
                          0 0 0 1 0"
                />
                <feOffset
                    in="color-6-blur"
                    result="layer-6-offsetted"
                    dx="0"
                    dy="64"
                    data-target-offset-y="64"
                />
                <feColorMatrix
                    in="blur30"
                    result="color-7-blur"
                    type="matrix"
                    values="0 0 0 0 0
                          0 0 0 0 0
                          0 0 0 0 0
                          0 0 0 0.68 0"
                />
                <feOffset
                    in="color-7-blur"
                    result="layer-7-offsetted"
                    dx="0"
                    dy="64"
                    data-target-offset-y="64"
                />
                <feMerge>
                    <feMergeNode in="layer-0-offsetted" />
                    <feMergeNode in="layer-1-offsetted" />
                    <feMergeNode in="layer-2-offsetted" />
                    <feMergeNode in="layer-3-offsetted" />
                    <feMergeNode in="layer-4-offsetted" />
                    <feMergeNode in="layer-5-offsetted" />
                    <feMergeNode in="layer-6-offsetted" />
                    <feMergeNode in="layer-7-offsetted" />
                    <feMergeNode in="layer-0-offsetted" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
    </svg>
</section>

<!-- <div class="flex flex-col items-center justify-center text-white">
          <iframe
          id="JotFormIFrame-250454217214347"
          title="DIVD.Works: Volunteer Registration Form "
          onload="window.parent.scrollTo(0,0)"
          allowtransparency="true"
          allow="geolocation; microphone; camera; fullscreen"
          src="https://form.jotform.com/250454217214347"
          frameborder="0"
          style="min-width:100%;max-width:100%;border:none;"
          color = "#ffd736;"
          scrolling="no">
            </iframe>
            <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
            <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-250454217214347']", "https://form.jotform.com/")</script>
        </div> -->

<form
    id="volunteerForm"
    action="https://submit.jotform.com/submit/250454217214347/"
    method="POST"
    class="bg-black p-6 rounded-lg w-full max-w-2xl mx-auto flex flex-col gap-6"
>
    <!-- Name Section -->
    <div class="flex flex-col md:flex-row gap-4">
        <div class="flex-1">
            <label class="block text-sm font-bold mb-2" style="color: #ffd736;"
                >First Name *</label
            >
            <input
                type="text"
                id="first_4"
                name="q4_name[first]"
                placeholder="First Name"
                class="w-full p-2 bg-black border border-yellow-400 rounded text-[#ffd736]"
                required
            />
        </div>
        <div class="flex-1">
            <label class="block text-sm font-bold mb-2" style="color: #ffd736;"
                >Last Name *</label
            >
            <input
                type="text"
                id="last_4"
                name="q4_name[last]"
                placeholder="Last Name"
                class="w-full p-2 bg-black border border-yellow-400 rounded text-[#ffd736]"
                required
            />
        </div>
    </div>

    <!-- Email Section -->
    <div>
        <label class="block text-sm font-bold mb-2" style="color: #ffd736;"
            >Email *</label
        >
        <input
            type="email"
            id="input_5"
            name="q5_email"
            placeholder="example@email.com"
            class="w-full p-2 bg-black border border-yellow-400 rounded text-[#ffd736]"
            required
        />
        <small class="text-gray-400 block mt-1"
            >Please do not use a hotmail/outlook account</small
        >
    </div>

    <!-- Phone Number Section -->
    <div>
        <label class="block text-sm font-bold mb-2" style="color: #ffd736;"
            >Phone Number *</label
        >
        <input
            type="tel"
            id="input_6_full"
            name="q6_phoneNumber[full]"
            placeholder="0000000000"
            class="w-full p-2 bg-black border border-yellow-400 rounded text-[#ffd736]"
            required
        />
        <small class="text-gray-400 block mt-1"
            >Please enter a valid phone number.</small
        >
    </div>

    <!-- Address Section -->
    <div>
        <label class="block text-sm font-bold mb-2" style="color: #ffd736;"
            >Address *</label
        >
        <input
            type="text"
            id="input_20_addr_line1"
            name="q20_address[addr_line1]"
            placeholder="Street Address"
            class="w-full p-2 bg-black border border-yellow-400 rounded mb-2 text-[#ffd736]"
            required
        />
        <input
            type="text"
            id="input_20_addr_line2"
            name="q20_address[addr_line2]"
            placeholder="Street Address Line 2"
            class="w-full p-2 bg-black border border-yellow-400 rounded mb-2 text-[#ffd736]"
        />
        <div class="flex flex-col md:flex-row gap-4">
            <input
                type="text"
                id="input_20_city"
                name="q20_address[city]"
                placeholder="City"
                class="flex-1 p-2 bg-black border border-yellow-400 rounded text-[#ffd736]"
                required
            />
            <input
                type="text"
                id="input_20_state"
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
    </div>

    <!-- Country Section -->
    <div class="mb-4">
        <label class="block text-sm font-bold" style="color: #ffd736;"
            >Country *</label
        >
        <select
            id="input_7"
            name="q7_country"
            class="w-full p-2 bg-black border border-yellow-400 rounded text-[#ffd736]"
            required
        >
            <option value="" disabled selected>Select your country</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bosnia and Herzegovina"
                >Bosnia and Herzegovina</option
            >
            <option value="Botswana">Botswana</option>
            <option value="Brazil">Brazil</option>
            <option value="Brunei">Brunei</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cabo Verde">Cabo Verde</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Central African Republic"
                >Central African Republic</option
            >
            <option value="Chad">Chad</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Congo (Congo-Brazzaville)"
                >Congo (Congo-Brazzaville)</option
            >
            <option value="Costa Rica">Costa Rica</option>
            <option value="Croatia">Croatia</option>
            <option value="Cuba">Cuba</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czechia (Czech Republic)"
                >Czechia (Czech Republic)</option
            >
            <option value="Denmark">Denmark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Eswatini (fmr. Swaziland)"
                >Eswatini (fmr. Swaziland)</option
            >
            <option value="Ethiopia">Ethiopia</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Ghana">Ghana</option>
            <option value="Greece">Greece</option>
            <option value="Grenada">Grenada</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guinea">Guinea</option>
            <option value="Guinea-Bissau">Guinea-Bissau</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Holy See">Holy See</option>
            <option value="Honduras">Honduras</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Iran">Iran</option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Korea (North)">Korea (North)</option>
            <option value="Korea (South)">Korea (South)</option>
            <option value="Kosovo">Kosovo</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Laos">Laos</option>
            <option value="Latvia">Latvia</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libya">Libya</option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malawi">Malawi</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Mexico">Mexico</option>
            <option value="Micronesia">Micronesia</option>
            <option value="Moldova">Moldova</option>
            <option value="Monaco">Monaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montenegro">Montenegro</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar (formerly Burma)"
                >Myanmar (formerly Burma)</option
            >
            <option value="Namibia">Namibia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherlands">Netherlands</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="North Macedonia">North Macedonia</option>
            <option value="Norway">Norway</option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Palau">Palau</option>
            <option value="Palestine State">Palestine State</option>
            <option value="Panama">Panama</option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Philippines">Philippines</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Qatar">Qatar</option>
            <option value="Romania">Romania</option>
            <option value="Russia">Russia</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
            <option value="Saint Lucia">Saint Lucia</option>
            <option value="Saint Vincent and the Grenadines"
                >Saint Vincent and the Grenadines</option
            >
            <option value="Samoa">Samoa</option>
            <option value="San Marino">San Marino</option>
            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal">Senegal</option>
            <option value="Serbia">Serbia</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra Leone">Sierra Leone</option>
            <option value="Singapore">Singapore</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Solomon Islands">Solomon Islands</option>
            <option value="Somalia">Somalia</option>
            <option value="South Africa">South Africa</option>
            <option value="South Sudan">South Sudan</option>
            <option value="Spain">Spain</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Sudan">Sudan</option>
            <option value="Suriname">Suriname</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syria">Syria</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Thailand">Thailand</option>
            <option value="Timor-Leste">Timor-Leste</option>
            <option value="Togo">Togo</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Uganda">Uganda</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States of America"
                >United States of America</option
            >
            <option value="Uruguay">Uruguay</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Vatican City">Vatican City</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Yemen">Yemen</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
        </select>
    </div>

    <!-- LinkedIn Section -->
    <div>
        <label class="block text-sm font-bold mb-2" style="color: #ffd736;"
            >LinkedIn Profile or Online CV *</label
        >
        <input
            type="url"
            id="input_8"
            name="q8_linkedinProfile"
            placeholder="URL"
            class="w-full p-2 bg-black border border-yellow-400 rounded text-[#ffd736]"
            required
        />
    </div>

    <!-- Additional Information Section -->
    <div>
        <label class="block text-sm font-bold mb-2" style="color: #ffd736;"
            >Something else you would like to share with us?</label
        >
        <textarea
            id="input_11"
            name="q11_somethingElse"
            placeholder="What makes you you and what makes you truly happy?"
            class="w-full p-2 bg-black border border-yellow-400 rounded text-[#ffd736]"
        ></textarea>
    </div>

    <!-- Terms and Conditions Section -->
    <div class="flex items-start gap-2">
        <input
            type="checkbox"
            id="agree"
            name="q12_typeA"
            class="mt-1"
            required
        />
        <label for="agree" class="text-sm" style="color: #ffd736;"
            >I agree to <a href="https://divd.works/code/" class="text-blue-400"
                >the Code of Conduct</a
            > *</label
        >
    </div>

    <!-- Signature Section -->
    <div>
        <label class="block text-sm font-bold mb-2" style="color: #ffd736;"
            >Signature *</label
        >
        <div
            class="w-full p-6 bg-white text-black rounded-md flex items-center justify-center"
        >
            <canvas id="signatureCanvas" class="border border-gray-300 rounded"
            ></canvas>
        </div>
        <div class="mt-2 flex justify-between">
            <button
                type="button"
                id="clearSignature"
                class="bg-gray-500 text-white px-4 py-2 rounded">Clear</button
            >
            <input type="hidden" id="input_18" name="q18_signature" />
        </div>
        <p id="signatureError" class="text-red-500 text-sm mt-2 hidden">
            Signature is required.
        </p>
    </div>

    <!-- Submit Button -->
    <button
        type="submit"
        class="w-full bg-yellow-400 text-black font-bold py-2 rounded"
        >Submit</button
    >
</form>

<div
    id="thankYouMessage"
    class="hidden text-center text-[#ffd736] font-bold text-xl mt-6"
>
    Thank you for filling in the form!
</div>

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
