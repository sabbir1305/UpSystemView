//Json Object
var data = [
    // {
    // 	time: '2015-03-29',
    // 	body: [{
    // 		tag: 'h1',
    // 		content: "Lorem ipsum"
    // 	},
    // 	{
    // 		tag: 'p',
    // 		content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
    // 	}]
    // },
    {
        time: '2018-01-01',
        body: [{
                tag: 'h1',
                content: "25 Iconic Projects"
            },
            {
                tag: 'h5',
                content: 'Over 10,000 propeties delivered - more than 25 iconic projects with Motor City expansion our pride.'
            }
        ]
    },
    {
        time: '1993-01-01',
        body: [{
                tag: 'h1',
                content: "Most Traded Stock Billion Cap"
            },
            {
                tag: 'h5',
                content: 'Union Properties became a publicly listed company in 1993 with more than 12,000 shareholders'
            }
        ]
    },
    {
        time: '1987-01-01',
        body: [{
                tag: 'h1',
                content: "Headquarter in Dubai"
            },
            {
                tag: 'h5',
                content: 'The year saw the launch of our property development in Dubai with a rich and diverse investment portfolio.'
            }
        ]
    }
];

$.fn.albeTimeline.languages = {
    "es-ES": {
        days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        shortMonths: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        msgEmptyContent: "No hay información para mostrar."
    },
    "en-US": {
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        msgEmptyContent: "No information to display."
    },
    "fr-FR": {
        days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
        months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
        shortMonths: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],
        msgEmptyContent: "Aucune information à afficher."
    }
};

//Internationalization
$("#myTimeline").albeTimeline(data, {
    language: "fr-FR",
    formatDate: 'DD dd MMMM yyyy'
});