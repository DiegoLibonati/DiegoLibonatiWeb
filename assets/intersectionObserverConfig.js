const sectionSkills = document.getElementById("skills");
const sectionAbout = document.getElementById("about");
const sectionPortfolio = document.getElementById("portfolio");
const sectionContact = document.getElementById("contact");
const sectionHome = document.getElementById("home");
const navLogo = document.getElementById("nav_logo");
const sectionWorks = document.getElementById("works");


const loadSections = (entrys, observador) =>{

    entrys.forEach(function(entry){

        if (entry.isIntersecting){

            if (entry.target.id == "home" || entry.target.id == "nav_logo"){
                entry.target.style.opacity = "1"
            }else if (entry.target.id == "skills" || entry.target.id == "portfolio"){
                entry.target.style.transform = "scale(1.0)";
            }else if (entry.target.id == "about" || entry.target.id == "contact"){
                entry.target.style.transform = "translateX(0%)";
            }else if (entry.target.id == "works"){
                entry.target.style.transform = "scaleX(1.0)";
            }

        }

    });

}

const observer = new IntersectionObserver(loadSections, {

    root: null,
    rootMargin: "0px 0px 0px 0px",
    thereshold: 1.0,

});

observer.observe(sectionSkills);
observer.observe(sectionAbout);
observer.observe(sectionPortfolio);
observer.observe(sectionContact);
observer.observe(sectionHome);
observer.observe(navLogo);
observer.observe(sectionWorks);