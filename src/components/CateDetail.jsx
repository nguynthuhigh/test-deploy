import React from "react";

function CateDetail(prop){
    return(
        <>
             <div className="Cate ">
                <a className="cateLink" href="#">
                    <div className="image-cate-box">
                        <img className="image-cate" src={prop.url} alt="" />
                    </div>
                    <h6 className="name-cate">{prop.name}</h6>
                </a>
            </div>
        </>
    )
}
export default CateDetail;