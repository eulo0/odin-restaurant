import pastaGif from "../assets/Pasta Sauce Day GIF.gif";
import happyHourImg from "../assets/kelsey-chance-tAH2cA_BL5g-unsplash.jpg";
import pastaSpecialImg from "../assets/brelyn-bashrum-0CHWRa_ZqJ4-unsplash.jpg";
import dessertSpecialImg from "../assets/haberdoedas-Jk9P3FPskFY-unsplash.jpg";


export const home = () => {
    const returnDiv = document.createElement("div")
    const heroSection = document.createElement("div");
    const heroGif = document.createElement("img");
    const slogan = document.createElement("p");
    const ctaContainer = document.createElement("div");
    const takeoutBtn = document.createElement("button");
    const deliveryBtn = document.createElement("button");
    const infoHeader = document.createElement("p");
    const center = document.createElement("div");

    heroSection.id = "hero-section";
    heroGif.id = "hero";
    slogan.classList.add("slogan");
    ctaContainer.classList.add("cta-btns");
    takeoutBtn.classList.add("cta-btn");
    deliveryBtn.classList.add("cta-btn");
    infoHeader.classList.add("header2");
    center.classList.add("center");

    heroGif.src = pastaGif;
    slogan.textContent = "A little taste of Italy in every bite";
    takeoutBtn.textContent = "Order Takeout";
    deliveryBtn.textContent = "Order Delivery";
    infoHeader.textContent = "Checkout our Specials!"

    const happyHour = createInfoItem(happyHourImg,"Monday: Happy Hour");
    const pastaSpecial = createInfoItem(pastaSpecialImg, "Wednesday: All You Can Eat Pastas");
    const dessertSpecial = createInfoItem(dessertSpecialImg, "Friday: Buy 1 Get 1 Free Desserts");

    center.append(happyHour, pastaSpecial, dessertSpecial);
    ctaContainer.append(takeoutBtn, deliveryBtn);
    heroSection.append(heroGif, slogan, ctaContainer);

    returnDiv.append(heroSection, infoHeader, center);

    return returnDiv


    function createInfoItem(image, caption){
        const infoContainer = document.createElement("div");
        const infoImage = document.createElement("img");
        const infoCaption = document.createElement("p");

        infoContainer.classList.add("entry");
        infoImage.classList.add("thumbnail");
        infoCaption.classList.add("caption");

        infoImage.src = image;
        infoCaption.textContent = caption;

        infoContainer.append(infoImage);
        infoContainer.append(infoCaption);
    
        return infoContainer;
    }
};

export const homeRef = () => {
    const refContainer = document.createElement("div");
    refContainer.id = "references";
    const logoRef = createReference("Restaurant Logo", "https://www.vecteezy.com/vector-art/35556556-restaurant-logo-with-spoon-and-fork-icon-modern-concept");
    const pastaGifRef = createReference("Pasta Gif", "https://giphy.com/gifs/day-pasta-hump-5J3l6o7fNj7LG");
    const happyHourRef = createReference("Happy Hour", "https://unsplash.com/photos/group-of-people-tossing-wine-glass-tAH2cA_BL5g");
    const pastaSpecialRef = createReference("Penne Pasta", "https://unsplash.com/photos/a-fork-lifts-penne-pasta-coated-in-red-sauce-0CHWRa_ZqJ4");
    const dessertSpecialRef = createReference("Chocolate Cake", "https://unsplash.com/photos/carrot-cake-slice-on-teal-plate-u5_cfnwi2CY")

    refContainer.append(logoRef, pastaGifRef, happyHourRef, pastaSpecialRef, dessertSpecialRef);
    return refContainer; 

    function createReference(label, link){
        const reference = document.createElement("a");
        reference.href = link;
        reference.textContent = label;
        return reference;
    }
}