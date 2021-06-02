// import img1 from"../assets/img1.png";

let cardDetails = [
    {
        id: 1,
        title: "Card1",
        text: "text1",
        url: "#",
        button: "Button1"
    }
];

let N = 100;
for (let i=2; i< N; i++) {
    cardDetails.push({
        id: i,
        title: "Card"+i,
        text: "text"+i,
        url: "#",
        button: "Button"+i 
    });
}




export default cardDetails;