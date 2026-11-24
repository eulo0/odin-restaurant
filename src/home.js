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
