

/*-----------Navbar start here--------------*/


const sections = ['home', 'skills', 'service', 'project', 'testimonials', 'contact'];
const navLinksContainer = document.getElementById('nav-links');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Generate links dynamically
sections.forEach(section => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${section}`;
    a.textContent = section.charAt(0).toUpperCase() + section.slice(1);
    a.classList.add('nav-link');
    li.appendChild(a);
    navLinksContainer.appendChild(li);
});

const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu for mobile
navToggle.addEventListener('click', () => {
    navLinksContainer.classList.add('show');
});

// Close button click
navClose.addEventListener('click', () => {
    navLinksContainer.classList.remove('show');
});

// Hide menu and jump to section immediately
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Hide mobile menu immediately
        navLinksContainer.classList.remove('show');

        // Direct jump to target section
        targetSection.scrollIntoView({ behavior: 'auto', block: 'start' });
    });
});

// Active link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionEl = document.getElementById(section);
        const sectionTop = sectionEl.offsetTop - 80;
        if(scrollY >= sectionTop) current = section;
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${current}`){
            link.classList.add('active');
        }
    });
});
 

/*-----------Navbar end here--------------*/










/*-------------project start here--------------*/

  const projects = {
    1: { title: "Facebook Ads Campaign", shortDesc: "I create and manage result-driven Facebook Ads campaigns to help businesses reach their target audience. From audience research to ad copywriting and budget optimization, I ensure maximum ROI. My focus is always on generating leads, sales, or brand awareness based on client needs.", process: "1. Audience research & competitor analysis, 2. Ad creatives (images, videos, ad copy), 3. Campaign setup & budget allocation, 4. A/B testing for performance, 5. Daily monitoring & optimization.", screenshots: ["port1.jpg","port13.jpg","port14.jpg","port15.jpg"], beforeAfter: "Before - low engagement and high cost per lead, After - optimizeed targeting doubled conversions and reduced costs. ", tools: "Facebook Ads Manager, Photoshop (for creatives design), Google Analytics, Meta Business Suite", client: "Sohel managed our Facebook Ads with great professionalism. He targeted the right audience and optimized our budget perfectly. We saw a clear boost in leads and conversions within weeks. Highly recommended!" },
    2: { title: "YouTube SEO & Marketing", shortDesc: "I optimize YouTube videos to rank higher in search results and suggested sections. My strategy includes keyword research, engaging titles, descriptions, tags, and attractive thumbnails. This ensures maximum reach, watch time, and subscriber growth.", process: "1. Keyword & competitor research, 2. Optimizing video title, description & tags, 3. Creating high-quality thumbnails, 4. Adding end screens & cards, 5. Sharing & promoting video for reach.", screenshots: ["port2.jpg","port7.jpg","port9.jpg","port11.jpg"], beforeAfter: "Before - videos weren't ranking or getting views, After - SEO boosted rankings and brought consistent traffic.", tools: "TubeBuddy / VidIQ, Canva (for thumbnails), Google Keyword Planner, YouTube Analytics.", client: "Thanks to Sohel's YouTube SEO service, my videos started ranking on the first page. My channel grew faster, and engagement increased significantly. He is definitely an expert in this field!" },
    3: { title: "Website SEO & Increase Traffic", shortDesc: "I provide complete website SEO and auditing services to improve visibility and organic traffic. From on-page SEO to technical audits, I make sure websites are optimized according to Google's standards. This boosts ranking, speed, and user experience.", process: "1. Website audit (technical + content), 2. Keyword research & mapping, 3. On-page optimization (meta tags, headings, alt texts), 4. Fixing technical issues (speed, mobile-friendliness), 5. Off-page SEO & backlink strategy.", screenshots: ["port3.jpg","port8.jpg","port3.jpg","port8.jpg"], beforeAfter: "Before - site had technical issues and poor visibility, After - fixes improved speed, SEO and organic search traffic.", tools: "Ahrefs/ SEMrush, Google Search Console, Screaming Frog SEO Spider, Yoast SEO (WordPress)", client:"Sohel did a fantastic SEO audit on my website. He identified the issues and fixed them quickly. My site's ranking and organic traffic improved within a short time. Great job!" },
    4: { title: "YouTube Thumbnail Design", shortDesc: "I design eye-catching YouTube thumbnails that instantly grab attention and increase click-through rates. My designs are professional, branded, and aligned with each video’s theme, ensuring higher engagement.", process: "1. Research video niche & competitors’ thumbnails, 2. Select bold fonts, colors, and imagery, 3. Design clean, attractive, and branded layout, 4. Deliver high-resolution thumbnail (1280×720)", screenshots: ["port16.jpg","port17.jpg","port18.jpg","port19.jpg","port20.jpg","port21.jpg","port22.jpg","port23.jpg"], beforeAfter: "Before – thumbnails were plain and videos had low clicks; After – my designs boosted CTR and improved video performance", tools: "Canva Pro, Photoshop, Illustrator", client: "Sohel created stunning thumbnails for my YouTube channel. The CTR doubled, and my videos finally started getting the attention they deserve. Very creative and professional!" }
  };

  let currentProject = null;
  let currentIndex = 0;
  let autoSlideInterval;

  function openModal(id){
    currentProject = projects[id];
    currentIndex = 0;

    document.getElementById('modalTitle').innerText = currentProject.title;
    document.getElementById('modalShortDesc').innerHTML = "<strong> Description:</strong> "+currentProject.shortDesc;
    document.getElementById('modalProcess').innerHTML = "<strong>Work Process:</strong> "+currentProject.process;
    document.getElementById('modalBeforeAfter').innerHTML = "<strong>Before & After:</strong> "+currentProject.beforeAfter;
    document.getElementById('modalTools').innerHTML = "<strong>Tools Used:</strong> "+currentProject.tools;
    document.getElementById('modalClient').innerHTML = "<strong>Client Review:</strong> "+currentProject.client;

    const galleryDiv = document.getElementById('modalGallery');
    galleryDiv.innerHTML = "";
    currentProject.screenshots.forEach((src,index)=>{
      const img = document.createElement('img');
      img.src = src; img.alt=currentProject.title;
      img.onclick=()=>{showImage(index);};
      galleryDiv.appendChild(img);
    });

    showImage(0);
    document.getElementById('projectModal').style.display="block";
    autoSlideInterval = setInterval(()=>{nextImage();},2000); // এটা হলো স্লাইডার স্পিড।
  }

  function closeModal(){
    document.getElementById('projectModal').style.display="none";
    clearInterval(autoSlideInterval);
  }

  function showImage(index){
    currentIndex=index;
    document.getElementById('modalFeatured').src=currentProject.screenshots[index];
  }

  function prevImage(){
    currentIndex=(currentIndex-1+currentProject.screenshots.length)%currentProject.screenshots.length;
    showImage(currentIndex);
  }

  function nextImage(){
    currentIndex=(currentIndex+1)%currentProject.screenshots.length;
    showImage(currentIndex);
  }

  window.onclick=function(event){
    if(event.target==document.getElementById('projectModal')) closeModal();
  }











