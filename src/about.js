import teamImg from "../assets/lens-fables-5Xnv2np708c-unsplash.jpg";
import ceoImg from "../assets/victoria-kubiaki-4zubM5mJIwI-unsplash.jpg";
import headChefImg from "../assets/andy-sartori-Hz_SNGGPnxI-unsplash.jpg";

export const about = () => {
    const returnDiv = document.createElement("div");
    const aboutGrid = document.createElement("div");
    const left = document.createElement("div");
    const right = document.createElement("div");
    const header = document.createElement("p");
    const title = document.createElement("p");
    const rightImg = document.createElement("img");
    const center = document.createElement("div");

    aboutGrid.classList.add("about-grid");
    left.classList.add("left");
    right.classList.add("right");
    title.classList.add("about-title");
    rightImg.classList.add("about-img");
    header.classList.add("header2");
    center.classList.add("founder-center");

    title.textContent = "About Us";
    rightImg.src = teamImg;
    header.textContent = "Meet The Founders"
    const paragraph1 = addText("Bilancia's started off in the 1880s as a small family restaurant opened by Italian immigrants in search of a better life. In those early days, it was a gathering place for fellow Italian newcomers—a slice of home where familiar aromas, old-world recipes, and shared stories brought comfort in a brand-new country.");
    const paragraph2 = addText("Word of the cooking didn't stay in one circle for long. Soon, neighbors from all walks of life began pulling up a chair, drawn in by the slow-simmered sauces, hand-crafted pastas, and unmistakable warmth of an Italian family table.");
    const paragraph3 = addText("More than a century later, Bilancia's remains a place where everyone is welcome. Whether it is your first visit or a lifelong tradition, we are proud to share the recipes and hospitality that started it all.")

    left.append(title, paragraph1, paragraph2, paragraph3);
    right.append(rightImg);
    aboutGrid.append(left, right);
    
    const ceo = addFounder(ceoImg, "Chris Mitchell (CEO)");
    const headChef = addFounder(headChefImg, "Martha Miller (Head Chef)");
    center.append(ceo, headChef);

    returnDiv.append(aboutGrid, header, center);
    return returnDiv;

    function addText(paragraphText){
        const text = document.createElement("p");
        text.classList.add("about-text");
        text.textContent = paragraphText;
        return text;
    }

    function addFounder(image, text){
        const entry = document.createElement("div");
        const picture = document.createElement("img");
        const caption = document.createElement("p");

        entry.classList.add("entry");
        picture.classList.add("founder-thumbnail");
        caption.classList.add("caption");

        picture.src = image;
        caption.textContent = text;

        entry.append(picture, caption);
        return entry;
    }
};

export const aboutRef = () => {
    const refContainer = document.createElement("div");
    refContainer.id = "references";
    const logoRef = createReference("Restaurant Logo", "https://www.vecteezy.com/vector-art/35556556-restaurant-logo-with-spoon-and-fork-icon-modern-concept");
    const teamRef = createReference("Team", "https://unsplash.com/photos/three-smiling-restaurant-staff-members-stand-behind-a-counter-5Xnv2np708c");
    const ceoRef = createReference("CEO", "https://unsplash.com/photos/man-making-dough-while-smiling-4zubM5mJIwI");
    const headchefRef = createReference("Head Chef", "https://unsplash.com/photos/a-woman-in-a-chefs-outfit-holding-a-frying-pan-Hz_SNGGPnxI");
    refContainer.append(logoRef, teamRef, ceoRef, headchefRef);
    return refContainer; 

    function createReference(label, link){
        const reference = document.createElement("a");
        reference.href = link;
        reference.textContent = label;
        return reference;
    }
}