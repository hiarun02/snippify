export type TweetDTO = {
  id: string;
  text: string;
  url?: string;
  author: {
    name: string;
    username: string;
    profile_image_url: string;
    verified?: boolean;
  };
  created_at: string;
};

export const tweets: TweetDTO[] = [
  {
    id: "2016386140954362230",
    text: "Great project man",
    url: "https://x.com/TechByTaraa/status/2016416515101491522?s=20",
    author: {
      name: "tara_",
      username: "TechByTaraa",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/2008847165003882496/2GKFiHOU_400x400.jpg",
      verified: true,
    },
    created_at: "1:12 PM · Jan 28, 2026",
  },
  {
    id: "1842719000000000002",
    text: "Im using your project is the best compliment a developer can receive 🥹",
    url: "https://x.com/pranavcodes_/status/2016478547326726233",
    author: {
      name: "Shikamaru ☕",
      username: "pranavcodes_",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/2006648128733327360/nFcgDB5B_400x400.jpg",
      verified: true,
    },
    created_at: "5:18 PM · Jan 28, 2026",
  },
  {
    id: "1842719000000000003",
    text: "Great work arun👏",
    url: "https://x.com/6083Shambhavi/status/2016389814787178769?s=20",
    author: {
      name: "Shambhavi🌷",
      username: "@6083Shambhavi",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1970458861661495299/DSkoH5mm_400x400.jpg",
      verified: true,
    },
    created_at: "11:26 AM · Jan 28, 2026",
  },
  {
    id: "1842719000000000004",
    text: "Nice! Pretty sick 🔥",
    url: "https://x.com/godnondsilva/status/2016442195306566020?s=20",
    author: {
      name: "Godnon Dsilva",
      username: "@godnondsilva",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1984494984167636993/A7EUR4EB_400x400.jpg",
      verified: true,
    },
    created_at: "2:54 PM · Jan 28, 2026",
  },
  {
    id: "1842719000000000005",
    text: "That’s sick Arun! Will definitely use it tomorrow.",
    url: "https://x.com/anmldev/status/2016560453837808038?s=20",
    author: {
      name: "Anmol",
      username: "@anmldev",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/2017713527948214272/EeOGBImL_400x400.jpg",
      verified: true,
    },
    created_at: "10:44 PM · Jan 28, 2026",
  },
  {
    id: "1842719000000000006",
    text: "sick ui",
    url: "https://x.com/Manixh02/status/2016826141500178689?s=20",
    author: {
      name: "Manish Kumar",
      username: "@Manixh02",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/2006420732029579269/wO8VRM8-_400x400.jpg",
      verified: true,
    },
    created_at: "4:19 PM · Jan 29, 2026",
  },
  {
    id: "1842719000000000007",
    text: "Bro this is impressive and like the story telling too",
    url: "https://x.com/satra_heytt/status/2016398848512712920?s=20",
    author: {
      name: "Heytt S Satra",
      username: "satra_heytt",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1789867270153641984/-G3N3icA_400x400.jpg",
      verified: false,
    },
    created_at: "12:02 PM · Jan 28, 2026",
  },
  {
    id: "1842719000000000008",
    text: "Great tool man for easy code sharing 🔥🔥👏",
    url: "https://x.com/buildwithshyam/status/2016411099848180147?s=20",
    author: {
      name: "Shyam",
      username: "buildwithshyam",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1989716622819700736/qMoJYrLD_400x400.jpg",
      verified: true,
    },
    created_at: "12:50 PM · Jan 28, 2026",
  },
  {
    id: "1842719000000000009",
    text: "It’s great to see your project has had such a positive impact! Your dedication to improving it is truly commendable. Looking forward to exploring the new version!",
    url: "https://x.com/techificial/status/2016528494214431164?s=20",
    author: {
      name: "Techificial.ai",
      username: "techificial",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1832650425813622784/TkondJ9T_400x400.jpg",
      verified: true,
    },
    created_at: "8:37 PM · Jan 28, 2026",
  },

  {
    id: "1842719000000000010",
    text: "that's the best feeling, i think you should make the editor the default page and make the current landing page behind a about link or something, just a suggestion tho",
    url: "https://x.com/CasualCelebi/status/2016592569128440101?s=20",
    author: {
      name: "CasualCelebi 🚦🦀",
      username: "@CasualCelebi",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1645494966335021076/VupVU0Dx_400x400.jpg",
      verified: false,
    },
    created_at: "12:51 AM · Jan 29, 2026",
  },
  {
    id: "1842719000000000011",
    text: "Yeah, it's good, actually. I don't say thank you, but I am happy because you coded for me. I just used this randomly, but it's actually useful. I share my code daily le khush reh thank you paneer time aane wala h bhai tera ",
    url: "https://x.com/JayKashyap32254/status/2016514024989766132?s=20",
    author: {
      name: "coder Rdj kashyap",
      username: "JayKashyap32254",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/2018052894906634240/YAIbE-OC_400x400.jpg",
      verified: false,
    },
    created_at: "7:39 PM · Jan 28, 2026",
  },
  {
    id: "1842719000000000012",
    text: "sickkk🔥🔥, will try it for sure",
    url: "https://x.com/shekhu04/status/2016523869834887507?s=20",
    author: {
      name: "Shikhar",
      username: "shekhu04",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/2012409990431252480/hp_-_iZe_400x400.jpg",
      verified: true,
    },
    created_at: "8:18 PM · Jan 28, 2026",
  },
  {
    id: "1842719000000000013",
    text: "Nice bro 👀👀🤌🏻",
    url: "https://x.com/Tawakkalah13_10/status/2016387102490165410?s=20",
    author: {
      name: "Mohammed Tawakkal Ahmed",
      username: "@Tawakkalah13_10",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1953542258713931777/DAm_4F27_400x400.jpg",
      verified: true,
    },
    created_at: "11:15 AM · Jan 28, 2026",
  },
  {
    id: "1842719000000000014",
    text: "It's interesting bro",
    url: "https://x.com/Venkydotdev/status/2016396563812397316?s=20",
    author: {
      name: "Venkatesh",
      username: "@Venkydotdev",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1983183813661601792/Xmjh3wKN_400x400.jpg",
      verified: true,
    },
    created_at: "11:52 AM · Jan 28, 2026",
  },
  {
    id: "1842719000000000015",
    text: "such a great stuff",
    url: "https://x.com/akramcodez/status/2016457800545964283?s=20",
    author: {
      name: "SK Akram",
      username: "akramcodez",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1934290852626694144/D9YtNsKX_400x400.jpg",
      verified: true,
    },
    created_at: "3:56 PM · Jan 28, 2026",
  },
  {
    id: "1842719000000000016",
    text: "I used it's pretty good really",
    url: "https://x.com/Shivam25mishra/status/2016504594030076370?s=20",
    author: {
      name: "Mr Shivam",
      username: "Shivam25mishra",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/2010824313788907520/PgyBCZKa_400x400.jpg",
      verified: true,
    },
    created_at: "7:02 PM · Jan 28, 2026",
  },
];
