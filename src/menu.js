import spaghettiImg from "../assets/aurora-song-uFHgoz2lnZQ-unsplash.jpg";
import carbonaraImg from "../assets/zoran-borojevic--5FECW242og-unsplash.jpg";
import pestoImg from "../assets/helen-van-2TMqlO-zqNY-unsplash.jpg";
import penneImg from "../assets/brelyn-bashrum-0CHWRa_ZqJ4-unsplash.jpg";
import saladImg from "../assets/tania-melnyczuk-xeTv9N2FjXA-unsplash.jpg";
import cakeImg from "../assets/haberdoedas-Jk9P3FPskFY-unsplash.jpg";

export const menu = () => {
    const grid = document.createElement("div");
    const spaghetti = createInfoItem(spaghettiImg, "Spaghetti $10");
    const carbonara = createInfoItem(carbonaraImg, "Carbonara $12");
    const pesto = createInfoItem(pestoImg, "Pesto Pasta $10");
    const penne = createInfoItem(penneImg, "Penne Pasta $11");
    const salad = createInfoItem(saladImg, "Salad $5");
    const cake = createInfoItem(cakeImg, "Chocolate Cake $3");

    grid.append(spaghetti, carbonara, pesto, penne, salad,cake);
    grid.classList.add("menu-grid");

    return grid

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

export const menuRef = () => {
    const refContainer = document.createElement("div");
    refContainer.id = "references";
    const logoRef = createReference("Restaurant Logo", "https://www.vecteezy.com/vector-art/35556556-restaurant-logo-with-spoon-and-fork-icon-modern-concept");
    const spaghettiRef = createReference("Spaghetti", "https://unsplash.com/photos/a-plate-of-spaghetti-with-tomato-sauce-and-grated-cheese-uFHgoz2lnZQ");
    const carbonaraRef = createReference("Carbonara", "https://unsplash.com/photos/pasta-dish-on-white-ceramic-plate--5FECW242og");
    const pestoRef = createReference("Pesto", "https://unsplash.com/photos/delicious-pesto-pasta-with-fresh-basil-2TMqlO-zqNY");
    const penneRef = createReference("Penne", "https://unsplash.com/photos/a-fork-lifts-penne-pasta-coated-in-red-sauce-0CHWRa_ZqJ4")
    const saladRef = createReference("Salad", "https://unsplash.com/photos/vegetable-salad-on-white-ceramic-plate-xeTv9N2FjXA");
    const cakeRef = createReference("Chocolate Cake", "https://unsplash.com/photos/carrot-cake-slice-on-teal-plate-u5_cfnwi2CY")
    refContainer.append(logoRef, spaghettiRef, carbonaraRef, pestoRef, penneRef, saladRef, cakeRef);
    return refContainer; 

    function createReference(label, link){
        const reference = document.createElement("a");
        reference.href = link;
        reference.textContent = label;
        return reference;
    }
}

