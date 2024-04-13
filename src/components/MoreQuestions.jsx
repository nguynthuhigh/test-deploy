import React from "react";
import AnswerP from "./AnswerP";
import AnswerList from "./AnswerList";


function MoreQuestions(){
    const questionData = [
        {
            id:1,
            Q:"GrabFood là gì?",
            A:"Lunch, Bún Cá Chấm Gốc Đa - Vũ Thạnh for Dinner! We are here to satisfy your hunger with a wide selection of merchant partners in Vietnam. GrabFood là dịch vụ Giao đồ ăn nhanh nhất tại Việt Nam. Chúng tôi đã sắp xếp tất cả các món ăn, nhà hàng và thực phẩm yêu thích của bạn một cách hợp lý để giúp bạn tìm được đồ ăn dễ dàng và nhanh chóng nhất có thể. Tìm và đặt món ăn yêu thích trên khắp Việt Nam - đặt đồ ăn trực tuyến chỉ bằng vài thao tác, từ món Lifted Coffee & Brunch cho bữa sáng, đến Maazi Indian – Nhà Hàng Ấn Độ cho bữa trưa, đến Bún Cá Chấm Gốc Đa – Vũ Thạnh cho bữa tối! Hãy để chúng tôi xua tan cơn đói của bạn nhờ một loạt đối tác bán đồ ăn ở Việt Nam.",
        },
        {
            id:2,
            Q:"GrabFood có cung cấp dịch vụ giao đồ ăn 24x7 không?",
            A:'Chúng tôi chỉ biết một điều duy nhất, đó là "đồ ăn", vậy nên tất nhiên chúng tôi cung cấp dịch vụ này rồi. Xin lưu ý, mặc dù chúng tôi là đối tác giao đồ ăn phục vụ 24x7, nhưng một số nhà hàng trong danh mục của chúng tôi có thể hạn chế giao đồ ăn khuya hoặc có thể không phục vụ đối với các đơn đặt hàng. Tuy nhiên, chúng tôi đã liệt kê danh sách những nhà hàng phục vụ nhu cầu ăn khuya của bạn trong mục Late Night Delivery (Giao hàng khuya).',
        },
        {
            id:3,
            Q:"GrabFood có chấp nhận tiền mặt không?",
            A:"Tất nhiên là có! GrabFood chấp nhận mọi hình thức thanh toán cho dịch vụ giao đồ ăn, bao gồm cả tiền mặt khi giao hàng tại Việt Nam.",
        },
        {
            id:4,
            Q:"Tôi có thể thanh toán trực tuyến trên GrabFood cho đơn hàng của mình không?",
            A:"GrabFood chấp nhận nhiều hình thức thanh toán cho các đơn đặt đồ ăn trực tuyến, bao gồm cả thanh toán trực tuyến tại Việt Nam bằng thẻ tín dụng, thẻ ghi nợ, PayPal hoặc trả tiền lúc nhận hàng. Hãy nhớ sử dụng Moca để tích điểm thưởng mà bạn có thể sử dụng để được giảm giá cho đơn hàng tiếp theo và cho các dịch vụ khác của Grab nhé.",
        },
        {
            id:5,
            Q:"Tôi có thể đặt đồ ăn trên GrabFood cho người khác không?",
            A:"Tất nhiên rồi, hãy chăm sóc những người thân yêu của mình bằng cách gửi những món ăn mà họ yêu thích đến tận nhà. Bạn chỉ cần cập nhật địa chỉ giao hàng và tên người nhận trước khi đặt đơn hàng của bạn.",
        },
        {
            id:6,
            Q:"GrabFood tính phí giao đồ ăn như thế nào?",
            A:"Phí giao hàng của chúng tôi phụ thuộc vào nhiều yếu tố hoạt động như khoảng cách từ vị trí của bạn đến nhà hàng. Bạn có thể kiểm tra phí giao hàng chính xác cần phải trả trước khi thanh toán tại mục thanh toán trên ứng dụng Grab. Ngoài ra còn có phần “Free Delivery” (Giao hàng miễn phí) liệt kê các nhà hàng gần chỗ bạn mà không tính phí giao hàng",
        },
        {
            id:7,
            Q:"Những nhà hàng nào được liệt kê trong GrabFood?",
            A:"Chúng tôi có gì trên GrabFood? Chúng tôi tự hào có nhiều nhà hàng và món ăn nhất so với bất kỳ ứng dụng giao đồ ăn nào ở Việt Nam. Bạn có thể lựa chọn trong số hàng nghìn nhà hàng trên GrabFood Việt Nam. Bạn có thể đặt đồ ăn trực tuyến từ tất cả các điểm ăn uống yêu thích của Burger King, Jollibee, KFC, McDonalds, Long John Silver, Pastamania, Dominos Pizza, Pizza Hut, Subway!<br>GrabFood cũng có mã khuyến mãi, ưu đãi và giảm giá có hạn dành riêng cho các nhà hàng trong danh mục. Bạn có thể được hưởng chiết khấu lớn và hàng loạt ưu đãi khác cho đơn đặt đồ ăn của mình. Giờ thì đặt đồ ăn thôi!",
        },
        {
            id:8,
            Q:"GrabFood có áp dụng giá trị đơn hàng tối thiểu không?",
            A:"Có! Nhưng bạn có thể trả số tiền chênh lệch nếu giá trị đơn hàng của bạn nhỏ hơn số tiền đặt hàng tối thiểu.",
        },
    ]

    const QnA = questionData.map((item) => <AnswerP Q={item.Q} A={item.A}/>)
    return (
        <>
            <div className="question-child">
                <h2>Những câu hỏi thường gặp</h2>
                {QnA}
                <AnswerList/>
            </div>
        </>
    )
}

export default MoreQuestions;