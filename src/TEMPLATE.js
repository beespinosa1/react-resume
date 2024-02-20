
// MUI: Icons
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import SnapchatIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Twitter';


// Data object that contains all of the data for the template.
const data = {
    profile: {
        name: "Bárbara Espinosa",
        address: "Quito, Ecuador",
        avatar: "https://media.licdn.com/dms/image/D4E03AQEqrDUkvUa8LQ/profile-displayphoto-shrink_800_800/0/1699774343373?e=1714003200&v=beta&t=kbQ60CWV66nvUtPcMOxl1nl2_6tJs9-_zE4MhxrD8lk",
        contacts: [
            { icon: PhoneIcon, label: "Teléfono", value: "(+593) 984869589" },
            { icon: EmailIcon, label: "Email", value: "espinosatbarbar@gmail.com" },
            { icon: HomeIcon, label: "Dirección", value: "Quito, Ecuador" }
        ],
        skills: [
            { category: "Lenguajes de Programación:", skills: "Python, C++, Javascript" },
            { category: "Bases de datos:", skills: "PostgreSQL, Oracle, MySQL, SQL Server" },
            { category: "Sistemas Operativos:", skills: "Unix/Linux, Windows" },
            { category: "Documentacion:", skills: "MS Word, Excel, PowerPoint" },
        ],
        socialMedia: [
            { icon: FacebookIcon },
            { icon: InstagramIcon },
            { icon: LinkedInIcon },
            { icon: TwitterIcon },
            { icon: SnapchatIcon },
            { icon: PinterestIcon },
        ],
        education: [
            {
                degree: "Ingeniería en Tecnologías de la Información",
                date: "Finales 2025",
                school: "Universidad de las Fuerzas Armadas 'ESPE'",
                gpa: ""
            },
            {
                degree: "Bachillerato General Unificado",
                date: "Agosto 2018",
                school: "Unidad Educativa La Presentación",
                gpa: "Overall GPA: 3.33, GPA in Major: 3.50"
            },
        ],
        experience: [
            {
                title: "Cajera y Host - Johnny Rockets (Atlantic City - NJ)",
                date: "Marzo 2023 - Mayo 2023",
                description: "Cobro, Apertura y Cierre de caja / Resolución de quejas",
            },
            {
                title: "Asistente Administrativa",
                date: "Octubre 2022 - Enero 2023",
                description: "Facturación a clientes / Seguimiento de Cartera / Manejo de plataforma SRI e IESS",
            },
            
           
        ],
    },

    posts: {
        name: "Bárbara Espinosa",
        avatar: "https://media.licdn.com/dms/image/D4E03AQEqrDUkvUa8LQ/profile-displayphoto-shrink_800_800/0/1699774343373?e=1714003200&v=beta&t=kbQ60CWV66nvUtPcMOxl1nl2_6tJs9-_zE4MhxrD8lk",
        background_image: "https://media.licdn.com/dms/image/C4E16AQFDwbqHM9ajjA/profile-displaybackgroundimage-shrink_350_1400/0/1662936490907?e=1714003200&v=beta&t=d-jStBGPXmHrLzbaWkkmBDfqU1uFlHoA_-Fabc6k-R0",
        post_data: [
            {
                id: 1,
                timestamp: "2 hours ago",
                description: "Sistema con Autenticación en React: https://github.com/beespinosa1/autenticacion_react",
                image: "https://blog.back4app.com/wp-content/uploads/2022/12/react-firebase-authentication-cover.webp"
            },
            {
                id: 2,
                timestamp: "2 hours ago",
                description: "Uso de Firebase en conjunto con React https://github.com/beespinosa1/task-firebase",
                image: "https://cdn-media-1.freecodecamp.org/images/kE3b4TOXtlEYpwhRvtSMi87mkWPaTfzbWOC9"
            },
            
        ],
    }
};

// Exporting the data object so that the App.js file can import it.
export default data;