function changeHomePage(){
    window.location.href = "Home.html"
}
function changeAboutPage(){
    window.location.href = "About.html"
}
function changeEventsPage(){
    window.location.href = "Events.html"
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('categorySelect').addEventListener('change', function() {
        const category = this.value;
        if (category) {
            fetchEventsByCategory(category);
        } else {
            clearEvents();
        }
    });
});

function fetchEventsByCategory(categoryId) {
    const apiURL = 'https://app.ticketmaster.com/discovery/v2/events.json';
    const apiKey = 'n30PAv6jRNbr2Tc9nGWUWpHHPsJk7TCn';
    const url = `${apiURL}?apikey=${apiKey}&classificationId=${categoryId}&size=10`; // Fetches 10 events

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data._embedded && data._embedded.events) {
                displayEvents(data._embedded.events);
            } else {
                displayNoEventsFound();
            }
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
            displayNoEventsFound();
        });
}

function displayEvents(events) {
    const eventsContainer = document.querySelector('.event-list');
    eventsContainer.innerHTML = ''; // Clear previous results
    events.forEach(event => {
        const eventEl = document.createElement('div');
        eventEl.className = 'event';
        eventEl.innerHTML = `
            <h2>${event.name}</h2>
            <p>Date: ${event.dates.start.localDate}</p>
            <p>Location: ${event._embedded.venues[0].name}</p>
            <a href="${event.url}" target="_blank">More Details</a>
        `;
        eventsContainer.appendChild(eventEl);
    });
}

function clearEvents() {
    const eventsContainer = document.querySelector('.event-list');
    eventsContainer.innerHTML = '<p>Select a category to view events.</p>';
}

function displayNoEventsFound() {
    const eventsContainer = document.querySelector('.event-list');
    eventsContainer.innerHTML = '<p>No events found for this category.</p>';
}

function fetchEventsByCategory(categoryId) {
    const apiURL = 'https://app.ticketmaster.com/discovery/v2/events.json';
    const apiKey = 'n30PAv6jRNbr2Tc9nGWUWpHHPsJk7TCn';
    const url = `${apiURL}?apikey=${apiKey}&classificationId=${categoryId}&size=10`; // Adjust if needed

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data._embedded && data._embedded.events) {
                displayEvents(data._embedded.events);
            } else {
                displayNoEventsFound();
            }
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
            displayNoEventsFound();
        });
}



// function for getting venue options 
function loadVenues() {
    const apiUrl = 'https://app.ticketmaster.com/discovery/v2/venues.json?apikey=n30PAv6jRNbr2Tc9nGWUWpHHPsJk7TCn';
    const selectElement = document.getElementById('venues');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            selectElement.innerHTML = '';
            data._embedded.venues.forEach(venue => {
                const option = document.createElement('option');
                option.value = venue.id;
                option.textContent = venue.name;
                selectElement.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error fetching venues:', error);
            selectElement.innerHTML = '<option value="">Error loading venues</option>';
        });
}

window.onload = loadVenues;


// carousel functions
let currentIndex = 0;


 function showSlide(index) {
   const slides = document.querySelector('.carousel-images');
   const dots = document.querySelectorAll('.dot');
   const totalSlides = document.querySelectorAll('.carousel-images img').length;


   // Wrap around index if out of bounds
   if (index >= totalSlides) currentIndex = 0;
   else if (index < 0) currentIndex = totalSlides - 1;
   else currentIndex = index;


   // Move the carousel
   slides.style.transform = `translateX(-${currentIndex * 100}%)`;


   // Update active dot
   dots.forEach(dot => dot.classList.remove('active'));
   dots[currentIndex].classList.add('active');
 }


 function changeSlide(direction) {
   showSlide(currentIndex + direction);
 }


 function goToSlide(index) {
   showSlide(index);
 }


 // Initialize the carousel
 showSlide(currentIndex);