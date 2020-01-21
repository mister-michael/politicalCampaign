const elizabethSanger = {

    district: "TN 5th",

    platform: {
        taxes: "i'm gonna take all your money.",
        jobs: "you can clean my boots.",
        infastructure: "who cares if its crumbling.",
        healthCare: "we all gotta go sometime.",
        crime: "laws are okay, i guess."
    },

    donateLink: "www.gettinpaid.com",

    events: {
        February24: "rally for stuff",
        March24: "homeless shamefest",
        March25: "cookie time",
    },

    volunteer: function (volunteer) {
        return [volunteer.name, volunteer.address, volunteer.email, volunteer.phone, volunteer.avail, volunteer.task]
    },

    volunteerList: [],

    bio: "elizabeth just emerged from parts unknown.",

    imageGallery: {
        headShot: "www.lizziesheadshot.com",
        familyPic: "www.familypicoflizziesfamily.com",
        constituentPic: "www.lizziesstitchiesforpoli.com"
    },

    voteRegistry: "www.gottalwaysvoteforstuff.com",
}

const bob = {
    name: "bob",
    address: "homeless",
    email: "streetsleeper@gmail.com",
    phone: "837-563-0487",
    task: "panhandling"
}

elizabethSanger.volunteerList.push(elizabethSanger.volunteer(bob));
console.log(elizabethSanger.volunteerList);





