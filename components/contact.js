'use client';

export default function Contact() {
    async function handleSubmit(event) {
        var sent = document.querySelector("#sent");

        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", process.env.ACCESS_KEY);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            const delay = ms => new Promise(res => setTimeout(res, ms));

            sent.className = "block";
            document.getElementById("form").reset();
            await delay(3000);
            sent.className = "hidden";
        }
    }

    return (
        <form id="form" className="grow flex flex-col" onSubmit={handleSubmit}>
            <div className="sm:space-x-8 sm:flex">
                <div className="flex-1 mb-4">
                    <label for="email" className="block mb-2 text-sm">Your email</label>
                    <input type="email" id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@example.com" required />
                </div>
                <div className="flex-1 mb-4">
                    <label for="subject" className="block mb-2 text-sm">Subject</label>
                    <input type="text" id="subject" name="subject" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="e.g., Project Inquiry, Collaboration" required />
                </div>
            </div>
            <div class="sm:col-span-2 mb-2">
                <label for="message" class="block mb-2 text-sm">Your message</label>
                <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Write your message here..."></textarea>
            </div>
            <div className="flex justify-between items-baseline flex-col sm:flex-row">
                <button type="submit" className="mb-4 mt-4 underline underline-offset-2 font-medium sm:mb-0">Send Message</button>
                <span id="sent" className="hidden">Message Sent!</span>
            </div>
        </form>
    );
}