// You have volunteered your time to a local political candidate, Elizabeth Sanger, who wants to become a US representative in Congress for your district. 
// Unfortunately, the team discovered that you're a software developer, so they have begged you to build an application that lets them track volunteers, 
// and store information about Elizabeth and her campaign.

// Your job is to define the different objects and arrays, their structure, and the corresponding properties for each, to represent the following information about Elizabeth's campaign.

const candidate = {
  name: {
    first: "Elizabeth",
    last: "Sanger"
  },
  platform: {
    taxes: true,
    jobs: false,
    infrastructure: "more",
    health_care: "some",
    crime_enforcement: "robots",
  },
  url: "http://www.sanger.gov",
  calendar: "events",
  volunteers: [
    {
      name: "Joe Blow",
      address: [
        {
          street: "1401 Pawnee Trail",
          city: "Madison",
          state: "TN",
          zip: 37115
        }
      ]
      email: "joe@blow.com",
      phone: 6153087107,
      availability: "never",
      activities: [
        {
          phone: true,
          polling: false,
          trolling: true,
          bowling: true
        }
      ]
    }
  ],
  bio: "Elizabeth Sanger is a top-performing web developer with a passion for creating beautiful, functional, pixel-perfect websites and applications. With more than 12 years of professional experience, Lindsey has a forté for fusing her natural artistic abilities with her graphic design skills to create fluidly responsive websites and applications. She's known for developing clean, solid, semantic markup with as little overhead and redundancy as possible—which results in lightweight, fast-loading code.",
  images: [
    {
      headshot: "http://lindseymaddox.com/_images/lindsey-maddox.jpg",
      family: "http://lindseymaddox.com/_images/extralarge/cirrus.jpg",
      constituents: "http://lindseymaddox.com/_images/extralarge/aidswalk.jpg"
    }
  ],
  mission: "As a freelance front end developer, graphic designer, and UX specialist, I focus on creating usable, functional, responsive websites and applications that follow industry standards and best practices and are optimized for practical development solutions. I comment code so future developers and clients can easily navigate websites. My background in graphic design allows me to hand-code pixel-perfect websites that incorporate as many aspects as possible from initial mockups. I believe that consistency is key when it comes to effective messaging. That’s why every website I create accurately reflects a client’s brand and voice. This also leads to higher rates of user engagement, increased call-to-action responses, and more effective overall digital branding.",
  register_url: "https://www.vote.com"
}