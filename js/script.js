/**
 * Function used to fetch the contacts from the original html
 */
function getContacts() {
    const contactList = Array.of(document.getElementsByClassName('contact-list')[0].children);
    // console.log('contactList ->', contactList[0].children);
    // contactList.map((item) => {
    //     console.log('item ->', item)
    //     item.prototype.getElementById()
    // });

    const avatars = Array.from(document.getElementsByClassName("avatar"));
    const names = Array.from(document.getElementsByTagName("h3"));
    const emails = Array.from(document.getElementsByClassName("email"));
    const joinedDates = Array.from(document.getElementsByClassName("date"));

    const contacts = avatars.map((avatar, index) => {
        return {
            avatarURL: avatar.src,
            name: names[index].textContent,
            emails: emails[index].textContent,
            joinDate: joinedDates[index].textContent
        }
    })

    console.log('contacts ->', JSON.stringify(contacts));
}

const contacts = [
    {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/women/67.jpg",
        "name": "iboya vat",
        "emails": "iboya.vat@example.com",
        "joinDate": "Joined 07/15/15"
    },
    {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/75.jpg",
        "name": "aapo niskanen",
        "emails": "aapo.niskanen@example.com",
        "joinDate": "Joined 06/15/12"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/34.jpg",
        "name": "phillip cox",
        "emails": "phillip.cox@example.com",
        "joinDate": "Joined 09/11/14"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/women/38.jpg",
        "name": "zilda moreira",
        "emails": "zilda.moreira@example.com",
        "joinDate": "Joined 07/15/15"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/women/23.jpg",
        "name": "lilou le gall",
        "emails": "lilou.le gall@example.com",
        "joinDate": "Joined 06/16/13"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/women/94.jpg",
        "name": "lucy hall",
        "emails": "lucy.hall@example.com",
        "joinDate": "Joined 09/11/16"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/women/24.jpg",
        "name": "mark colin",
        "emails": "mark.colin@example.com",
        "joinDate": "Joined 01/14/14"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/women/14.jpg",
        "name": "sara alves",
        "emails": "sara.alves@example.com",
        "joinDate": "Joined 07/19/16"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/49.jpg",
        "name": "ramon macrae",
        "emails": "ramon.macrae@example.com",
        "joinDate": "Joined 05/13/12"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/15.jpg",
        "name": "connor taylor",
        "emails": "connor.taylor@example.com",
        "joinDate": "Joined 05/18/14"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/11.jpg",
        "name": "aymeric morel",
        "emails": "aymeric.morel@example.com",
        "joinDate": "Joined 06/13/13"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/49.jpg",
        "name": "lorenz otto",
        "emails": "lorenz.otto@example.com",
        "joinDate": "Joined 05/11/14"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/29.jpg",
        "name": "karl williamson",
        "emails": "karl.williamson@example.com",
        "joinDate": "Joined 01/12/14"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/34.jpg",
        "name": "ouassim heering",
        "emails": "ouassim.heering@example.com",
        "joinDate": "Joined 01/18/12"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/91.jpg",
        "name": "roberto molina",
        "emails": "roberto.molina@example.com",
        "joinDate": "Joined 06/13/15"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/28.jpg",
        "name": "jordan hubert",
        "emails": "jordan.hubert@example.com",
        "joinDate": "Joined 06/13/15"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/29.jpg",
        "name": "melvin baker",
        "emails": "melvin.baker@example.com",
        "joinDate": "Joined 09/18/14"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/26.jpg",
        "name": "everett gordon",
        "emails": "everett.gordon@example.com",
        "joinDate": "Joined 06/17/15"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/82.jpg",
        "name": "aiden ma",
        "emails": "aiden.ma@example.com",
        "joinDate": "Joined 07/18/12"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/62.jpg",
        "name": "florent gerard",
        "emails": "florent.gerard@example.com",
        "joinDate": "Joined 02/12/13"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/women/96.jpg",
        "name": "amber chen",
        "emails": "amber.chen@example.com",
        "joinDate": "Joined 07/12/12"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/women/9.jpg",
        "name": "alexandra davies",
        "emails": "alexandra.davies@example.com",
        "joinDate": "Joined 05/11/13"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/57.jpg",
        "name": "sergio cole",
        "emails": "sergio.cole@example.com",
        "joinDate": "Joined 02/17/15"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/98.jpg",
        "name": "edgar dixon",
        "emails": "edgar.dixon@example.com",
        "joinDate": "Joined 06/17/11"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/94.jpg",
        "name": "kirk myers",
        "emails": "kirk.myers@example.com",
        "joinDate": "Joined 09/17/15"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/women/28.jpg",
        "name": "ani hesseling",
        "emails": "ani.hesseling@example.com",
        "joinDate": "Joined 08/14/16"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/women/24.jpg",
        "name": "victoire bonnet",
        "emails": "victoire.bonnet@example.com",
        "joinDate": "Joined 05/13/16"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/44.jpg",
        "name": "marcos morales",
        "emails": "marcos.morales@example.com",
        "joinDate": "Joined 01/12/12"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/75.jpg",
        "name": "nils neumann",
        "emails": "nils.neumann@example.com",
        "joinDate": "Joined 03/11/12"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/women/86.jpg",
        "name": "emily harrison",
        "emails": "emily.harrison@example.com",
        "joinDate": "Joined 07/18/15"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/41.jpg",
        "name": "matthew fortin",
        "emails": "matthew.fortin@example.com",
        "joinDate": "Joined 03/18/15"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/women/32.jpg",
        "name": "charlotte steward",
        "emails": "charlotte.steward@example.com",
        "joinDate": "Joined 02/18/11"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/3.jpg",
        "name": "marceau rodriguez",
        "emails": "marceau.rodriguez@example.com",
        "joinDate": "Joined 07/13/14"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/91.jpg",
        "name": "hudson anderson",
        "emails": "hudson.anderson@example.com",
        "joinDate": "Joined 09/12/15"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/33.jpg",
        "name": "warren phillips",
        "emails": "warren.phillips@example.com",
        "joinDate": "Joined 01/11/12"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/41.jpg",
        "name": "leo niva",
        "emails": "leo.niva@example.com",
        "joinDate": "Joined 09/14/15"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/3.jpg",
        "name": "hani prevoo",
        "emails": "hani.prevoo@example.com",
        "joinDate": "Joined 01/11/15"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/women/79.jpg",
        "name": "veronica rodriguez",
        "emails": "veronica.rodriguez@example.com",
        "joinDate": "Joined 07/17/12"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/41.jpg",
        "name": "ginestal das neves",
        "emails": "ginestal.das neves@example.com",
        "joinDate": "Joined 06/19/12"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/63.jpg",
        "name": "devon barnes",
        "emails": "devon.barnes@example.com",
        "joinDate": "Joined 09/19/14"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/55.jpg",
        "name": "brennan pierce",
        "emails": "brennan.pierce@example.com",
        "joinDate": "Joined 05/15/14"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/35.jpg",
        "name": "zachary singh",
        "emails": "zachary.singh@example.com",
        "joinDate": "Joined 05/19/11"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/35.jpg",
        "name": "arlo harris",
        "emails": "arlo.harris@example.com",
        "joinDate": "Joined 07/12/15"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/women/60.jpg",
        "name": "hannah ginnish",
        "emails": "hannah.ginnish@example.com",
        "joinDate": "Joined 05/17/14"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/95.jpg",
        "name": "goos brunt",
        "emails": "goos.brunt@example.com",
        "joinDate": "Joined 09/15/12"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/91.jpg",
        "name": "eduard riedel",
        "emails": "eduard.riedel@example.com",
        "joinDate": "Joined 06/12/15"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/women/42.jpg",
        "name": "geesken jekel",
        "emails": "geesken.jekel@example.com",
        "joinDate": "Joined 02/12/13"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/women/54.jpg",
        "name": "dolores ryan",
        "emails": "dolores.ryan@example.com",
        "joinDate": "Joined 06/17/16"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/49.jpg",
        "name": "steven rogers",
        "emails": "steven.rogers@example.com",
        "joinDate": "Joined 01/18/11"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/63.jpg",
        "name": "virgulino silva",
        "emails": "virgulino.silva@example.com",
        "joinDate": "Joined 03/18/11"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/women/11.jpg",
        "name": "lucile bertrand",
        "emails": "lucile.bertrand@example.com",
        "joinDate": "Joined 06/13/16"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/women/10.jpg",
        "name": "elsa lahti",
        "emails": "elsa.lahti@example.com",
        "joinDate": "Joined 04/15/12"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/women/12.jpg",
        "name": "soline leclercq",
        "emails": "soline.leclercq@example.com",
        "joinDate": "Joined 05/12/14"
    }, {
        "avatarURL": "https://randomuser.me/api/portraits/thumb/men/89.jpg",
        "name": "henri kruse",
        "emails": "henri.kruse@example.com",
        "joinDate": "Joined 05/14/13"
    }]

const renderPage = () => {
    let currentPageIndex = 0;
    const CONTACTS_PER_PAGE = 10;
    let numPages =  Math.ceil(contacts.length / CONTACTS_PER_PAGE);

    console.log('number of items ->', contacts.length, numPages);
}

renderPage();