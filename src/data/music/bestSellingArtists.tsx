import { Contender } from '../types'

// https://en.wikipedia.org/wiki/List_of_best-selling_music_artists#Artists_by_reputed_sales
const bestSellingArtists: Contender[] = [
  {
    name: "Drake",
    imageUri: "https://meilleurs-albums.com/wp-content/uploads/2021/09/Top-20-des-meilleures-chansons-de-Drake.jpg",
    value: 390_800_000
  },
  {
    name: "Rihanna",
    imageUri: "https://img.lemde.fr/2021/08/04/0/0/4700/3130/664/0/75/0/4d41c28_5394157-01-06.jpg",
    value: 321_700_000
  },
  {
    name: "The Beatles",
    imageUri: "https://cdn.radiofrance.fr/s3/cruiser-production/2019/09/bff3ca29-19c5-46de-b922-ecf0feb8128b/600x337_the_beatles_abbey_road_high.jpg",
    value: 288_700_000
  },
  {
    name: "Justin Bieber",
    imageUri: "https://img.nrj.fr/mALat0AyTGXK4nnZhCmt_XvKmQ0=/800x450/smart/https%3A%2F%2Fimage-api.nrj.fr%2Fmedias%2F2018%2F03%2Fphoto-what-do-y-300cmyk_5ab3bf11f223f.jpg",
    value: 256_300_000
  },
  {
    name: "Eminem",
    imageUri: "https://www.music-covers-creations.com/wp-content/uploads/2019/06/Eminem-Screenshot-DR.jpg",
    value: 247_500_000
  },
  {
    name: "Michael Jackson",
    imageUri: "https://www.eklecty-city.fr/wp-content/uploads/2018/06/michael-jackson.jpg",
    value: 246_000_000
  },
  {
    name: "Taylor Switf",
    imageUri: "https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F06.2F30.2F3182b167-f8bb-48b5-888f-d60190a36f3e.2Ejpeg/2048x1536/quality/80/taylor-swift.jpeg",
    value: 235_400_000
  },
  {
    name: "Kanye West",
    imageUri: "https://www.rollingstone.com/wp-content/uploads/2022/02/KanyeWest2.jpg",
    value: 235_100_000
  },
  {
    name: "Elvis Presley",
    imageUri: "https://fr.web.img3.acsta.net/newsv7/21/01/29/11/18/2086932.jpg",
    value: 229_400_000
  },
  {
    name: "Elton John",
    imageUri: "https://www.lfm.ch/wp-content/uploads/2021/10/sir-elton-john-2019-cannes-film-festival-famous.jpg",
    value: 203_000_000
  },
  {
    name: "Mariah Carey",
    imageUri: "https://resize-parismatch.lanmedia.fr/img/var/news/storage/images/paris-match/people/entouree-de-ses-jumeaux-de-10-ans-mariah-carey-celebre-hanoukka-1772897/29140618-1-fre-FR/Entouree-de-ses-jumeaux-de-10-ans-Mariah-Carey-celebre-Hanoukka.jpg",
    value: 185_300_000
  },
  {
    name: "Madonna",
    imageUri: "https://images.bfmtv.com/eMurbz_9JRa3wwpnQt7ttQA12qk=/2x46:1106x667/1104x0/images/Madonna-en-novembre-2021-1176015.jpg",
    value: 181_000_000
  },
  {
    name: "Queen",
    imageUri: "https://i.scdn.co/image/af2b8e57f6d7b5d43a616bd1e27ba552cd8bfd42",
    value: 168_900_000
  },
  {
    name: "Whitney Houston",
    imageUri: "https://img-3.journaldesfemmes.fr/CZCbGx2-E2A1X5tieOWJ3tTE2pw=/819x546/smart/c7aa7f34dfb048d9b2ef31703ebbb79c/ccmcms-jdf/10648090.jpg",
    value: 152_700_000
  },
  {
    name: "Eagles",
    imageUri: "https://upload.wikimedia.org/wikipedia/commons/0/00/Eagles.jpg",
    value: 151_800_000
  },
  {
    name: "Led Zeppelin",
    imageUri: "https://www.leparisien.fr/resizer/yD3JdXHwt1b1VUSHEpXFuR2YYVk=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/DEX3QKYIDLW6TRZQWQGKG3V7FI.jpg",
    value: 142_200_000
  },
  {
    name: "Celine Dion",
    imageUri: "https://cdn.smehost.net/celinedioncom-caprod/wp-content/uploads/2019/04/celine-about-3.jpg",
    value: 136_800_000
  },
  {
    name: "AC/DC",
    imageUri: "https://static.actu.fr/uploads/2020/01/ob-91fe8b-malcolm-young-1979-acdc-810x538.jpg",
    value: 128_100_000
  },
  {
    name: "Pink Floyd",
    imageUri: "https://i.ytimg.com/vi/-EzURpTF5c8/maxresdefault.jpg",
    value: 122_800_000
  },
  {
    name: "The Rolling Stones",
    imageUri: "https://www.udiscovermusic.com/wp-content/uploads/2020/04/Rolling-Stones-GettyImages-74293329.jpg",
    value: 102_000_000
  },
  
  
  {
    name: "Ed Sheeran",
    imageUri: "https://leclaireur.fnac.com/wp-content/uploads/2021/10/870x489-6033e4151cddd-edsheeran1.jpg",
    value: 231_100_000
  },
  {
    name: "Bruno Mars",
    imageUri: "https://i0.wp.com/www.starmag.com/wp-content/uploads/2016/11/1479817283-aa00aea7d1c04ba40897d8b80ac6eea4.jpg?resize=1200%2C675&ssl=1",
    value: 196_400_000
  },
  {
    name: "Chris Brown",
    imageUri: "https://www.gala.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F06.2F30.2F97b41990-bf6b-4c34-80c3-199302ff6c85.2Ejpeg/2216x1536/quality/80/chris-brown.jpeg",
    value: 193_800_000
  },
  {
    name: "Garth Brooks",
    imageUri: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_33/3499996/210818-garth-brooks-jm-1341.jpg",
    value: 165_300_000
  },
  {
    name: "Lil Wayne",
    imageUri: "https://cdn.radiofrance.fr/s3/cruiser-production/2020/12/10a448b0-5487-480e-a9e3-c2b26afd55cf/801x410_r_lil_wayne_a_lanniversaire_de_reginae_carte_credits_photo_prince_williams_wireimage.jpg",
    value: 164_000_000
  },
  {
    name: "Katy Perry",
    imageUri: "https://www.gala.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F06.2F30.2F86409e3d-1e88-4fbf-9848-e3a2d362bea9.2Ejpeg/2216x1536/quality/80/katy-perry.jpeg",
    value: 161_900_000
  },
  {
    name: "Lady Gaga",
    imageUri: "https://images.ladepeche.fr/api/v1/images/view/60a89c2dd286c250695bab06/large/image.jpg?v=1",
    value: 155_900_000
  },
  {
    name: "Maroon 5",
    imageUri: "https://mla-agency.com/wp-content/uploads/2019/12/maroon5.jpg",
    value: 141_800_000
  },
  {
    name: "Jay-Z",
    imageUri: "https://i.f1g.fr/media/madame/1900x1900/sites/default/files/img/2018/08/jay-z.jpg",
    value: 130_400_000
  },


  {
    name: "Adele",
    imageUri: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F02%2F09%2FAdele-Brit-Awards-feb-8.jpg",
    value: 128_000_000
  },
  {
    name: "U2",
    imageUri: "https://www.francetvinfo.fr/pictures/LXP9xBjly1D7G62SQFIxXWMjPTE/752x423/2021/11/03/phpFOd9Va.jpg",
    value: 113_300_000
  },
  {
    name: "Beyoncé",
    imageUri: "https://resize-parismatch.lanmedia.fr/r/625,417,center-middle,ffffff/img/var/news/storage/images/paris-match/people/pour-ses-40-ans-beyonce-livre-une-magnifique-ode-a-la-vie-1759798/28954654-1-fre-FR/Pour-ses-40-ans-Beyonce-livre-une-magnifique-ode-a-la-vie.jpg",
    value: 108_700_000
  },
  {
    name: "Metallica",
    imageUri: "https://www.udiscovermusic.com/wp-content/uploads/2020/11/Metallica-GettyImages-531257207.jpg",
    value: 105_200_000
  },
  {
    name: "Aerosmith",
    imageUri: "https://meilleurs-albums.com/wp-content/uploads/2021/08/Meilleurs-Albums-Aerosmith-Photo-groupe.jpg",
    value: 104_600_000
  },



  {
    name: "Nicki Minaj",
    imageUri: "https://resize-elle.ladmedia.fr/rcrop/1098,768/img/var/plain_site/storage/images/people/la-vie-des-people/news/nicki-minaj-en-deuil-son-pere-tue-dans-lors-d-un-terrible-accident-3902735/94373466-1-fre-FR/Nicki-Minaj-en-deuil-son-pere-tue-dans-lors-d-un-terrible-accident.jpg",
    value: 145_300_000
  },
  {
    name: "Coldplay",
    imageUri: "https://dynamicmedia.livenationinternational.com/Media/g/p/o/eb285dd6-45d0-4f98-9ab5-aa7cc8075a98.jpg?auto=webp&width=1507.2",
    value: 102_800_000
  },
  {
    name: "Ariana Grande",
    imageUri: "https://www.gala.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F06.2F30.2Fc3c64619-563e-49ff-9b11-1b796c659a7d.2Ejpeg/2048x1536/quality/80/ariana-grande.jpeg",
    value: 138_500_000
  },
  {
    name: "The Weeknd",
    imageUri: "https://cdn.radiofrance.fr/s3/cruiser-production/2021/05/e1e9f515-d792-41cd-8872-189e62905985/801x410_gettyimages-1231050791_1.jpg",
    value: 167_800_000
  },
  {
    name: "Imagine Dragons",
    imageUri: "https://img.nrj.fr/9UgCpEoQo3YUQ7eKyW68icBELHA=/800x450/smart/https%3A%2F%2Fimage-api.nrj.fr%2Fmedias%2F2020%2F10%2Fimagine_5f92f2660d9a2.jpg",
    value: 130_400_000
  },
]


export default bestSellingArtists