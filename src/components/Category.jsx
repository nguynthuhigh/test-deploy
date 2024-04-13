import CateDetail from "./CateDetail";


function Category(){

    const cateData = [
        {
            id: 1,
            imageUrl:"./src/assets/cateFood/cate1.webp" ,
            name:"Hủ tiếu",
        },
        {
            id: 2,
            imageUrl:"./src/assets/cateFood/cate2.webp" ,
            name:"Pizza",
        },
        {
            id: 3,
            imageUrl:"./src/assets/cateFood/cate3.webp" ,
            name:"Cháo",
        },
        {
            id: 4,
            imageUrl:"./src/assets/cateFood/cate4.webp" ,
            name:"Rau trộn",
        },
        {
            id: 5,
            imageUrl:"./src/assets/cateFood/cate5.webp" ,
            name:"Trà sữa",
        },
        {
            id: 6,
            imageUrl:"./src/assets/cateFood/cate6.webp" ,
            name:"Hiso Party",
        },
        {
            id: 7,
            imageUrl:"./src/assets/cateFood/cate7.webp" ,
            name:"Mì Ý",
        },
        {
            id: 8,
            imageUrl:"./src/assets/cateFood/cate8.webp" ,
            name:"Weekend Treats",
        },
        {
            id: 9,
            imageUrl:"./src/assets/cateFood/cate9.webp" ,
            name:"Bánh mì",
        },
        {
            id: 10,
            imageUrl:"./src/assets/cateFood/cate10.webp" ,
            name:"Cơm",
        },
        {
            id: 11,
            imageUrl:"./src/assets/cateFood/cate11.webp" ,
            name:"Gà rán - Burger",
        },
        {
            id: 12,
            imageUrl:"./src/assets/cateFood/cate12.webp" ,
            name:"Thịt",
        },
        {
            id: 13,
            imageUrl:"./src/assets/cateFood/cate13.webp" ,
            name:"Gà Rán",
        },
        {
            id: 14,
            imageUrl:"./src/assets/cateFood/cate14.webp" ,
            name:"Đồ uống lạnh",
        },
        {
            id: 15,
            imageUrl:"./src/assets/cateFood/cate15.webp" ,
            name:"Ăn vặt",
        },
        {
            id: 16,
            imageUrl:"./src/assets/cateFood/cate16.webp" ,
            name:"Gà",
        },
        {
            id: 17,
            imageUrl:"./src/assets/cateFood/cate1.webp" ,
            name:"Cơm tấm",
        },
    ]

    const cate = cateData.map(
        (item) => <CateDetail
            name={item.name}
            url={item.imageUrl}
    />)
    return(
        <>
            <div className="container">
                <h2>There's something for everyone!</h2>
                <div className="container-cate">
                    {cate}
                </div>
            </div>
        </>
    )
}
export default Category;