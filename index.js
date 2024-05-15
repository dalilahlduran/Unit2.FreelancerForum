const freelancers = [
    { name: "Stu Pickles", price: 40, occupation: "Engineer" },
    { name: "Drew Pickles", price: 51, occupation: "Consultant" },
    { name: "Dr. Carmichael", price: 43, occupation: "Professor" },
  ];

const newFreelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
];

  const root = document.querySelector("#root");

// Heading code below:

  const freelancerTitle =  document.createElement("h1");
  freelancerTitle.innerText = "Freelancer Forum";
  root.append(freelancerTitle);

  const freelancerDescription = document.createElement("p");
  freelancerDescription.innerText = "The average starting price is $25.";
  root.append(freelancerDescription);

  const freelancerTitle2 = document.createElement("h1");
  freelancerTitle2.innerText = "Available Freelancers";
  root.append(freelancerTitle2);

// Table code below:

const freelancerTable = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

for (let key of Object.keys(freelancers[0])){
    const th = document.createElement("th");
    th.innerText = key;
    thead.appendChild(th);
}

freelancerTable.appendChild(thead);
freelancerTable.appendChild(tbody);
root.appendChild(freelancerTable);

renderFreelancers();

function renderFreelancers (){
    const freelancerTable = document.querySelector("tbody");
    const freelancerElements = freelancers.map((freelancer) => {
        const row = document.createElement("tr");

        const p_name = document.createElement("td");
        p_name.innerText = freelancer.name;

        const p_price = document.createElement("td");
        p_price.innerText = freelancer.price;

        const p_occupation = document.createElement("td");
        p_occupation.innerText = freelancer.occupation;

        row.appendChild(p_name);
        row.appendChild(p_price);
        row.appendChild(p_occupation);

        return row;
    });

    freelancerTable.replaceChildren(...freelancerElements);    
}


function addFreelancer(){
    // if (newFreelancers.length > 0){
    //     const newFreelancer = newFreelancers.pop();

    //     freelancers.push(newFreelancer);

    //     // renderFreelancers();
    // }

    let newFreelancer = newFreelancers[Math.floor(Math.random() * newFreelancers.length)];
    newFreelancer = newFreelancers.pop();

    freelancers.push(newFreelancer);

    renderFreelancers();
}



setInterval(addFreelancer, 2000);

init();


