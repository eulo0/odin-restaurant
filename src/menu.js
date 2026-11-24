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

