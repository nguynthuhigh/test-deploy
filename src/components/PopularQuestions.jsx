import React, { useState } from "react";
import MoreQuestions from "./MoreQuestions";

function PopularQuestions() {
    const [showMore, setShowMore] = useState(false); // Correct usage of useState

    return (
        <>
            <div className="container question">
                <div className="content" style={{ maxHeight: showMore ? 'none' : '200px', overflow: 'hidden' }}>
                    <div className="why-use-grabfood">
                        <h1>Vì sao bạn nên Order trên GrabFood?</h1>
                        <ul className="custom-why-use-list">
                            <li><strong>Nhanh nhất</strong> - GrabFood cung cấp dịch vụ giao đồ ăn nhanh nhất thị trường.</li>
                            <li><strong>Dễ dàng nhất</strong> - Giờ đây, bạn chỉ cần thực hiện vài cú nhấp chuột hoặc chạm nhẹ là đã có thể đặt đồ ăn. Hãy đặt đồ ăn trực tuyến hoặc tải xuống siêu ứng dụng Grab của chúng tôi để có trải nghiệm nhanh hơn và thú vị hơn.</li>
                            <li><strong>Đáp ứng mọi nhu cầu</strong> - Từ món ăn đặc sản địa phương đến các nhà hàng được ưa thích, nhiều lựa chọn đa dạng chắc chắn sẽ luôn làm hài lòng khẩu vị của bạn.</li>
                            <li><strong>Thanh toán dễ dàng</strong> - Giao và nhận đồ ăn thật dễ dàng. Thanh toán bằng GrabPay thậm chí còn dễ dàng hơn nữa.</li>
                            <li><strong>Nhiều quà tặng hơn</strong> - Tích điểm GrabRewards cho mỗi đơn hàng của bạn và sử dụng điểm thưởng để đổi lấy nhiều ưu đãi hơn.</li>
                        </ul>
                    </div>
                    <MoreQuestions />
                </div>
                <div className="btn-see-more-question" onClick={() => setShowMore(!showMore)}>
                    <strong>{showMore ? 'Thu gọn' : 'Xem thêm'}</strong>
                </div>
            </div>
        </>
    )
}

export default PopularQuestions;
