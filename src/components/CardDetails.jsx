let cardDetails = [];

let N = 20;
for (let i=1; i< N; i++) {
    cardDetails.push({
        id: i,
        title: "Card Title " + i,
        text: "Card Text " + i + " write something for card",
        url: i,
        button: "Button " + String(i) 
    });
}


export default cardDetails;