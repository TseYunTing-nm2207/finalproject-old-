/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});

const labelYear= ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"];//fill the years here from the top row, but within quotes eg "2009","2010"...

   
    const dataObj = {
        labels: labelYear,           //we want the x axis to be the years
        datasets: [
            {
                label: "Indonesia",// uncomment this line and set this to "Accountancy" for example
                data: [7630,7630,7520,7470,7400,7410,7450,7540,7590,7660],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "rgb(92,34,23)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(92,34,23)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Japan",
                data: [31500,30900,29600,28600,27600,26400,25600,24700,24800,24800],
                borderWidth: 2,
                backgroundColor: "rgb(224,140,123)",
            },
            {
                label: "South Korea",
                data: [16100,16000,15700,15400,15000,14500,14200,14300,14400,14600],
                borderWidth: 2,
                backgroundColor: "rgb(219,82,55)",
                borderColor: "rgb(219,82,55)"
            },
            {
                label: "Singapore",
                data: [465,464,477,470,464,460,459,445,452,464],
                backgroundColor: "rgb(92,57,50)",
                borderColor: "rgb(92,57,50)"
            },
            {
                label: "Taiwan",
                data: [4420,4460,4330,4150,4180,4080,4190,4230,4280,4300],
                borderWidth: 2,
                backgroundColor: "rgb(168,63,42)",
                borderColor: "rgb(168,63,42)"
            },
        ],
    }
    new Chart("death-bar-chart",
            {
                type: "bar",
                data: dataObj,
                options: { 
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: ['Number of deaths','from self-inflicted injury'],//set this to 'Number of female graduates','per Course'
                        fontFamily: "TrebuchetMS",
                        fontSize: 24,
                        fontColor: 'rgb(0,0,0)',
                    }
                }
            });

    const labelYear1= [2013,2014,2015,2016,2017,2018,2019]
    const dataObj1 = {
        labels: labelYear1,           //we want the x axis to be the years
        datasets: [
            {
                label: "No. of persons who sought care for a psychiatric condition",// uncomment this line and set this to "Accountancy" for example
                data: [14084, 16478, 18159, 20267, 21592, 23732, 25639],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                fill: false,
                borderColor:"rgb(75,192,192)",
                tension: 0.1 //put black rgb(0,0,0) or the same color as above
            }]};

            new Chart("new-chart",
            {
                    type: "line",
                    data: dataObj1,
                    options: {

                    }
                  } 

    )