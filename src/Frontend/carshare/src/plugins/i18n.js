/*Created at 22/09/2020 Bach Dao Multiple languages
Updated at 22/09/2020 Shuzuan Zhang Add Chinese */
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
    carFeatures: "Car features"
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
    carFeatures: "Chức năng kèm theo"
  },
  cn: {
    carListMsg: "汽车列表结果",
    filter: "过滤条件",
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
    carFeatures: "汽车功能"
  },
};

const i18n = new VueI18n({
  locale: "en", // set locale
  fallbackLocale: ["vn", "cn"], // set fallback locale
  messages, // set locale messages
});

export default i18n;
