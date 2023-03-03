import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const resources = {
  en: {
    // goi la namespace
    translation: {
      "username": "Username",
      "password" :"Password",
      "confirmpassword": "Confirm password",
        "address": "Address",
        "remember" :"Remember me",
        "submit" :"Submit",
        "nextUseForm": "Next to useForm",
        "selectlanguage":"Select language",
    },
  },
  vi: {
    // goi la namespace
    translation: {
      "username": "Tên đăng nhập",
      "password" :"Mật khẩu",
      "confirmpassword": "Nhập lại mật khẩu",
      "address": "Địa chỉ",
      "remember" :"Ghi nhớ",
      "submit":"Gửi thông tin",
      "nextUseForm": "Chuyển đến trang useForm",
      "selectlanguage":"Chọn ngôn ngữ",



    },
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false,
  },
});
