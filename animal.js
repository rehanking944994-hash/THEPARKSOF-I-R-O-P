var animals = [
    {
        Name: "Lion",
        Scientific_Name: "Panthera leo",
        Category: "Mammal",
        Habitat: "Grasslands and savannas of Africa",
        Diet: "Carnivore (meat eater)",
        Image: "animal-pictures/lion.avif",
        discription: "The lion is one of the most powerful and respected animals in the wild. Known as the King of the Jungle, it symbolizes strength, bravery, and leadership. Lions live in social groups called prides, where females usually hunt while males protect the territory. They are skilled predators that hunt zebras, antelopes, and buffaloes. A lion's loud roar can be heard from several kilometers away. Lions spend up to 20 hours a day resting to conserve energy for hunting. Their muscular bodies, sharp claws, and powerful jaws make them one of Africa's top predators.",
    },

    {
        Name: "Tiger",
        Scientific_Name: "Panthera tigris",
        Category: "Mammal",
        Habitat: "Forests, grasslands, and mangrove swamps of Asia",
        Diet: "Carnivore (meat eater)",
        Image: "animal-pictures/a-g-YuQgNYku1M8-unsplash.jpg",
        discription: "The tiger is the largest wild cat in the world and is famous for its orange coat with black stripes. Every tiger has a unique stripe pattern, just like human fingerprints. Tigers are solitary animals that hunt mainly at night using stealth and patience. They are excellent swimmers and enjoy spending time in water. Tigers mainly feed on deer, wild boar, and other medium-sized mammals. Due to habitat destruction and illegal hunting, tiger populations have declined significantly, making wildlife conservation extremely important.",
    },
    {
        Name: "Elephant",
        Scientific_Name: "Loxodonta africana",
        Category: "Mammal",
        Habitat: "Grasslands, forests, and savannas of Africa",
        Diet: "Herbivore (plant eater)",
        Image: "animal-pictures/elephant.jpg",
        discription: "The elephant is the largest land animal on Earth. It uses its long trunk for breathing, drinking, smelling, lifting objects, and communicating. Elephants are intelligent and emotional animals that live in close family groups led by an experienced female. They have excellent memories and are known to care for injured members of their herd. Elephants spend most of their day eating grasses, leaves, fruits, and tree bark.",
    },
    {
        Name: "Brown Bear",
        Scientific_Name: "Ursus arctos",
        Category: "Mammal",
        Habitat: "Forests, mountains, and tundra",
        Diet: "Omnivore (plants and meat)",
        Image: "animal-pictures/bear 2.webp",
        discription: "Brown bears are powerful mammals with muscular bodies and sharp claws. They feed on fish, berries, plants, and small mammals. Many brown bears hibernate during winter to conserve energy.",
    },
    {
        Name: "Giraffe",
        Scientific_Name: "Giraffa camelopardalis",
        Category: "Mammal",
        Habitat: "African savannas and woodlands",
        Diet: "Herbivore (plant eater)",
        Image: "animal-pictures/girrafe2.webp",
        discription: "The cheetah is the fastest land animal on Earth, capable of reaching speeds of up to 120 km/h in just a few seconds. Its lightweight body, long legs, and flexible spine make it perfectly designed for speed. Unlike lions, cheetahs hunt during the day and rely on quick acceleration to catch prey.",
    },
    {
        Name: "Zebra",
        Scientific_Name: "Equus quagga",
        Category: "Mammal",
        Habitat: "Grasslands and savannas of Africa",
        Diet: "Herbivore (plant eater)",
        Image: "animal-pictures/zebrra.jpg",
        discription: "The zebra is recognized by its unique black and white stripes. No two zebras have exactly the same stripe pattern. Zebras live in large herds that provide protection against predators such as lions and hyenas. They spend most of their time grazing on grass and communicate with each other through sounds, facial expressions, and body movements.",
    },
    {
        Name: "Deer",
        Scientific_Name: "Cervidae",
        Category: "Mammal",
        Habitat: "Forests, grasslands, and mountains",
        Diet: "Herbivore (plant eater)",
        Image: "animal-pictures/deer.jpg",
        discription: "The deer is a graceful and peaceful herbivorous mammal found in forests, grasslands, mountains, and open meadows around the world. Deer are well known for their slender bodies, long legs, large ears, and excellent ability to move quickly through their natural environment. Most male deer, known as bucks or stags, grow antlers that are naturally shed and regrown each year. Deer mainly feed on grass, leaves, fruits, flowers, and other vegetation. They have a strong sense of hearing and smell, which helps them detect predators from a distance. Deer usually live in groups and communicate with one another through sounds, body movements, and scent. Their speed and agility allow them to escape danger quickly, making them an important and beautiful part of many natural ecosystems.",
    },
    {
        Name: "Leopard",
        Scientific_Name: "Panthera pardus",
        Category: "Mammal",
        Habitat: "Forests, mountains, and grasslands of Africa and Asia",
        Diet: "Carnivore (meat eater)",
        Image: "animal-pictures/leopard.jpg",
        discription: "Leopards are powerful and highly adaptable big cats. They are excellent climbers and often carry their prey into trees to protect it from other predators. Their spotted coat provides excellent camouflage.",
    },
    {
        Name: "Cheetah",
        Scientific_Name: "Acinonyx jubatus",
        Category: "Mammal",
        Habitat: "Grasslands and open plains of Africa",
        Diet: "Carnivore (meat eater)",
        Image: "animal-pictures/cheetas.jpg",
        discription: "The cheetah is the fastest land animal on Earth, capable of reaching speeds of up to 120 km/h in just a few seconds. Its lightweight body, long legs, and flexible spine make it perfectly designed for speed. Unlike lions, cheetahs hunt during the day and rely on quick acceleration to catch prey.",
    },
    {
        Name: "Bengal Tiger",
        Scientific_Name: "Panthera tigris tigris",
        Category: "Mammal",
        Habitat: "Tropical forests, grasslands, and mangroves",
        Diet: "Carnivore (meat eater)",
        Image: "animal-pictures/bengal tiger.jpg",
        discription: "The Bengal tiger is the most common tiger subspecies and is famous for its strength and beauty. It is a skilled hunter that lives alone in dense forests and wetlands. Conservation programs have helped increase its population in protected areas.",
    },
    {
        Name: "Gorilla",
        Scientific_Name: "Gorilla gorilla",
        Category: "Mammal",
        Habitat: "Tropical rainforests of Central Africa",
        Diet: "Herbivore (plant eater)",
        Image: "animal-pictures/gorila.jpg",
        discription: "Gorillas are the largest living primates and share much of their DNA with humans. They live in family groups led by a silverback male and communicate through sounds, gestures, and facial expressions. Gorillas are gentle giants that mainly eat leaves, stems, and fruits.",
    },
    {
        Name: "Orangutan",
        Scientific_Name: "Pongo pygmaeus",
        Category: "Mammal",
        Habitat: "Rainforests of Borneo and Sumatra",
        Diet: "Omnivore (fruits, plants, insects)",
        Image: "animal-pictures/orguatan.jpg",
        discription: "Orangutans are among the most intelligent primates. They spend most of their lives in trees and use simple tools to gather food. Their diet mainly includes fruits, leaves, insects, and bark. Deforestation is their biggest threat.",
    },
    {
        Name: "Polar Bear",

        Scientific_Name: "Ursus maritimus",
        Category: "Mammal",
        Habitat: "Arctic sea ice and coastal regions",
        Diet: "Carnivore (mainly seals)",
        Image: "animal-pictures/polar bear.jpg",
        discription: "Polar bears are the largest bear species and are perfectly adapted to freezing Arctic conditions. Their thick white fur and layer of fat keep them warm while hunting seals on sea ice. They are excellent swimmers and can travel long distances in search of food.",
    },
    {
        Name: "Black Bear",
        Scientific_Name: "Ursus americanus",
        Category: "Mammal",
        Habitat: "Forests and mountains of North America",
        Diet: "Omnivore (plants, berries)",
        Image: "animal-pictures/black bear.jpg",
        discription: "Black bears are intelligent and adaptable animals that live in forests and mountains. They eat fruits, berries, insects, fish, and small animals. They are skilled climbers and often climb trees to find food or escape danger.",
    },
    {
        Name: "Hippopotamus",
        Scientific_Name: "Hippopotamus amphibius",
        Category: "Mammal",
        Habitat: "Rivers, lakes, and wetlands",
        Diet: "Herbivore (grass eater)",
        Image: "animal-pictures/hippopotamus.jpg",
        discription: "The hippopotamus is one of the heaviest land mammals in the world. It spends most of the day in water to stay cool and comes onto land at night to graze on grass. Although it appears calm, the hippo is highly territorial and is considered one of Africa's most dangerous animals. Its massive jaws and powerful body make it capable of defending itself against even large predators.",
    },
    {
        Name: "White Rhinoceros",
        Scientific_Name: "Ceratotherium simum",
        Category: "Mammal",
        Habitat: "Grasslands and savannas",
        Diet: "Herbivore (grass eater)",
        Image: "animal-pictures/white rhinocerous.jpg",
        discription: "The rhinoceros is a massive herbivore with thick skin and one or two horns. It has poor eyesight but excellent hearing and smell. Rhinos spend their day grazing on grass and resting in mud to cool themselves. Illegal poaching has made several rhino species critically endangered.",
    },
    {
        Name: "Crocodile",
        Scientific_Name: "Crocodylus niloticus",
        Category: "Reptile",
        Habitat: "Rivers, lakes, and wetlands",
        Diet: "Carnivore (meat eater)",
        Image: "animal-pictures/cro2.jpg",
        discription: "Crocodiles are ancient reptiles that have existed for millions of years. They are powerful ambush predators with extremely strong jaws. They spend much of their time in water, waiting patiently for prey to approach before launching a sudden attack.",
    },
    {
        Name: "King Cobra",
        Scientific_Name: "Ophiophagus h..",
        Category: "Reptile",
        Habitat: "Forests and grasslands",
        Diet: "Carnivore (feeds mainly snakes)",
        Image: "animal-pictures/king2.jpg",
        discription: "The King Cobra is the world's longest venomous snake. It mainly feeds on other snakes and is known for raising its head and spreading its hood when threatened. Despite its fearsome appearance, it usually avoids humans unless provoked.",
    },
    {
        Name: "Python",
        Scientific_Name: "Python bivittatus",
        Category: "Reptile",
        Habitat: "Forests, swamps",
        Diet: "Carnivore (birds and mammals)",
        Image: "animal-pictures/python2.jpg",
        discription: "Pythons are large non-venomous snakes that kill prey by constriction rather than venom. They swallow their prey whole and can survive for weeks after a large meal. Pythons are excellent swimmers and climbers.",
    },
    {
        Name: "Kangaroo",
        Scientific_Name: "Macropus rufus",
        Category: "Mammal",
        Habitat: "Grasslands and deserts",
        Diet: "Herbivore (grass and shrubs)",
        Image: "animal-pictures/kangroo.jpg",
        discription: "The kangaroo is an iconic Australian animal known for its powerful hind legs and long tail. Female kangaroos carry their babies, called joeys, inside a pouch until they are fully developed. Kangaroos travel by hopping, which is an energy-efficient way to move over long distances.",
    },


    {
        Name: "Kutta",
        Scientific_Name: "Desi Kutta",
        Category: "Mammal",
        Habitat: "Grasslands and deserts",
        Diet: "Herbivore (grass and shrubs)",
        Image: "animal-pictures/kutta.jpg",
        discription: "The Kutta is an iconic Australian animal known for its powerful hind legs and long tail. Female kangaroos carry their babies, called joeys, inside a pouch until they are fully developed. Kangaroos travel by hopping, which is an energy-efficient way to move over long distances.",
    },
]




let animalsContainer = document.querySelector("#animals .row");

if (animalsContainer) {
    for (let animal of animals) {
        animalsContainer.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card animal-card h-100">

                    <img src="${animal.Image}" class="card-img-top animal-img">

                    <div class="card-body d-flex flex-column">
                        <h5>${animal.Name}</h5>

                        <p><b>Scientific Name:</b> ${animal.Scientific_Name}</p>
                        <p><b>Category:</b> ${animal.Category}</p>
                        <p><b>Habitat:</b> ${animal.Habitat}</p>
                        <p><b>Diet:</b> ${animal.Diet}</p>

                        <a href="animaldetail.html?image=${animal.Image}&name=${animal.Name}&scientific_name=${animal.Scientific_Name}&category=${animal.Category}&habitat=${animal.Habitat}&diet=${animal.Diet}&description=${animal.discription}"
                            class="btn btn-success rounded-pill mt-auto w-100">
                         See More Details
                        </a>
                    </div>

                </div>
            </div>
        `;
    }
}


$(document).ready(function(){
                $("#search").on("keyup", function() {
                    var value = $(this).val().toLowerCase();

                    $("#animals div").filter(function() {
                        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                    });
                });
            });