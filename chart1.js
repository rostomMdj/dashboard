var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Avr', 'May', 'Jun', 'Jul', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Pannes',
            data: [6,10,12,7,11,14,8,13,17,21,18,15]
            /*[2050, 1900, 2100, 2800, 1800, 2000, 2500, 2600, 2450, 1950, 2300, 2900]*/
            ,
            backgroundColor: [
                /*'rgba(85,85,85, 1)'*/
                "#0095ba"

            ],
            borderColor: "#0095ba"
            /*rgb(41, 155, 99)*/
            ,

            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});