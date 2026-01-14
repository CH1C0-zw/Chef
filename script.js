// Mobile menu toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const gradientBtn = document.querySelector('.gradient-btn');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('bx-x');
  gradientBtn.classList.toggle('hidden');
});

// Close menu when clicking a link
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
    gradientBtn.classList.remove('hidden');
  });
});

// Close menu when scrolling
window.addEventListener('scroll', () => {
  navbar.classList.remove('active');
  menuIcon.classList.remove('bx-x');
  gradientBtn.classList.remove('hidden');
});

// Modal functionality
const mealDescriptions = {
  "filet-mignon": {
    title: "Filet Mignon with Roasted Vegetables",
    description: "This elegant dish features a pan-seared Filet Mignon, cooked to perfection and seasoned with herbs, salt, and pepper. The steak is served alongside tender-crisp asparagus and sweet, roasted cherry tomatoes, all brought together with a drizzle of balsamic glaze for a touch of acidity and sweetness."
  },
  "glazed-carrots": {
    title: "Classic Pan-Seared Steak with Creamy Mash",
    description: "A classic comfort dish, executed with elegance. A prime cut of beef is perfectly seared to create a flavorful crust while remaining tender and juicy inside. It's served with a generous portion of rich, creamy mashed potatoes and a medley of sautéed seasonal vegetables for a balanced and deeply satisfying meal."
  },
  "deconstructed-tart": {
    title: "Artisanal Floral Cupcakes",
    description: "A gourmet cupcake featuring a moist, light-brown cake base, generously topped with a swirl of rich, white buttercream. The cupcake is crowned with an elegant, hand-crafted white flower sculpted from sugar paste, with a single squeeze of blackberry paste nestled in the center to provide a beautiful and flavorful contrast."
  },
  "petit-fours": {
    title: "Peach Cobbler with Vanilla Ice Cream",
    description: " A comforting and rustic classic. This dessert features sweet, juicy peaches baked with a hint of warm cinnamon until bubbly, all garnished with strawberry purree. Served warm, it creates the perfect contrast with a scoop of cold, creamy vanilla ice cream."
  },
  "gourmet-sliders": {
    title: "Gourmet Beef Sliders",
    description: "These are not your average mini-burgers. The patties are made from high-quality ground beef, seasoned and grilled to juiciness. They are served on toasted brioche buns with gourmet toppings like caramelized onions, arugula, aged cheddar cheese, and a special aioli or house sauce."
  },
  "seared-scallops": {
    title: "Chicken Satay with a balsamic dressing",
    description: "A modern reinterpretation of a classic Southeast Asian favorite. Tender chicken is marinated in a blend of aromatic herbs and spices, then skewered and grilled to juicy, smoky perfection. Departing from tradition, these satay skewers are finished with a sharp and tangy balsamic glaze, creating a unique fusion of flavors that is both vibrant and delightfully unexpected."
  }
};

const modal = document.getElementById("myModal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const exploreBtns = document.querySelectorAll(".explore-btn");
const span = document.getElementsByClassName("close")[0];

exploreBtns.forEach(btn => {
  btn.onclick = function() {
    const meal = this.getAttribute("data-meal");
    modalTitle.textContent = mealDescriptions[meal].title;
    modalDescription.textContent = mealDescriptions[meal].description;
    modal.style.display = "block";
  }
});

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
