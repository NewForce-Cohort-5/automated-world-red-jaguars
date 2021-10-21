const celebDataIceland = [
    {
        Image: "https://en.wikipedia.org/wiki/Bj%C3%B6rk#/media/File:Bj%C3%B6rk_by_deep_schismic_at_Big_Day_Out_2008,_Melbourne_Flemington_Racecourse.jpg",
        Name: "Björk",
        Desc: "Björk Guðmundsdóttir OTF is an Icelandic singer, songwriter, composer, record producer and actress. Over her four-decade career, she has developed an eclectic musical style that draws on influences and genres including electronic, pop, experimental, trip hop, alternative, classical, and avant-garde music.",
        Link: "https://en.wikipedia.org/wiki/Bj%C3%B6rk"
    },

    {
        Image: "https://nimiuscms.s3.eu-west-1.amazonaws.com/images/vigdis-finnbogadottir-famous-people-from-iceland-first-female-president-20190521130224.jpg",
        Name: "Vigdís Finnbogadóttir",
        Desc:"Vigdís Finnbogadóttir was elected as president of Iceland in 1980 – and was the first female in the world to win a national presidential election. She was re-elected a further 3 times before retiring in 1996.",
        Link:"https://en.wikipedia.org/wiki/Vigd%C3%ADs_Finnbogad%C3%B3ttir"
    },
    { 
        Image: "https://nimiuscms.s3.eu-west-1.amazonaws.com/images/bjarni-tryggvason-famous-people-from-iceland-astronaut-nasa-20190521130253.jpg",
        Name: "Bjarni Tryggvason",
        Desc: "Bjarni Tryggvason is an Icelandic born engineer who later became a Canadian based astronaut. In 1997 he was a Payload Specialist astronaut on a Space Shuttle mission to study the Earth’s atmosphere. Since then, he has taught and trained other astronauts at NASA's Space Center in Houston.",
        Link: "https://en.wikipedia.org/wiki/Bjarni_Tryggvason"
    }
]

export const useCelebsIceland = () => {
    return celebDataIceland.slice()
}