let cardDetails = [];

let N = 10;
for (let i=1; i< N; i++) {
    cardDetails.push({
        id: i,
        title: "Card Title" + i,
        text: "Card Text " + i + " write something for card",
        url: "#",
        button: "Button " + i 
    });
}


export default cardDetails;