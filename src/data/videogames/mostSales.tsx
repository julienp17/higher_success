import { Contender } from '../types'

// https://en.wikipedia.org/wiki/List_of_best-selling_video_games
const mostSales: Contender[] = [
  {
    name: "Minecraft",
    imageUri: "https://image.api.playstation.com/vulcan/img/cfn/11307x4B5WLoVoIUtdewG4uJ_YuDRTwBxQy0qP8ylgazLLc01PBxbsFG1pGOWmqhZsxnNkrU3GXbdXIowBAstzlrhtQ4LCI4.png",
    value: 238_000_000,
  },
  {
    name: "Grand Theft Auto V",
    imageUri: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/V.jpg",
    value: 160_000_000
  },
  {
    name: "Tetris",
    imageUri: "https://cdn.futura-sciences.com/buildsv6/images/wide1920/9/d/b/9dbcf317d5_50175715_tetris-record.jpg",
    value: 100_000_000
  },
  {
    name: "Wii Sports",
    imageUri: "https://fr.shopping.rakuten.com/photo/971082479_L.jpg",
    value: 82_900_000
  },
  {
    name: "PUBG: Battlegrounds",
    imageUri: "https://leclaireur.fnac.com/wp-content/uploads/import/news-labo/default/pubg-mobile-cest-desormais-200-millions-de-joueurs.jpg",
    value: 75_000_000
  },
  {
    name: "Super Mario Bros.",
    imageUri: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/virtual_console_nintendo_3ds_7/SI_3DSVC_SuperMarioBros_image1600w.jpg",
    value: 58_000_000,
  },
  {
    name: "Mario Kart 8/Deluxe",
    imageUri: "https://www.nintendo.com//content/dam/noa/fr_CA/games/switch/m/mario-kart-8-deluxe-switch/mario-kart-8-deluxe-switch-hero.jpg",
    value: 51_810_000
  },
  {
    name: "pokemon_1g",
    imageUri: "https://i1.sndcdn.com/artworks-000497137209-nrdqb0-t500x500.jpg",
    value: 47_520_000
  },
  {
    name: "Wii Fit/Plus",
    imageUri: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/wii_24/SI_Wii_WiiFitPlus_image1600w.jpg",
    value: 43_800_000
  },
  {
    name: "Red Dead Redemption 2",
    imageUri: "https://s1.gaming-cdn.com/images/products/5679/orig/jeu-rockstar-red-dead-redemption-2-standard-edition-cover.jpg",
    value: 43_000_000,
  },
  {
    name: "Pac-Man",
    imageUri: "https://play-lh.googleusercontent.com/l09RFdmrcZ1cpMrLNPtJocygyHqtIN1XQGJEy3kIvKoWP74lQI3609RfbD6-hBpQpg=w412-h220-rw",
    value: 42_071_635
  },
  {
    name: "Animal Crossing: New Horizons",
    imageUri: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_AnimalCrossingNewHorizons.jpg",
    value: 37_620_000
  },
  {
    name: "Mario Kart Wii",
    imageUri: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/wii_24/SI_Wii_MarioKartWii_image1600w.jpg",
    value: 37_380_000
  },
  {
    name: "Terraria",
    imageUri: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_3DS_Terraria.jpg",
    value: 35_000_000
  },
  {
    name: "Call of Duty: Modern Warfare",
    imageUri: "https://image.api.playstation.com/vulcan/img/cfn/1130791_COqLRw6IGlDVHxyV8aqC9_YaF0sCN8IbOlVhzJ6sWm5tlpKTjN8npK2vA_mUJUdyQjP4-U4rEnk7cScmlvoLzXi7.png",
    value: 30_000_000
  },
  {
    name: "The Legend of Zelda: Breath of the Wild",
    imageUri: "https://www.nintendo.com//content/dam/noa/fr_CA/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/the-legend-of-zelda-breath-of-the-wild-switch-hero.jpg",
    value: 	27_490_000
  },
  {
    name: "Super Smash Bros. Ultimate",
    imageUri: "https://i.ytimg.com/vi/gj-9qN_IPxw/maxresdefault.jpg",
    value: 27_400_000,
  },
  {
    name: "Call of Duty: Black Ops",
    imageUri: "https://static.actugaming.net/media/2016/05/call-of-duty-black-ops.jpg",
    value: 26_200_000,
  },
  {
    name: "Borderlands 2",
    imageUri: "https://s3.gaming-cdn.com/images/products/14/orig/jeu-steam-borderlands-2-cover.jpg",
    value: 26_000_000
  },
  {
    name: "Grand Theft Auto IV",
    imageUri: "https://support.rockstargames.com/dist/img/fr_fr/categories/1d241a962bd454c22219.jpg",
    value: 25_000_000
  },
  {
    name: "pokemon_4g",
    imageUri: "https://d2ed948asmbmr8.cloudfront.net/static/media/products/pokemon-platinum-perl-diamon-ds.jpg",
    value: 24_730_000
  },
  {
    name: "Call of Duty: Black Ops II",
    imageUri: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_CallOfDutyBlackOps2_image1600w.jpg",
    value: 24_200_000
  },
  {
    name: "FIFA 18",
    imageUri: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_EASportsFifa18.jpg",
    value: 24_000_000,
  },
  {
    name: "Sonic the Hedgehog",
    imageUri: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_3ds_download_software_7/SI_3DSDS_3DSonicTheHedgehog_image1600w.jpg",
    value: 23_982_960,
  }
]

export default mostSales