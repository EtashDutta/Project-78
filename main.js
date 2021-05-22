var reasons=['Ashok Das','Arunima Das', 'Mridumoy Dutta','Sanjukta Dutta','Etash Dutta','Erish Dutta'] 
var images=['https://thumbs.dreamstime.com/z/grandfather-portrait-old-man-wearing-glasses-grey-hair-mustache-wearing-sweater-cartoon-grandpa-senior-man-standing-vector-86364474.jpg',
'https://previews.123rf.com/images/stockgiu/stockgiu1711/stockgiu171101145/89550972-grandmother-cartoon-design.jpg',
'https://i.pinimg.com/originals/87/b8/3b/87b83ba77a10a1d3313ed7872918524d.jpg',
'https://cdn5.vectorstock.com/i/1000x1000/45/09/cute-cartoon-a-young-mother-vector-4414509.jpg',
'https://cdn3.vectorstock.com/i/1000x1000/41/22/cartoon-boy-kid-son-family-image-vector-15024122.jpg',
'https://thumbs.dreamstime.com/b/caucasian-boy-standing-next-to-number-five-gift-boxes-birthday-party-five-years-old-boy-wearing-party-hat-100541204.jpg'];


var i=0;
function nextslide(){
document.getElementById("reasontext").innerHTML=reasons[i];
document.getElementById("mainimage").src=images[i];
i++;
}