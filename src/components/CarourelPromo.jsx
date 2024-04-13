import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./StyleSheet.css"
import PromoFood from './PromoFood';
function CarourelPromo(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const foodData =[
        {
          id:1,
          name: "Cơm thập cẩm",
          type: "Cơm",
          imageUrl:"./src/assets/promoFood/food1.jpg",
          rate: "4.2",
          time:"20 phút",
          km: "2.3 km"
        },
        {
          id:2,
          name: "Bánh trứng",
          type: "Bánh mặn",
          imageUrl:"./src/assets/promoFood/food2.jpg",
          rate: "4.6",
          time:"22 phút",
          km: "2.4 km"
        },
        {
          id:3,
          name: "Bánh lọt",
          type: "Chè - Giải nhiệt",
          imageUrl:"./src/assets/promoFood/food3.jpg",
          rate: "4.7",
          time:"19 phút",
          km: "1.3 km"
        },
        {
          id:4,
          name: "Pizza Hải Sản",
          type: "Thức ăn nhanh",
          imageUrl:"./src/assets/promoFood/food4.jpg",
          rate: "4.2",
          time:"25 phút",
          km: "2.0 km"
        },
        {
          id:5,
          name: "Sushi Cá Hồi",
          type: "Cơm - Đồ Sống",
          imageUrl:"./src/assets/promoFood/food5.jpg",
          rate: "4.5",
          time:"35 phút",
          km: "4.1 km"
        },{
          id:6,
          name: "Beefsteak Kobe",
          type: "Đồ ăn hảo hạng",
          imageUrl:"./src/assets/promoFood/food6.jpg",
          rate: "3.2",
          time:"25 phút",
          km: "3.2 km"
        },{
          id:7,
          name: "Bánh xếp chiên Mandu",
          type: "Điểm tâm",
          imageUrl:"./src/assets/promoFood/food7.jpg",
          rate: "4.8",
          time:"45 phút",
          km: "5.0 km"
        },
      ]

      const foodpromo = foodData.map((item) => 
        <PromoFood 
        name={item.name} 
        type={item.type} 
        url={item.imageUrl}
        rate={item.rate}
        time={item.time}
        km={item.km}
        />
      )
      return (
        <>
          <div className='container mt-5 con-promo'>
            <Carousel responsive={responsive}>
              {foodpromo}
            </Carousel>
          </div>
          <div className='show-all-promo container'>
            <Link id='a' to='/all-promotions'><strong id>See all promotions</strong></Link>
          </div>
        </>
      )
      
}

export default CarourelPromo;
