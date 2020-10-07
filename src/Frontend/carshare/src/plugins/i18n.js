/*Created at 22/09/2020 Bach Dao Multiple languages
Updated at 22/09/2020 Shuzuan Zhang Add Chinese 
Updated at 25/09/2020 Shuzuan Zhang Add Chinese */

import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
const messages = {
  en: {
    carListMsg: "Car List Result",
    filter: "Filter",
    make: "Make",
    door: "Door",
    seat: "Seat",
    gear: "Gear",
    lang: "Language",
    carList: "Car List",
    account: "Account",
    profile: "Profile",
    rentHistory: "Rent History",
    logout: "Logout",
    day: "DAY",
    luggage: "Luggage Space",
    search: "Search",
    changeAddress: "Change Address",
    sortBy: "SORT BY",
    byRange: "Default (By range)",
    byPriceLow: "By price low",
    byPriceHigh: "By price high",
    byLatest: "By latest",
    byBrand: "By brand",
    byPopular: "By popular",
    carBrand: "Car brand",
    carModel: "Car model",
    boughtIn: "Bought in",
    carFeatures: "Car features",
    WeLoveToHearFromYou: "We love to hear from you",
    AnyQueries:
      "Any queries will be responded with 2 days during business hours. You can also try to contact us by following ways (Working hours 8:00am - 5:00pm everyday)",
    Company: "Company",
    Address: "Address",
    Phone: "Phone",
    Website: "Website",
    Name: "Name",
    Subject: "Subject",
    Message: "Message",
    SendMessage: "Send Message",
    FirstName: "First Name",
    FamilyName: "Family Name",
    Birth: "Date of birth",
    PersonalInformation: "Personal Information",
    LicenseInformation: "License Information",
    LicenseValidation: "License Validation",
    Update: "Update",
    TermsPolicy: "Term & Policy",
    Termsdetails1:
      "http://carshare.uooobarry.com is a limited company registered in Australia (Number: xxxxxx), whose registered address is at 123 Melbourne St, Melbourne, VIC 3000. These terms & conditions, together with our privacy notice and cookie statement, constitute our agreement with you, for the services we provide in arranging for the supply of car hire. For the avoidance of doubt, Your hire of any car is subject to the terms & conditions of car hire imposed by the car hire company and to the corresponding laws of the country and/or state in which the rental takes place. Individual restrictions may also apply to your car hire. You will be provided with a car by us either directly or as agent. The capacity in which we act depends on our relationship with the car hire company.",
    Termsdetails2:
      "These terms apply to any booking that you make with us on or through this website, so you should make sure that you are aware of their contents. Both our terms and those of the car hire companies we work with contain some exclusions and limitations of liability.",
    Termsdetails3:
      "Your booking on this website is conditional on you accepting our terms. If you do not agree with any part of them, you must not proceed with your booking. By confirming that you wish to book a car through this website you,, indicate that you have read and understood and accept our terms. If there is any part that you do not fully understand, or if you have a query about the car hire or any other product, please Contact us.",
    PrivacyNotice: "Privacy Notice",
    PrivacyNotice1:
      "This Privacy Notice explains how we collect, use and protect any information about you. It also tells you how to get in touch if you have any questions, which we will be more than happy to answer. If you’re interested in what we do with cookies and similar technologies, please check out our Cookie Statement.",
    PrivacyNotice2:
      "We may change this Notice from time to time; so please check back here for any updates.",
    PrivacyNotice3:
      "We offer a range of services related to online car rental, including products and services such as insurance, through our own websites, We also do this through our business partners’ websites, social media and other platforms. This Notice applies to all the personal data we collect while we’re doing this, or when you contact us by email, live chat, phone or post.",
    AgeLimitation: "Minimum / Maximum Age Limitations",
    AgeLimitation1:
      "In most locations, the minimum hiring age is 21 years. Additional fees can apply with certain car hire companies and in certain countries for drivers aged under 25 years or over 65 years: where the correct driver age has been submitted with the booking request, we will advise of any likely fees. Minimum age requirements on larger cars may also be higher at some locations. Please check with our Contact Centre if you have any questions or concerns about this matter.",
    LPED: "Late Pick-ups / Early Drop-offs",
    LPED1:
      "Your rental starts and finishes according to the pick-up and drop-off dates and times detailed on your voucher / eVoucher. Unfortunately, we are unable to provide refunds for unused time if a car is picked up late or dropped off early. If you are unable to pick the car up at the agreed time and date, it is essential you contact us as soon as possible. If you do not, there is no guarantee that the car will still be available – and you will not be entitled to any refund.",
    LR: "About Late  Return",
    LR1:
      "All of the overdue bills need to be paid and the car need to be returned in the same days Each of the overdue rent will have at most 10 days to pay before  polices take part in arrestment under article 24(10)(C) of Australian Consumer Law. ",
    LR2: "Time Charge",
    LR3:
      "Time will be charge if you return the car or key 30 minutes late, We will charge you one more day fees.",
    LR4:
      "For example: You book a car for 2 days, which means you are paying the car's 2 days trip. You need to return the car and key after 48 hours. If you return the car after 49 hours, We will charge you 3 days fees.",
    LR5: "Late fees",
    LR6: "The late fee is:",
    LR7: "$20 if your late return does not affect someone else's trip;",
    LR8: "$50 if your late return does affect someone else's trip.",
    IWMCOYB: "If We Make Changes to Your Booking",
    IWMCOYB1:
      "Occasionally it may be necessary for changes to be made to your booking (after acceptance) by us or by the car hire company. In all such cases we will advise you as soon as reasonably possible before pick-up and, if the proposed changes are unacceptable, you will be offered a full refund. However, in such circumstances, we shall have no additional liability in respect of any direct or indirect losses you may suffer as a result of such changes.",
    PDYGU: "Personal data you give us",
    PDYGU1:
      "We store and use the information that you give us. When you make a booking, we need at least your name, email address and payment information. We might also ask for your home address, phone number and date of birth, and the names of any additional drivers.",
    PDYGU2:
      "If you get in touch with us (by phone, by email or through social media, for example) we will collect information from you there too.",
    PDYGU3:
      "After your booking, we may ask you to provide a review to help us improve our services, and to help ensure future customers get exactly what they’re looking for.",
    PDYGU4:
      "There are also other ways you might give us information. For example, if you’re browsing with your mobile device, you can share your current location with us, so we can provide you with the best possible service. To make things easier, you can also open a user account, which lets you review and manage your bookings, as well as saving your personal settings and your passport and driving licence details. It also makes it easier to make future bookings.",
    PDYGUAO: "Personal data you give us about others",
    PDYGUAO1:
      "You might add someone as an additional driver, or you might make a booking on behalf of someone else, for example, a friend, family member or colleague. If you do, please make sure that that person knows you’re giving us their details, and has accepted the way we handle their personal data (as described in this Notice). This is your responsibility.",
    PDWCA: "Personal data we collect automatically",
    PDWCA1:
      "When you make a booking, we record what platform you made it on, and how you got to our platform (if you came through from another site, for example).",
    CYBATP: "Confirming your booking and taking payment",
    CYBATP1:
      "In most cases, we will confirm your booking immediately using the email address provided when the booking is made. Sometimes, we need to wait for the car hire company to confirm that a car is available. We will tell you straight away if this happens, and temporarily block the money on your payment card. As soon as they confirm your car, we will let you know, and take the money from your card.",
    CYBATP2:
      "Until your car is confirmed, you can ‘void’ the payment at any time. Just hit ‘Manage booking’ at the top of our site, enter the email address provided when making the booking and reservation number, then hit ‘Cancel Booking’. We will unblock the money on your card.",
    CYBATP3:
      "Very rarely, a car hire company can’t confirm that a car is available. If this happens, we will tell you, and unblock the money on your card.",
    CYBATP4:
      "When you book a car or other product on our site, we will email you to confirm its availability within 48 hours of booking (or, if earlier, at least 24 hours before your pick-up time). We will then send you a booking confirmation.",
    CYBATP5:
      "You will not have a contract until we have confirmed your booking and taken the payment. We will send all correspondence to the address provided when making the booking. For the avoidance of doubt, nothing in these terms shall entitle any third party to any benefit or rights pursuant to the Contracts (Rights of Third Parties) Act 1999.",
    AOI: "Accuracy of Information",
    AOI1:
      "Although we strive to ensure the accuracy of the information on this website, neither we nor our affiliates, suppliers or agents can be held responsible by you for the accuracy of such information. It is solely your responsibility to evaluate the accuracy, completeness and usefulness of all information provided on this website.",
    AOI2:
      "The https://carshare.uooobarry.com voucher / eVoucher must be presented to the car hire company when picking up your hire car. We cannot be held responsible for rentals rejected if a voucher / eVoucher is not presented.",
    AOI3:
      "We cannot accept liability for any charges incurred as a result of documentation signed for and accepted at the car hire counter.",
    AOI4:
      "We will not be held responsible for anyone driving under the influence of alcohol/drugs, causing wilful damage, driving off-road or driving without due care and attention. You will accept full responsibility in respect of such claims. This list is not exhaustive.",
    FAQ: "1. How do I book online?",
    FAQ1: "1.Our home page features 'Car list' to make booking easier.",
    FAQ2:
      "2.Click the vehicle you wish to rent and then you will see the information and price of the vehicle.",
    FAQ3:
      "3. Click on the check out button and it will take you to the login page and click “LOGIN NOW”. Even if you don't have a account from us,Please Click “sign up for free” and edit your information the submit.",
    FAQ4:
      "4.After login,you can choose the Start dates and renting periods of the vehicle, then click “Next”.",
    FAQ5:
      "5. You will see the Pick up location and Return date, then Press “Confirm Order”.",
    FAQ6:
      "6. After Press “Confirm Order”, you will just need to select the payment option and enter you payment information to complete the order.",
    FAQ7: "2. How will I know my book is comfirmed?",
    FAQ8:
      "1. After the payment, the website will display the receipt include your",
    FAQ9: "“Contact information”",
    FAQ10: "“Pick up information”",
    FAQ11:
      "2.You will received a message by your registration number after you confirm the order.",
    FAQ12: "3. Or you can check your comfirmation in your Rent history.",
    FAQ13: "3. How old do I have to be rent a vehicle?",
    FAQ14:
      "1.All renters must be aged at least 21 years old at the commencement of the rental.",
    FAQ15:
      "2.Any renters aged 21 to 24 inclusive (whether the main or additional driver) incur an age surcharge per day, and can access our standard range of vehicles. Ultimate Protection (UP) is not available to drivers in this age group. ",
    FAQ16:
      "4. What is my responsisibility when renting a vehicle in PBD Car Share?",
    FAQ17:
      "From the time you collect your vehicle, you are financially responsible for any loss of damage to the vehicle. This includes damage caused outside of your control including hailstorms. You are also bound by PBD's standard Terms & Policy as agreed to when you confirm the order.",
    FAQ18: "5. What is car hire excess insurance?",
    FAQ19:
      "Car hire excess insurance is an insurance include in the price which can protect you from the excess costs that you are required to pay in the event that your hire car is damaged or stolen.",
    FAQ20: "Let's look at what insurance included:",
    FAQ21: "Included damage cover (Collision Damage Waiver)",
    FAQ22:
      "Accidents happen. Even a great driver can be in the wrong place at the wrong time. Plus, the car could get damaged while it’s parked.",
    FAQ23:
      "When you rent a car, you’ll be protected by the rental company’s Collision Damage Waiver. If there’s any damage to the car’s bodywork, the most you’ll pay towards repairs is the ‘excess’. This is normally between $350/$400 and $3,000/$3,500. Collision Damage Waiver will cover the rest of the cost.",
    FAQ24:
      "However, Collision Damage Waiver only covers the car’s bodywork, so you’ll pay the full cost of any repairs to its windows, tyres, chassis, engine, interior, etc.",
    FAQ25: "Included theft cover (Theft Protection)",
    FAQ26:
      "Like any car, a rental car is a lot less likely to be stolen than bumped or scraped. But replacing a whole car would cost a lot more than fixing a dent or replacing a side panel.",
    FAQ27:
      "The good news is: you’re protected. If the car is stolen while you have it, or damaged when someone tries to steal it, the most you’ll have to pay is an excess. This excess can range between $350/$400 and $3,000/$3,500. The rental company’s Theft Protection policy will cover the rest of the cost.",
    FAQ28: "Included cover for other things (Third-Party Liability)",
    FAQ29:
      "Third-Party Liability covers the cost of repairs to any ‘third party’ (anything that’s not in the car). If you damage someone else’s property, this policy will pay out. This cover is usually included in the rental price.",
    FAQ30:
      "Most of the time, you won’t pay any excess, but there are some rental companies that will charge one.",
    loginregister: "Login/Register",
  },
  vn: {
    carListMsg: "Danh sách xe",
    filter: "Phân loại",
    make: "Hãng",
    door: "Cửa",
    seat: "Ghế",
    gear: "Hộp Số",
    lang: "Ngôn ngữ",
    carList: "Danh Sách Xe",
    account: "Tài Khoản",
    profile: "Cá Nhân",
    rentHistory: "Lịch Sử",
    logout: "Đăng Xuất",
    day: "NGÀY",
    luggage: "Số Chỗ Hành Lý",
    search: "Tìm Kiếm",
    changeAddress: "Đổi Địa Chỉ",
    sortBy: "LIỆT KÊ THEO",
    byRange: "Mặc định (gần nhất)",
    byPriceLow: "Giá thấp",
    byPriceHigh: "Giá cao",
    byLatest: "Mới nhất",
    byBrand: "Theo hãng",
    byPopular: "Yêu thích nhất",
    carBrand: "Hãng xe",
    carModel: "Mẫu xe",
    boughtIn: "Mua vào",
    carFeatures: "Chức năng kèm theo",
    WeLoveToHearFromYou: "Chúng tôi thích nghe từ bạn",
    AnyQueries:
      "Mọi thắc mắc sẽ được trả lời trong vòng 2 ngày trong giờ làm việc. Bạn cũng có thể thử liên hệ với chúng tôi bằng các cách sau (Giờ làm việc 8:00 sáng - 5:00 chiều hàng ngày)",
    Company: "Công ty",
    Address: "Địa chỉ",
    Phone: "Điện thoại",
    Website: "Trang mạng",
    Name: "Tên",
    Subject: "Chủ đề",
    Message: "Thông điệp",
    SendMessage: "Gửi tin nhắn",
    FirstName: "Tên",
    FamilyName: "Họ",
    Birth: "Ngày sinh",
    PersonalInformation: "Thông tin cá nhân",
    LicenseInformation: "Thông tin bằng lái",
    LicenseValidation: "Xác thực bằng lái",
    Update: "Cập nhật",
    TermsPolicy: "Điều khoản & Chính sách",
    Termsdetails1:
      "http://carshare.uooobarry.com là một công ty hữu hạn được đăng ký tại Úc (Số: xxxxxx), có địa chỉ đăng ký tại 123 Melbourne St, Melbourne, VIC 3000. Các điều khoản & điều kiện này, cùng với thông báo bảo mật và tuyên bố cookie của chúng tôi, cấu thành thỏa thuận của chúng tôi với bạn, đối với các dịch vụ mà chúng tôi cung cấp trong việc thu xếp việc thuê xe. Để tránh nghi ngờ, việc Bạn thuê bất kỳ chiếc xe nào đều phải tuân theo các điều khoản & điều kiện thuê xe do công ty cho thuê xe áp đặt và luật pháp tương ứng của quốc gia và / hoặc tiểu bang mà việc thuê xe diễn ra. Các hạn chế cá nhân cũng có thể áp dụng cho việc thuê xe của bạn. Bạn sẽ được chúng tôi cung cấp xe trực tiếp hoặc qua đại lý. Năng lực mà chúng ta hành động phụ thuộc vào mối quan hệ của chúng ta với công ty cho thuê xe.",
    Termsdetails2:
      "Các điều khoản này áp dụng cho bất kỳ đặt phòng nào mà bạn thực hiện với chúng tôi trên hoặc thông qua trang web này, vì vậy bạn nên đảm bảo rằng bạn biết nội dung của chúng. Cả điều khoản của chúng tôi và điều khoản của các công ty cho thuê xe mà chúng tôi hợp tác đều có một số loại trừ và giới hạn trách nhiệm pháp lý.",
    Termsdetails3:
      "Đặt chỗ của bạn trên trang web này có điều kiện là bạn chấp nhận các điều khoản của chúng tôi. Nếu bạn không đồng ý với bất kỳ phần nào trong số đó, bạn không được tiến hành đặt phòng của mình. Bằng cách xác nhận rằng bạn muốn đặt xe qua trang web này, bạn cho biết rằng bạn đã đọc, hiểu và chấp nhận các điều khoản của chúng tôi. Nếu có phần nào bạn chưa hiểu rõ, hoặc có thắc mắc về dịch vụ cho thuê xe hoặc bất kỳ sản phẩm nào khác, vui lòng liên hệ với chúng tôi.",
    PrivacyNotice: "Thông báo về quyền riêng tư",
    PrivacyNotice1:
      "Thông báo về Quyền riêng tư này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ bất kỳ thông tin nào về bạn. Nó cũng cho bạn biết cách liên hệ nếu bạn có bất kỳ câu hỏi nào, chúng tôi rất sẵn lòng giải đáp. Nếu bạn quan tâm đến những gì chúng tôi làm với cookie và các công nghệ tương tự, vui lòng xem Tuyên bố về Cookie của chúng tôi.",
    PrivacyNotice2:
      "Chúng tôi có thể thay đổi Thông báo này theo thời gian; vì vậy vui lòng kiểm tra lại tại đây để biết bất kỳ cập nhật nào.",
    PrivacyNotice3:
      "Chúng tôi cung cấp một loạt các dịch vụ liên quan đến cho thuê ô tô trực tuyến, bao gồm các sản phẩm và dịch vụ như bảo hiểm, thông qua các trang web của riêng chúng tôi, Chúng tôi cũng thực hiện việc này thông qua các trang web của đối tác kinh doanh, phương tiện truyền thông xã hội và các nền tảng khác. Thông báo này áp dụng cho tất cả dữ liệu cá nhân mà chúng tôi thu thập trong khi thực hiện việc này hoặc khi bạn liên hệ với chúng tôi qua email, trò chuyện trực tiếp, điện thoại hoặc bài đăng.",
    AgeLimitation: "Giới hạn độ tuổi tối thiểu / tối đa",
    AgeLimitation1:
      "Ở hầu hết các địa điểm, độ tuổi tuyển dụng tối thiểu là 21 tuổi. Các khoản phí bổ sung có thể áp dụng với một số công ty cho thuê xe hơi và ở một số quốc gia nhất định đối với người lái xe dưới 25 tuổi hoặc trên 65 tuổi: nếu độ tuổi chính xác của người lái xe đã được gửi trong yêu cầu đặt xe, chúng tôi sẽ thông báo về mọi khoản phí có thể xảy ra. Yêu cầu về độ tuổi tối thiểu đối với ô tô lớn hơn cũng có thể cao hơn tại một số địa điểm. Vui lòng kiểm tra với Trung tâm liên hệ của chúng tôi nếu bạn có bất kỳ câu hỏi hoặc thắc mắc nào về vấn đề này.",
    LPED: "Đón muộn / Trả sớm",
    LPED1:
      "Việc thuê xe của bạn bắt đầu và kết thúc theo ngày và giờ đón và trả khách được ghi chi tiết trên voucher / eVoucher của bạn. Rất tiếc, chúng tôi không thể hoàn lại tiền cho thời gian chưa sử dụng nếu đón xe muộn hoặc trả khách sớm. Nếu bạn không thể nhận xe vào thời gian và ngày đã thỏa thuận, điều cần thiết là bạn liên hệ với chúng tôi càng sớm càng tốt. Nếu bạn không làm như vậy, không có gì đảm bảo rằng chiếc xe sẽ vẫn có sẵn - và bạn sẽ không được hoàn lại bất kỳ khoản tiền nào.",
    LR: "Về việc trở về muộn",
    LR1:
      "Tất cả các hóa đơn quá hạn cần được thanh toán và xe cần được trả lại trong cùng ngày Mỗi khoản tiền thuê quá hạn sẽ có ít nhất 10 ngày để thanh toán trước khi các chính sách bắt giữ theo điều 24 (10) (C) của Úc Luật Người tiêu dùng.",
    LR2: "Phí thời gian",
    LR3:
      "Thời gian sẽ tính phí nếu bạn trả xe hoặc chìa khóa trễ 30 phút, Chúng tôi sẽ tính phí thêm một ngày nữa.",
    LR4:
      "Ví dụ: Bạn đặt xe trong 2 ngày, nghĩa là bạn đang trả tiền cho chuyến đi 2 ngày của xe. Bạn cần trả lại xe và chìa khóa sau 48 giờ. Nếu bạn trả xe sau 49 giờ, Chúng tôi sẽ tính phí 3 ngày cho bạn.",
    LR5: "Phí trễ hạn",
    LR6: "Phí trả chậm là:",
    LR7:
      "$20 nếu việc bạn về muộn không ảnh hưởng đến chuyến đi của người khác;",
    LR8: "$50 nếu việc bạn về muộn ảnh hưởng đến chuyến đi của người khác.",
    IWMCOYB: "Nếu Chúng tôi Thay đổi Đặt chỗ của Bạn",
    IWMCOYB1:
      "Đôi khi, chúng tôi hoặc công ty cho thuê xe có thể cần thực hiện các thay đổi đối với đặt chỗ của bạn (sau khi chấp nhận). Trong tất cả các trường hợp như vậy, chúng tôi sẽ thông báo cho bạn càng sớm càng tốt trước khi đón và nếu những thay đổi được đề xuất là không thể chấp nhận được, bạn sẽ được hoàn lại toàn bộ tiền. Tuy nhiên, trong những trường hợp như vậy, chúng tôi sẽ không có trách nhiệm bổ sung đối với bất kỳ tổn thất trực tiếp hoặc gián tiếp nào mà bạn có thể phải gánh chịu do những thay đổi đó.",
    PDYGU: "Dữ liệu cá nhân bạn cung cấp cho chúng tôi",
    PDYGU1:
      "Chúng tôi lưu trữ và sử dụng thông tin mà bạn cung cấp cho chúng tôi. Khi bạn đặt phòng, chúng tôi cần ít nhất tên, địa chỉ email và thông tin thanh toán của bạn. Chúng tôi cũng có thể hỏi địa chỉ nhà, số điện thoại và ngày sinh của bạn và tên của bất kỳ tài xế bổ sung nào.",
    PDYGU2:
      "Nếu bạn liên hệ với chúng tôi (chẳng hạn qua điện thoại, email hoặc thông qua mạng xã hội), chúng tôi cũng sẽ thu thập thông tin từ bạn ở đó.",
    PDYGU3:
      "Sau khi bạn đặt phòng, chúng tôi có thể yêu cầu bạn cung cấp đánh giá để giúp chúng tôi cải thiện dịch vụ của mình và giúp đảm bảo khách hàng trong tương lai nhận được chính xác những gì họ đang tìm kiếm.",
    PDYGU4:
      "Cũng có những cách khác mà bạn có thể cung cấp thông tin cho chúng tôi. Ví dụ: nếu bạn đang duyệt bằng thiết bị di động của mình, bạn có thể chia sẻ vị trí hiện tại của mình với chúng tôi để chúng tôi có thể cung cấp cho bạn dịch vụ tốt nhất có thể. Để làm cho mọi thứ dễ dàng hơn, bạn cũng có thể mở một tài khoản người dùng, tài khoản này cho phép bạn xem lại và quản lý các đặt phòng của mình, cũng như lưu cài đặt cá nhân và thông tin chi tiết về hộ chiếu và giấy phép lái xe của bạn. Nó cũng giúp bạn dễ dàng đặt trước hơn.",
    PDYGUAO: "Dữ liệu cá nhân bạn cung cấp cho chúng tôi về những người khác",
    PDYGUAO1:
      "Bạn có thể thêm một người nào đó làm tài xế bổ sung hoặc bạn có thể thay mặt người khác đặt chỗ, ví dụ: bạn bè, thành viên gia đình hoặc đồng nghiệp. Nếu bạn làm vậy, hãy đảm bảo rằng người đó biết bạn đang cung cấp cho chúng tôi thông tin chi tiết của họ và đã chấp nhận cách chúng tôi xử lý dữ liệu cá nhân của họ (như được mô tả trong Thông báo này). Đây là trách nhiệm của bạn.",
    PDWCA: "Dữ liệu cá nhân chúng tôi thu thập tự động",
    PDWCA1:
      "Khi bạn đặt chỗ, chúng tôi ghi lại bạn đã đặt chỗ trên nền tảng nào và cách bạn đến được nền tảng của chúng tôi (ví dụ: nếu bạn đến từ một trang web khác).",
    CYBATP: "Xác nhận đặt chỗ của bạn và thanh toán",
    CYBATP1:
      "Trong hầu hết các trường hợp, chúng tôi sẽ xác nhận đặt phòng của bạn ngay lập tức bằng địa chỉ email được cung cấp khi đặt phòng được thực hiện. Đôi khi, chúng tôi cần đợi công ty cho thuê xe xác nhận là có xe. Chúng tôi sẽ cho bạn biết ngay lập tức nếu điều này xảy ra và tạm thời khóa tiền trên thẻ thanh toán của bạn. Ngay sau khi họ xác nhận chiếc xe của bạn, chúng tôi sẽ cho bạn biết và nhận tiền từ thẻ của bạn.",
    CYBATP2:
      "Cho đến khi xe của bạn được xác nhận, bạn có thể hủy khoản thanh toán bất kỳ lúc nào. Chỉ cần nhấn ‘Quản lý đặt chỗ’ ở đầu trang web của chúng tôi, nhập địa chỉ email được cung cấp khi thực hiện đặt chỗ và mã số đặt chỗ, sau đó nhấn ‘Hủy đặt chỗ’. Chúng tôi sẽ mở khóa số tiền trên thẻ của bạn.",
    CYBATP3:
      "Rất hiếm khi công ty cho thuê xe không thể xác nhận rằng có xe. Nếu điều này xảy ra, chúng tôi sẽ cho bạn biết và mở khóa số tiền trong thẻ của bạn.",
    CYBATP4:
      "Khi bạn đặt xe hơi hoặc sản phẩm khác trên trang web của chúng tôi, chúng tôi sẽ gửi email cho bạn để xác nhận tình trạng còn hàng trong vòng 48 giờ sau khi đặt (hoặc nếu sớm hơn, ít nhất 24 giờ trước giờ đón của bạn). Sau đó, chúng tôi sẽ gửi bạn một xác nhận đặt phòng. ",
    CYBATP5:
      "Bạn sẽ không có hợp đồng cho đến khi chúng tôi xác nhận đặt phòng của bạn và thực hiện thanh toán. Chúng tôi sẽ gửi tất cả thư từ đến địa chỉ đã cung cấp khi thực hiện đặt phòng. Để tránh nghi ngờ, không có điều khoản nào trong các điều khoản này sẽ cho phép bất kỳ bên thứ ba nào bất kỳ lợi ích hoặc quyền nào theo Đạo luật Hợp đồng (Quyền của các bên thứ ba) 1999. ",
    AOI: "Độ chính xác của thông tin",
    AOI1:
      "Mặc dù chúng tôi cố gắng đảm bảo tính chính xác của thông tin trên trang web này, chúng tôi và các chi nhánh, nhà cung cấp hoặc đại lý của chúng tôi đều không thể chịu trách nhiệm với bạn về tính chính xác của thông tin đó. Bạn hoàn toàn có trách nhiệm đánh giá tính chính xác, đầy đủ và tính hữu ích của tất cả thông tin được cung cấp trên trang web này. ",
    AOI2:
      "https://carshare.uooobarry.com voucher / eVoucher phải được xuất trình cho công ty cho thuê xe khi nhận xe thuê của bạn. Chúng tôi không chịu trách nhiệm cho việc cho thuê bị từ chối nếu voucher / eVoucher không được xuất trình.",
    AOI3:
      "Chúng tôi không thể chịu trách nhiệm đối với bất kỳ khoản phí nào phát sinh do chứng từ được ký và chấp nhận tại quầy thuê xe.",
    AOI4:
      "Chúng tôi sẽ không chịu trách nhiệm đối với bất kỳ ai lái xe trong tình trạng ảnh hưởng của rượu / ma túy, cố ý gây ra thiệt hại, lái xe vượt địa hình hoặc lái xe mà không được quan tâm và chú ý đúng mức. Bạn sẽ hoàn toàn chịu trách nhiệm về những khiếu nại đó. Danh sách này là không đầy đủ.",
    FAQ: "1. Làm cách nào để đặt vé trực tuyến?",
    FAQ1:
      "1.Trang chủ của chúng tôi có 'Danh sách xe' để giúp việc đặt vé dễ dàng hơn.",
    FAQ2:
      "2.Nhấp vào chiếc xe bạn muốn thuê và sau đó bạn sẽ thấy thông tin và giá của chiếc xe đó.",
    FAQ3: `3. Nhấp vào nút thanh toán và nó sẽ đưa bạn đến trang đăng nhập và nhấp vào ĐĂNG NHẬP NGAY". Ngay cả khi bạn không có tài khoản từ chúng tôi, Vui lòng nhấp vào" đăng ký miễn phí "và chỉnh sửa thông tin gửi. `,
    FAQ4: `4.Sau khi đăng nhập, bạn có thể chọn Ngày bắt đầu và thời gian thuê xe, sau đó nhấp vào" Tiếp theo ".`,
    FAQ5: `5. Bạn sẽ thấy địa điểm Nhận hàng và Ngày trả hàng, sau đó nhấn" Xác nhận đơn hàng ".`,
    FAQ6: `6. Sau khi nhấn" Xác nhận đơn hàng ", bạn chỉ cần chọn tùy chọn thanh toán và nhập thông tin thanh toán của mình để hoàn tất đơn đặt hàng.`,
    FAQ7: "2. Làm cách nào để biết sách của tôi đã được xác nhận?",
    FAQ8:
      "1. Sau khi thanh toán, trang web sẽ hiển thị biên lai bao gồm của bạn",
    FAQ9: `“ Thông tin liên hệ "`,
    FAQ10: `" Lấy thông tin "`,
    FAQ11:
      "2. Bạn sẽ nhận được một tin nhắn theo số đăng ký của bạn sau khi bạn xác nhận đơn đặt hàng.",
    FAQ12: "3. Hoặc bạn có thể kiểm tra xác nhận của mình trong lịch sử Thuê.",
    FAQ13: "3. Tôi phải thuê xe bao nhiêu tuổi?",
    FAQ14: "1.Tất cả người thuê phải từ 21 tuổi trở lên khi bắt đầu thuê.",
    FAQ15:
      "2.Bất kỳ người thuê nào từ 21 đến 24 tuổi (kể cả lái xe chính hay lái phụ) đều phải chịu phụ phí độ tuổi mỗi ngày và có thể sử dụng các loại phương tiện tiêu chuẩn của chúng tôi. Bảo vệ tối ưu (UP) không dành cho lái xe trong nhóm tuổi này.",
    FAQ16: "4. Trách nhiệm của tôi khi thuê xe trong PBD Car Share là gì?",
    FAQ17:
      "Kể từ khi lấy xe, bạn phải chịu trách nhiệm về tài chính cho bất kỳ tổn thất nào đối với xe. Điều này bao gồm thiệt hại gây ra ngoài tầm kiểm soát của bạn, bao gồm cả mưa đá. Bạn cũng bị ràng buộc bởi Điều khoản & Chính sách tiêu chuẩn của PBD như đã đồng ý khi bạn xác nhận đặt hàng.",
    FAQ18: "5. Bảo hiểm vượt mức thuê xe là gì?",
    FAQ19:
      "Bảo hiểm vượt mức thuê xe là bảo hiểm bao gồm trong giá có thể bảo vệ bạn khỏi những chi phí vượt quá mà bạn phải trả trong trường hợp chiếc xe thuê của bạn bị hư hỏng hoặc bị đánh cắp.",
    FAQ20: "Hãy xem bảo hiểm bao gồm:",
    FAQ21: "Bao gồm bảo hiểm thiệt hại (Miễn trừ Thiệt hại do va chạm)",
    FAQ22:
      "Tai nạn xảy ra. Ngay cả một người lái xe cừ khôi cũng có thể đi nhầm chỗ, sai thời điểm. Thêm vào đó, chiếc xe có thể bị hỏng khi đang đậu.",
    FAQ23:
      "Khi bạn thuê một chiếc ô tô, bạn sẽ được bảo vệ bởi Miễn trừ Thiệt hại Do va chạm của công ty cho thuê. Nếu có bất kỳ hư hỏng nào đối với thân xe, số tiền cao nhất bạn sẽ phải trả khi sửa chữa là 'phần vượt quá'. Mức này thường là từ $ 350 / $ 400 và $ 3.000 / $ 3.500. Miễn trừ Thiệt hại do va chạm sẽ chi trả phần còn lại của chi phí. ",
    FAQ24:
      "Tuy nhiên, Miễn trừ Thiệt hại do va chạm chỉ bao gồm thân xe, vì vậy bạn sẽ thanh toán toàn bộ chi phí sửa chữa cửa sổ, lốp, khung xe, động cơ, nội thất, v.v.",
    FAQ25: "Bao gồm vỏ chống trộm (Bảo vệ Trộm)",
    FAQ26:
      "Giống như bất kỳ chiếc xe nào, một chiếc xe cho thuê ít bị mất cắp hơn là va quệt hoặc va quệt. Tuy nhiên, việc thay thế toàn bộ chiếc xe sẽ tốn kém hơn rất nhiều so với việc sửa một vết lõm hoặc thay thế bảng điều khiển bên",
    FAQ27:
      "Tin tốt là: bạn được bảo vệ. Nếu chiếc xe bị đánh cắp khi bạn đang có nó hoặc bị hư hỏng khi ai đó cố gắng lấy trộm nó, số tiền cao nhất bạn sẽ phải trả là khoản tiền vượt quá. Số tiền vượt quá này có thể dao động trong khoảng 350 USD / 400 và $ 3,000 / $ 3,500. Chính sách Bảo vệ Trộm cắp của công ty cho thuê sẽ bao trả phần còn lại của chi phí. ",
    FAQ28:
      "Bao gồm bảo hiểm cho những thứ khác (Trách nhiệm pháp lý của bên thứ ba)",
    FAQ29: `Trách nhiệm pháp lý của bên thứ ba bao gồm chi phí sửa chữa cho bất kỳ" bên thứ ba "nào (bất kỳ thứ gì không có trong ô tô). Nếu bạn làm hỏng tài sản của người khác, chính sách này sẽ thanh toán. Khoản bồi thường này thường được bao gồm trong giá thuê.`,
    FAQ30:
      "Hầu hết thời gian, bạn sẽ không phải trả bất kỳ khoản vượt quá nào, nhưng có một số công ty cho thuê sẽ tính phí một khoản.",
    loginregister: "Đăng nhập/Đăng ký",
  },
  cn: {
    carListMsg: "汽车列表结果",
    filter: "过滤条件",
    Make: "品牌",
    make: "品牌",
    door: "门",
    seat: "座位",
    gear: "档位",
    lang: "语言",
    carList: "汽车列表",
    account: "账号",
    profile: "资料",
    rentHistory: "租车历史",
    logout: "登出",
    day: "日",
    luggage: "行李数",
    search: "搜索",
    changeAddress: "修改地址",
    sortBy: "过滤条件",
    byRange: "范围",
    byPriceLow: "价格从低到高",
    byPriceHigh: "价格从高到低",
    byLatest: "从新到旧",
    byBrand: "品牌",
    byPopular: "热门程度",
    carBrand: "汽车品牌",
    carModel: "汽车类型",
    boughtIn: "买入",
    carFeatures: "汽车功能",
    WeLoveToHearFromYou: "我们很高兴聆听您的意见！",
    AnyQueries:
      " 任何查询都会在工作时间内2天得到答复。您也可以尝试通过以下方式与我们联系（每天的工作时间8:00 am-5:00 pm）",
    Company: "公司",
    Address: "地址",
    Phone: "电话",
    Website: "网页",
    Name: "名字",
    Subject: "项目",
    Message: "信息",
    SendMessage: "发送信息",
    FirstName: "名",
    FamilyName: "姓",
    Birth: "出生日期",
    PersonalInformation: "个人信息",
    LicenseInformation: "驾照信息",
    LicenseValidation: "驾照验证",
    Update: "更新资料",
    TermsPolicy: "条款和政策",
    Termsdetails1:
      "http://carshare.uooobarry.com是一家在澳大利亚注册的有限公司（编号：xxxxxx），注册地址为123 Melbourne St，Melbourne，VIC3000。这些条款和条件以及我们的隐私声明和cookie声明， 构成我们与您的协议，提供我们在安排汽车租赁服务方面提供的服务。 为免生疑问，您租用任何汽车均须遵守汽车租赁公司制定的汽车租赁条款和条件以及租赁所在国家和/或州的相应法律。 个别限制也可能适用于您的租车。 我们将直接或作为代理商为您提供汽车。 我们行事的能力取决于我们与租车公司的关系。",
    Termsdetails2:
      "这些条款适用于您在本网站上或通过本网站与我们进行的任何预订，因此，请确保您了解其内容。 我们的条款以及与我们合作的租车公司的条款均包含一些责任排除和限制。",
    Termsdetails3:
      "您在本网站上的预订取决于您接受我们的条款。 如果您不同意其中的任何部分，则不得继续进行预订。 通过确认您希望通过此网站预订汽车，请表明您已阅读并理解并接受我们的条款。 如果您有不完全了解的部分，或者对租车或任何其他产品有疑问，请与我们联系。",
    PrivacyNotice: "隐私声名",
    PrivacyNotice1:
      "本隐私声明说明了我们如何收集，使用和保护有关您的任何信息。 它还告诉您在有任何疑问时如何取得联系，我们非常乐于回答。 如果您对我们如何使用Cookie和类似技术感兴趣，请查看我们的Cookie声明。",
    PrivacyNotice2:
      "我们可能会不时更改本通知； 因此，请返回此处查看是否有任何更新。",
    PrivacyNotice3:
      "我们通过自己的网站提供与在线汽车租赁相关的一系列服务，包括保险等产品和服务。我们也通过业务合作伙伴的网站，社交媒体和其他平台来提供此服务。 本通知适用于我们在执行此操作时或您通过电子邮件，实时聊天，电话或帖子与我们联系时收集的所有个人数据。",
    AgeLimitation: "最小/最大年龄限制",
    AgeLimitation1:
      "在大多数地区，最低租用年龄为21岁。 年龄在25岁以下或65岁以上的驾驶员和某些国家/地区收取额外费用：如果在预订请求中已提交正确的驾驶员年龄，我们将告知您可能的费用。 在某些地方，大型汽车的最低年龄要求也可能更高。 如果对此问题有任何疑问或疑虑，请与我们的联系中心联系。",
    LR: "关于逾期归还车辆",
    LR1:
      "所有逾期账单都需要支付，汽车也必须在同一天归还。根据澳大利亚第24（10）（C）条的规定，在警方参与逮捕之前，每笔逾期租金最多可支付10天。消费者法。",
    LR2: "时间收费",
    LR3: "如果您延迟30分钟归还汽车或钥匙，将收取时间，我们将再收取一天的费用。",
    LR4:
      "例如：您预订了2天的汽车，这意味着您要支付2天的旅行费用。您需要在48小时后归还汽车和钥匙。如果您在49小时后还车，我们将向您收取3天的费用。",
    LR5: "过期罚款",
    LR6: "滞纳金为：",
    LR7: "如果您的延迟归还不影响其他人的旅行，则为20澳元；",
    LR8: "如果您的延迟归还确实影响他人的行程，则为50澳元",
    LPED: "迟提车/提早还车",
    LPED1:
      "根据凭证/ eVoucher中详细说明的接送日期和时间，您的租赁开始和结束。 不幸的是，如果迟到提车或提早还车，我们将无法为未使用的时间提供退款。 如果您无法在约定的时间和日期提车，请务必尽快与我们联系。 如果您不这样做，则不能保证该车仍可使用-您将无权获得任何退款。",
    IWMCOYB: "如果我们更改您的预订",
    IWMCOYB1:
      "有时，我们或租车公司可能有必要对您的预订进行更改（在接受之后）。 在所有这种情况下，我们都会在接送前尽快为您提供建议，如果建议的更改不可接受，我们将全额退款。 但是，在这种情况下，我们对因此类更改而可能遭受的任何直接或间接损失不承担任何额外责任。",
    PDYGU: "您提供给我们的个人资料",
    PDYGU1:
      "我们存储并使用您提供给我们的信息。当您进行预订时，我们至少需要您的姓名，电子邮件地址和付款信息。我们可能还会要求您提供家庭住址，电话号码和出生日期，以及任何其他驾驶员的姓名。",
    PDYGU2:
      "如果您与我们取得联系（例如，通过电话，电子邮件或社交媒体），我们也将从那里收集您的信息。",
    PDYGU3:
      "预订后，我们可能会要求您提供评论以帮助我们改善我们的服务，并帮助确保将来的客户能得到他们想要的东西。",
    PDYGU4:
      "您还可以通过其他方式向我们提供信息。例如，如果您正在使用移动设备浏览，则可以与我们共享您的当前位置，以便我们为您提供最佳服务。为了简化操作，您还可以打开一个用户帐户，该帐户可以查看和管理您的预订，还可以保存您的个人设置以及护照和驾驶执照详细信息。这也使以后的预订变得更容易。",
    PDYGUAO: "您提供给我们的关于他人的个人数据",
    PDYGUAO1:
      "您可以将某人添加为其他驾驶员，也可以代表其他人（例如，朋友，家庭成员或同事）进行预订。 如果这样做，请确保该人知道您向我们提供了他们的详细信息，并且已经接受了我们处理其个人数据的方式（如本通知中所述）。 这是你的责任。",
    PDWCA: "我们自动收集的个人数据",
    PDWCA1:
      "当您进行预订时，我们会记录您使用的平台以及到达平台的方式（例如，如果您来自其他站点）。",
    CYBATP: "确认您的预订并付款",
    CYBATP1:
      "在大多数情况下，我们将使用预订时提供的电子邮件地址立即确认您的预订。有时，我们需要等待租车公司确认有车可用。如果发生这种情况，我们会立即告诉您，并暂时冻结您支付卡上的款项。他们确认您的车后，我们会立即通知您，并从您的卡中扣除款项。",
    CYBATP2:
      "在确认您的汽车之前，您可以随时“避免”付款。只需点击我们网站顶部的“管理预订”，输入在预订和预订时提供的电子邮件地址，然后点击“取消预订”。我们将解锁您卡上的钱。",
    CYBATP3:
      "租车公司很少会确认是否有车可用。如果发生这种情况，我们会告诉您，并取消您卡上的款项。",
    CYBATP4:
      "当您在我们的网站上预订汽车或其他产品时，我们将通过电子邮件向您发送确认消息，以在预订后48小时内（或者，如果提早，则至少在提车时间前24小时）确认您的可用性。然后，我们将向您发送预订确认信。",
    CYBATP5:
      "在我们确认您的预订并付款后，您才会与您签订合同。我们会将所有信件发送至预订时提供的地址。为免生疑问，根据《 1999年合同（第三方权利）法》，这些条款中的任何内容均不赋予任何第三方任何第三方任何权利或权利。",
    AOI: "信息准确性",
    AOI1:
      "尽管我们努力确保本网站上信息的准确性，但是您或我们的关联公司，供应商或代理商均不对此类信息的准确性负责。 您有责任评估本网站上提供的所有信息的准确性，完整性和实用性。",
    AOI2:
      "提取您的租车时，必须将https://carshare.uooobarry.com凭单/ eVoucher出示给租车公司。 如果没有出示代金券/电子代金券，我们将不对被拒绝的租金负责。",
    AOI3: "对于因在租车柜台签名并接受的文件而产生的任何费用，我们概不负责。",
    AOI4:
      "对于在酒精/毒品影响下驾驶，造成故意损坏，越野驾驶或没有适当注意的人，我们将不承担任何责任。 您将对此类索赔承担全部责任。 此列表并不详尽。",
    FAQ: "1.我如何在线预订？",
    FAQ1: "1.我们的主页具有“汽车列表”功能，可简化预订。",
    FAQ2: "2.单击您想要租用的车辆，然后您会看到该车辆的信息和价格。",
    FAQ3:
      "3.单击“结账”按钮，它将带您到登录页面，然后单击“立即登录”。即使您没有我们的帐户，也请单击“免费注册”并编辑您的信息并提交。",
    FAQ4: "4.登录后，您可以选择车辆的开始日期和租期，然后单击“下一步”。",
    FAQ5: "5.您将看到取件地点和退货日期，然后按“确认订单”。",
    FAQ6:
      "6.按下“确认订单”后，您只需要选择付款方式并输入付款信息即可完成订单。",
    FAQ7: "2.我怎么知道我的书得到确认？",
    FAQ8: "1.付款后，网站上会显示收据，其中包括您的",
    FAQ9: "“ 联系信息 ”",
    FAQ10: "“收集信息”",
    FAQ11: "2.确认订单后，您会收到一条注册号消息。",
    FAQ12: "3.或者，您可以在租金历史中检查您的确认。",
    FAQ13: "3.我必须租车几岁？",
    FAQ14: "1.所有房客在开始租房时必须年满21岁。",
    FAQ15:
      "2.任何年龄在21至24岁之间（包括主驾驶员或副驾驶员）的租客每天都将收取年龄附加费，并且可以使用我们的标准车辆范围。此年龄段的驾驶员无法使用Ultimate Protection（UP）。",
    FAQ16: "4.在PBD Car Share中租车时，我的责任是什么？",
    FAQ17:
      "从您领取车辆之时起，您将对车辆的任何损失承担经济责任。这包括不可控制的损坏，包括冰雹。确认订单时，您还应遵守PBD的标准条款和政策。",
    FAQ18: "5.什么是租车超额保险？",
    FAQ19:
      "租车超额保险是包含在价格中的保险，可以保护您免受在租车被损坏或被盗时您需要支付的超额费用。",
    FAQ20: "让我们看看其中包括什么保险：",
    FAQ21: "随附的损害赔偿（碰撞损害豁免）",
    FAQ22:
      "意外发生。即使是出色的驾驶员，也可能在错误的时间将其放置在错误的位置。另外，汽车在停车时可能会损坏。",
    FAQ23:
      "租车时，您会受到租车公司的碰撞损害豁免的保护。如果汽车的车身受到任何损坏，那么您最多要支付的维修费用就是“超额费用”。通常在$ 350 / $ 400和$ 3,000 / $ 3,500之间。碰撞损害豁免将承担其余费用。",
    FAQ24:
      "但是，碰撞损坏豁免仅涵盖汽车的车身，因此，您需要支付汽车窗，轮胎，底盘，发动机，内饰等的全部维修费用。",
    FAQ25: "随附的防盗保护（防盗保护）",
    FAQ26:
      "像任何汽车一样，出租汽车被盗的可能性要比撞车或刮擦的可能性小得多。但是更换整辆汽车比修理凹痕或更换侧板要花费更多。",
    FAQ27:
      "好消息是：您受到保护。如果汽车在您拥有时被盗，或者在有人试图盗窃时被损坏，那么您最多需要支付的超额费用是。超出部分的费用在$ 350 / $ 400和$ 3,000 / $ 3,500之间。租赁公司的防盗保护政策将支付其余费用。",
    FAQ28: "包括其他物品的保险（第三方责任）",
    FAQ29:
      "第三方责任承担任何“第三方”（汽车中没有的任何东西）的维修费用。如果您损坏他人的财产，此政策将予以赔付。该保险费通常包含在租金中。",
    FAQ30:
      "在大多数情况下，您无需支付任何超额费用，但有些租赁公司会向您收取费用。 ",
    loginregister: "登录 / 注册",
  },
};

const i18n = new VueI18n({
  locale: "en", // set locale
  fallbackLocale: ["vn", "cn"], // set fallback locale
  messages, // set locale messages
});

export default i18n;
