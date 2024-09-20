import "./App.css";

function Header() {
  return (
    <>
      <img src="https://heroic-pixie-6d7f91.netlify.app/awning.png" />
      <h1>Food Truck Favorites</h1>
    </>
  );
}
function Card({ image, brandName, cuisine, menulink }) {
  return (
    <div className="grid-item">
      <div>
        <img src={image} alt={brandName} />
      </div>
      <div>
        <h2>{brandName}</h2>
        <h3>{cuisine}</h3>
        <a href={menulink} target="#blank">
          <button>View menu</button>
        </a>
      </div>
    </div>
  );
}
function App() {
  const FoodTrucks = [
    {
      image:
        "https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg",
      brandName: "Birria-Landia",
      cuisine: "Mexican",
      menulink: "https://birrialandia.com/",
    },
    {
      image:
        "https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/mysttik-masala/banners/1561989798.42",
      brandName: "Mysttik Masala",
      cuisine: "Indian",
      menulink: "https://indianfoodny.com/",
    },
    {
      image:
        "https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?quality=75&strip=all&w=1024",
      brandName: "The Halal Guys",
      cuisine: "Middle Eastern",
      menulink: "https://thehalalguys.com/menu/",
    },
    {
      image:
        "https://nydosas.com/wp-content/uploads/2018/07/maxresdefault-2-1024x630.jpg",
      brandName: "NY Dosas",
      cuisine: "Vegetarian",
      menulink: "https://nydosas.com/menu/",
    },
    {
      image:
        "https://infatuation.imgix.net/media/images/reviews/jerk-pan/banners/1561989308.8.jpg",
      brandName: "Jerk Pan",
      cuisine: "Jamaican",
      menulink: "https://www.allmenus.com/ny/new-york/360888-jerk-pan/menu/",
    },
    {
      image:
        "https://static01.nyt.com/images/2019/09/04/dining/29hungry-tong2/merlin_159654336_783be212-7726-485e-9250-4793a743af41-jumbo.jpg",
      brandName: "Tong",
      cuisine: "Bangladeshi",
      menulink: "https://www.facebook.com/Bangladeshistreetfoods/",
    },
    {
      image:
        "https://kingsouvlakinyc.com/wp-content/themes/king/images/location-f.jpg",
      brandName: "King Souvlaki of Astoria",
      cuisine: "Greek",
      menulink: "https://kingsouvlakinyc.com/",
    },
    {
      image:
        "https://fastly.4sqi.net/img/general/600x600/61129566_7PLEKHNMZ-VNqzYx2jWRVZGrZ42PdPX0M-j9Ftpg8Ts.jpg",
      brandName: "Ling's Sweet Mini Cakes",
      cuisine: "Chinese",
      menulink: "https://canalstreet.market/",
    },
    {
      image:
        "https://d3hbe0kmbam4a5.cloudfront.net/photos/67e1cdb7-bc27-4f26-8343-851bfaa7fc22.jpg",
      brandName: "Uncle Gussy's",
      cuisine: "Greek",
      menulink: "https://unclegussys.com/menus/",
    },
    {
      image: "https://live.staticflickr.com/8088/8400188739_53b16c7d13_z.jpg",
      brandName: "Patacon Pisao",
      cuisine: "Venezuelan",
      menulink: "https://www.pataconpisaonyc.com/menus/",
    },
    {
      image:
        "https://infatuation.imgix.net/media/images/reviews/moms-momo/banners/1606245507.888788.png",
      brandName: "Mom's Mono",
      cuisine: "Tibetan",
      menulink:
        "https://www.restaurantji.com/ny/jackson-heights/moms-momo-/menu/",
    },
    {
      image:
        "https://fastly.4sqi.net/img/general/600x600/784042_29bZZHPGisHnWqyIuuXMo8D2zzW7QS6Hft7Vv15SH_I.jpg",
      brandName: "Makina Cafe",
      cuisine: "Ethiopian",
      menulink: "https://makinacafenyc.com/",
    },
  ];
  return (
    <div className="container">
      <Header />
      <div className="grid-container">
        {FoodTrucks.map((truck, index) => (
          <Card
            key={index}
            image={truck.image}
            brandName={truck.brandName}
            cuisine={truck.cuisine}
            menulink={truck.menulink}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