/*------nav-menu start here--------------*/

 
document.addEventListener("DOMContentLoaded", function(){

    const hamburger = document.querySelector(".hamburger");
    const sideMenu = document.querySelector(".side-menu");
    const closeBtn = document.querySelector(".close-btn");
    const sideLinks = document.querySelectorAll(".side-menu a");

    // মেনু ওপেন
    hamburger.addEventListener("click", ()=> { 
        sideMenu.classList.add("active"); 
        history.pushState({menuOpen:true}, ""); // history state add
    });

    // মেনু ক্লোজ ফাংশন
    function closeMenu() {
        sideMenu.classList.remove("active");
        if(history.state && history.state.menuOpen){
            history.back(); // history state remove
        }
    }

    // ক্লোজ বাটনে ক্লিক
    closeBtn.addEventListener("click", closeMenu);

    // লিঙ্কে ক্লিক
    sideLinks.forEach(link => { 
        link.addEventListener("click", (e)=> { 
            e.preventDefault(); 
            const targetId = link.getAttribute("href");
            const target = document.querySelector(targetId);

            if(target){
                window.scrollTo({
                    top: target.offsetTop - 60, // navbar offset
                    behavior: "smooth"
                });
            }
            closeMenu(); 
        }); 
    });

    // ব্যাক বাটন
    window.addEventListener("popstate", (e)=>{
        if(e.state && e.state.menuOpen){
            sideMenu.classList.remove("active");
        }
    });
}); 
 
  function goHireMe(){
    window.location.replace("About-Me.html");
  }


