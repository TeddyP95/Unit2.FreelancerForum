document.addEventListener("DOMContentLoaded", function () {
    const freelancers = [
        { name: "Alice", occupation: "Writer", price: 30 },
        { name: "Bob", occupation: "Teacher", price: 50 }
    ];

    const freelancerList = document.querySelector("#freelancer-list");
    const avgPriceElement = document.querySelector("#average-price");

    function updateFreelancerList() {
        freelancerList.innerHTML = "";
        freelancers.forEach(freelancer => {
            const div = document.createElement("div");
            div.classList.add("freelancer");
            div.innerHTML = `<strong>${freelancer.name}</strong> - ${freelancer.occupation} - $${freelancer.price}`;
            freelancerList.appendChild(div);
        });
        updateAveragePrice();
    }

    function updateAveragePrice() {
        const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
        const average = (total / freelancers.length).toFixed(2);
        avgPriceElement.textContent = average;
    }

    function addFreelancer(name, occupation, price) {
        freelancers.push({ name, occupation, price });
        updateFreelancerList();
    }

    updateFreelancerList();

    setTimeout(() => {
        addFreelancer("Carol", "Programmer", 70);
    }, 3000);

    setInterval(() => {
        const names = ["David", "Emma", "Frank", "Grace", "Hannah"];
        const occupations = ["Designer", "Engineer", "Consultant", "Artist", "Developer"];
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
        const randomPrice = Math.floor(Math.random() * 100) + 20;
        addFreelancer(randomName, randomOccupation, randomPrice);
    }, 5000);
});
