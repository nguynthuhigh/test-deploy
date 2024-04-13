
import CarourelPromo from "./CarourelPromo";
import Category from "./Category";
import PopularQuestions from "./PopularQuestions";
import BackgroundHeader from "./BackgroundHeader";
import AddressBox from "./AddressBox";
import PromoInWhere from "./PromoInWhere";

function Home(){
    return(
        <>
        <div>
            <BackgroundHeader/>
            <AddressBox/>
            <PromoInWhere/>
            <CarourelPromo/>
            <Category/>
            <PopularQuestions/>
        </div>
        </>
    )
}
export default Home;