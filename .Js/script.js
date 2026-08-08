function pickImage(){
    options = ["bacon_in_the_woods.png", "munising.jpg","bacon_near_the_fort.png", "hollow_tree.png", "lake_view.JPG", "bend_in_the_road.png","BaconGallupPark.jpg"]
    randomImg = "images/" + options[Math.floor(Math.random() * options.length)];
    img = document.querySelector("#header_img")
    img.setAttribute("src",randomImg)
    img.setAttribute("alt","")

}


function setImages(){
    options = ["bacon_in_the_woods.png", "bacon_near_the_fort.png", "hollow_tree.png", "lake_view.JPG", "bend_in_the_road.png","BaconGallupPark.jpg"]
    altOptions =["brown labradoodle sitting near a stream in a wooded setting", "brown labradoodle posing in front of a makeshift fort made of branches", "an old hollowed tree",
        "picture of a lake with a tree next to it", "a curved road with trees surrounding it", "Brown Labradoodle sitting next to a statue." ]
    currentImages = document.querySelectorAll(".flex img")
    for (var i = 0; i < currentImages.length; i++) { 
        var j = Math.floor(Math.random() * options.length);
        randomImg = "images/" + options[j];

        currentImages[i].setAttribute("src",randomImg)
        currentImages[i].setAttribute("alt",altOptions[j])    
        currentImages[i].setAttribute("tabindex","0")
    }

}

window.addEventListener('load', () => {
    console.log("The page is fully loaded!");
});

const allImages = document.querySelectorAll("img");

function addHighlight(flexImg){
    flexImg.classList.add("focused-style");
    // if (flexImg.classList.contains("focused-style")) {
    //     console.log("Add highlight is running.")
    // } else (console.log("code 1 broke"))
}
function removeHighlight(flexImg){
    flexImg.classList.remove("focused-style");
    // if (!flexImg.classList.contains("focused-style")) {
    //     console.log("Remove highlight is running.")
    // }
}


allImages.forEach((img) => {
    img.addEventListener('mouseover', () => console.log("The mouse is hovering over an image."));
    img.addEventListener('mouseleave', () => console.log("The mouse is not hovering over an image."));
    
    img.addEventListener('focus', () => console.log("Focusing over an image."));
    img.addEventListener('blur', () => console.log("Not focusing over an image."));

});


function gmailCopy(){
    navigator.clipboard.writeText("buitridung12@gmail.com");
    alert("Email copied");
}

let defaultText = "Hover over an image below to display here.";
let defaultPicContent = "Picture's content go here.";
let defaultBgImage = "none"; 



function upDate(previewPic) {
    console.log("upDate function triggered");
    console.log("previewPic:", previewPic);
    console.log("alt:", previewPic.alt);
    console.log("src:", previewPic.src);
    document.getElementById("text").textContent = previewPic.alt;
    document.getElementById("picContent").textContent = previewPic.title;

    document.getElementById("image").style.backgroundImage = `url('${previewPic.src}')`;
    document.getElementById("image").style.color = "rgb(0, 0, 0)";

}

function undo() {
    console.log("undo function triggered");

    document.getElementById("text").textContent = defaultText;
    document.getElementById("picContent").textContent = defaultPicContent;
    document.getElementById("image").style.backgroundImage = defaultBgImage;
    document.getElementById("image").style.color = "rgb(0,0,0)";
            
}

function upDateDefaultPic(defaultPreviewPic){
    defaultText = defaultPreviewPic.alt;
    defaultPicContent = defaultPreviewPic.title;
    defaultBgImage = `url('${defaultPreviewPic.src}')`;

    console.log("update undo function triggered");
}