import React, { createContext, useState } from "react";
import axios from "../utils/myAxios";
const HuchContext = React.createContext();
const initialState = {
  startdate:
    new Date().getFullYear() +
    "/" +
    (new Date().getMonth() < 10 ? "0" : "") +
    (new Date().getMonth() + 1) +
    "/" +
    (new Date().getDate() < 10 ? "0" : "") +
    new Date().getDate() +
    " 00:00:00",
  enddate: "2100/01/01 23:23:59",
  specialdate_f:
    new Date().getFullYear() +
    "/" +
    (new Date().getMonth() < 10 ? "0" : "") +
    (new Date().getMonth() + 1) +
    "/" +
    (new Date().getDate() < 10 ? "0" : "") +
    new Date().getDate() +
    " " +
    (new Date().getHours() < 10 ? "0" : "") +
    new Date().getHours() +
    ":" +
    (new Date().getMinutes() < 10 ? "0" : "") +
    new Date().getMinutes() +
    ":" +
    (new Date().getSeconds() < 10 ? "0" : "") +
    new Date().getSeconds(), //main date on header
  huchuuhangaltuu: "huch", //ali tses ve
  bj_angi: ["0243", "0303"], // Баазаас анги, застав дууддага хүсэлтийг дуудаад доорхи стэйтүүдийн утгыг хамгийн түрүүнд өөрчлөөнө.
  bj_zastaw: ["angiintuv", "nomt", "0124", "0125", "0129"], // Баазаас анги, застав дууддага хүсэлтийг дуудаад доорхи стэйтүүдийн утгыг хамгийн түрүүнд өөрчлөөнө.
  bj_spinning: false, //Баазаас дуудах бүрт уншуулна. Баазаас юм ирүүл болиулна
  bj_submenu: "officer", //Бүрэлдэхүүн, машин, мотоцикл гээд хүч хэрэгслийн үндсэн ойлголт дарагдсан эсэхийг шалгана.
  bj_datalist: [], //Баазаас ирж байгаа хүснэгтэн жагаалтыг энд хадгална.
  row_id: null, //  Нэмэх үед null засах үед заавал утгатай байна.
  hun_huviindugaar: null,
  hun_huviindugaar_f: null, //Хайх үед _f төгссөн хувьсагчдыг ашиглана.
  showInsertUpdateModal: false, //Бүх модал нааш нь нээх
  loading: false, //Өгөгдлийн сангаас өгөгдөл шүүх
  rankList: [
    "х/а",
    "д/х",
    "х/ч",
    "а/х",
    "а/д",
    "д/ч",
    "а/а",
    "а/ч",
    "д/а",
    "т/ч",
    "а/б",
    "б/ч",
    "Энгийн",
  ],
  langLevelList: ["Анхан", "Дунд", "Гүнзгий"],
  zonelist: [
    "Төвийн бүс",
    "Уулын бүс",
    "Говь цөлийн бүс",
    "Тал хээрийн бүс",
    "Ой тайгын бүс",
  ],
  seasonlist: ["Дулааны", "Хүйтний"],
  firelist: [
    "7.62 мм ПС",
    "7.62мм холост",
    "26 мм пуужин",
    "9 мм сум",
    "40 мм пуужин",
    "30 мм пуужин",
  ],
  personTolovList: ["Үндсэн", "Хүч нэмэгдүүлсэн"],
  weaponType: ["АКМ", "ПМ", "СВД", "АПС", "Үхэлд үл хүргэх", "АКМС", "РПК"],
  statusType: ["Тийм", "Үгүй"],

  //Listuud hadgalna, husnegted haruulah
  listall: [],
  listofficer: [],
  listahlagch: [],
  listgereet: [],
  listhugatsaat: [],
  listengiin: [],
  listhhthg: [],
  listcar: [],
  listmoto: [],
  listtemee: [],
  listaduu: [],
  listnohoi: [],
  listduran: [],
  listshunuduran: [],
  listdohio: [],
  listradio: [],
  listrlc: [],
  liststpc: [],
  listcamera: [],
  listhuvtsas: [],
  listhuns: [],
  listzewseg: [],
  listgalt: [],
  listhimi: [],
  listdagaldah: [],
  listhuduu: [],
  listbarilga: [],
  listshatahuun: [],
  listtelecam: [],
  // формын өгөгдөл орж ирэх талбарууд, засах
  id: null,
  borderpointid: sessionStorage.getItem("bpn"),
  borderpointname: sessionStorage.getItem("bpn"),
  borderoutpointid: sessionStorage.getItem("bop"),
  borderoutpointname: sessionStorage.getItem("bop"),
  bj_submenu: "officer",
  person_type: null,
  person_no: null,
  person_tolov: null,
  person_lastname: null,
  person_firstname: null,
  person_ethnicity: null,
  person_rank: null,
  person_position: null,
  person_birthdate: null,
  person_datetoborderpoint: null,
  person_datetoborderoutpoint: null,
  person_major: null,
  person_englishlevel: null,
  person_russianlevel: null,
  person_dateoutborderoutpoint: null,
  person_register: null,
  person_civilid: null,
  car_mark: null,
  car_no: null,
  car_aralno: null,
  car_color: null,
  car_madeyear: null,
  car_gaztype: null,
  car_gazspent: null,
  car_certno: null,
  car_type: null,
  moto_mark: null,
  moto_no: null,
  moto_aralno: null,
  moto_color: null,
  mote_madeyear: null,
  mot_gasspent: null,
  moto_certno: null,
  moto_type: null,
  horse_no: null,
  horse_zusem: null,
  horse_usingborder: null,
  horse_type: null,
  camel_no: null,
  camel_color: null,
  camel_usingborder: null,
  cameltype: null,
  tech_name: null,
  tech_mark: null,
  tech_country: null,
  tech_serial: null,
  tech_chanar: null,
  tech_comment: null,
  tech_type: null,
  clothe_zonetype: null,
  clothe_seasontype: null,
  clothe_clothename: null,
  clothe_clothenum: null,
  clothe_norm: null,
  clothe_chanar: null,
  clothe_type: null,
  food_name: null,
  food_orluulah: null,
  food_norm: null,
  food_negj: null,
  food_hemjee: null,
  food_tailbar: null,
  food_type: null,
  gun_type: null,
  gun_cdtdate: null,
  gun_symbol: null,
  gun_num: null,
  gun_goltomor: null,
  gun_zamagno: null,
  gun_zamgiinram: null,
  gun_total: null,
  gun_comment: null,
  gun_zewsegtype: null,
  fire_type: null,
  fire_num: null,
  fire_zoriulalt: null,
  fire_comment: null,
  fire_toolstype: null,
  chemic_torol: null,
  chemic_num: null,
  chemic_zoriulalt: null,
  chemic_comment: null,
  chemic_type: null,
  follow_type: null,
  follow_name: null,
  follow_num: null,
  follow_comment: null,
  follow_toolstype: null,
  gas_size: null,
  gas_spent: null,
  gas_comment: null,
  gas_total: null,
  gas_noots: null,
  gas_nootsspent: null,
  gas_nootscomment: null,
  gas_nootstotal: null,
  gas_type: null,
  person_tolov: null,
  person_education: null,
  raison: null,

  //  HAILTAD ASHIGLANA
  borderpointid: sessionStorage.getItem("bpn"),
  borderpointname: sessionStorage.getItem("bpn"),
  borderoutpointid: sessionStorage.getItem("bop"),
  borderoutpointname: sessionStorage.getItem("bop"),
  bj_submenu_f: null,
  startdate_f: null,
  enddate_f: null,
  person_type_f: null,
  person_no_f: null,
  person_tolov: null,
  person_lastname_f: null,
  person_firstname_f: null,
  person_ethnicity_f: null,
  person_rank_f: null,
  person_position_f: null,
  person_birthdate_f: null,
  person_datetoborderpoint_f: null,
  person_datetoborderoutpoint_f: null,
  person_major_f: null,
  person_englishlevel_f: null,
  person_russianlevel_f: null,
  person_dateoutborderoutpoint_f: null,
  person_register_f: null,
  person_civilid_f: null,
  car_mark_f: null,
  car_no_f: null,
  car_aralno_f: null,
  car_color_f: null,
  car_madeyear_f: null,
  car_gaztype_f: null,
  car_gazspent_f: null,
  car_certno_f: null,
  car_type_f: null,
  moto_mark_f: null,
  moto_no_f: null,
  moto_aralno_f: null,
  moto_color_f: null,
  mote_madeyear_f: null,
  mot_gasspent_f: null,
  moto_certno_f: null,
  moto_type_f: null,
  horse_no_f: null,
  horse_zusem_f: null,
  horse_usingborder_f: null,
  horse_type_f: null,
  camel_no_f: null,
  camel_color_f: null,
  camel_usingborder_f: null,
  cameltype_f: null,
  tech_name_f: null,
  tech_mark_f: null,
  tech_country_f: null,
  tech_serial_f: null,
  tech_chanar_f: null,
  tech_comment_f: null,
  tech_type_f: null,
  clothe_zonetype_f: null,
  clothe_seasontype_f: null,
  clothe_clothename_f: null,
  clothe_clothenum_f: null,
  clothe_norm_f: null,
  clothe_chanar_f: null,
  clothe_type_f: null,
  food_name_f: null,
  food_orluulah_f: null,
  food_norm_f: null,
  food_negj_f: null,
  food_hemjee_f: null,
  food_tailbar_f: null,
  food_type_f: null,
  gun_type_f: null,
  gun_cdtdate_f: null,
  gun_symbol_f: null,
  gun_num_f: null,
  gun_goltomor_f: null,
  gun_zamagno_f: null,
  gun_zamgiinram_f: null,
  gun_total_f: null,
  gun_comment_f: null,
  gun_zewsegtype_f: null,
  fire_type_f: null,
  fire_num_f: null,
  fire_zoriulalt_f: null,
  fire_comment_f: null,
  fire_toolstype_f: null,
  chemic_torol_f: null,
  chemic_num_f: null,
  chemic_zoriulalt_f: null,
  chemic_comment_f: null,
  chemic_type_f: null,
  follow_type_f: null,
  follow_name_f: null,
  follow_num_f: null,
  follow_comment_f: null,
  follow_toolstype_f: null,
  gas_size_f: null,
  gas_spent_f: null,
  gas_comment_f: null,
  gas_total_f: null,
  gas_noots_f: null,
  gas_nootsspent_f: null,
  gas_nootscomment_f: null,
  gas_nootstotal_f: null,
  gas_type_f: null,
  created_at_f: null,
  created_userid_f: null,
  created_username_f: null,
  updated_at_f: null,
  updated_userid_f: null,
  updated_username_f: null,
  deleted_f: null,
  deleted_at_f: null,
  deleted_userid_f: null,
  deleted_username_f: null,
  status_f: null,
  barilga_angilal_f: null,
  barilga_name_f: null,
  barilga_ctddate_f: null,
  barilga_nasjilt_f: null,
  barilga_size_f: null,
  barilga_comment_f: null,
  barilga_type_f: null,
  person_tolov_f: null,
  person_education_f: null,
  raison_f: null,
  //END HAILTAD ASHIGLANA
};

export const HuchContextStore = (props) => {
  const [state, setState] = useState(initialState);
  // Хүссэн стэйтийн утгыг өөрчлөнө
  const changeStateValue = (name, value) => {
    setState((state) => ({ ...state, [name]: value }));
  };
  // console.log(state.listhugatsaat,'state')
  const loadDataChangeDate = () => {
    const messageCode = 690000;
    const token = JSON.parse(sessionStorage.getItem("token"))?.token;
    const configload = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        request_code: messageCode,
      },
    };
    //minute nemeh
    var odootsag = new Date(),
      d2 = new Date(odootsag);
    d2.setMinutes(odootsag.getMinutes() + 5);

    const data = {
      token,
      specialdate_f: state.specialdate_f,
    };
    setState((state) => ({
      ...state,
      loading: true,
    }));
    axios
      .post("/public/request", data, configload)
      .then((response) => {
        if (response.data.code === 401) {
          return;
        }

        setState((state) => ({
          ...state,
          listall:
            response.data.result.list != null ? response.data.result?.list : [],
          listofficer:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "officer"
                )
              : [],
          listahlagch:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "ahlagch"
                )
              : [],
          listgereet:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "gereet"
                )
              : [],
          listhugatsaat:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "hugatsaat"
                )
              : [],
          listengiin:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "engiin"
                )
              : [],
          listhhthg:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "hhthg"
                )
              : [],
          listcar:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "car"
                )
              : [],
          listmoto:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "moto"
                )
              : [],
          listtemee:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "temee"
                )
              : [],
          listaduu:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "aduu"
                )
              : [],
          listnohoi:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "nohoi"
                )
              : [],
          listduran:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "duran"
                )
              : [],
          listshunuduran:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "shunuduran"
                )
              : [],
          listdohio:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "dohio"
                )
              : [],
          listradio:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "radio"
                )
              : [],
          listrlc:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "rlc"
                )
              : [],
          liststpc:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "tpc"
                )
              : [],
          listcamera:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "camera"
                )
              : [],
          listhuvtsas:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "huvtsas"
                )
              : [],
          listhuns:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "huns"
                )
              : [],
          listzewseg:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "zewseg"
                )
              : [],

          listgalt:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "galt"
                )
              : [],
          listhimi:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "himi"
                )
              : [],
          listdagaldah:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "dagaldah"
                )
              : [],
          listhuduu:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "huduu"
                )
              : [],
          listbarilga:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "barilga"
                )
              : [],
          listshatahuun:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "shatahuun"
                )
              : [],
        }));
      })
      .catch((error) => {
        changeStateValue("loadingData", false);
      });
  };
  const loadDataAll = () => {
    console.log("LOAD ALL DATA");
    const messageCode = 690000;
    const token = JSON.parse(sessionStorage.getItem("token"))?.token;
    const configload = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        request_code: messageCode,
      },
    };
    //minute nemeh
    // var d1 = new Date(),
    //  d2 = new Date(d1);
    //d2.setMinutes(d1.getMinutes() + 30);

    let d1 = new Date();
    const milliseconds = 6000 * 1000; // 10 seconds = 10000 milliseconds
    let d2 = new Date(d1.getTime() + milliseconds);

    const data1 = {
      tets: "test",
      token,
      specialdate_f:
        d2.getFullYear() +
        "/" +
        (d2.getMonth() < 10 ? "0" : "") +
        (d2.getMonth() + 1) +
        "/" +
        (d2.getDate() < 10 ? "0" : "") +
        d2.getDate() +
        " " +
        (d2.getHours() < 10 ? "0" : "") +
        d2.getHours() +
        ":" +
        (d2.getMinutes() < 10 ? "0" : "") +
        d2.getMinutes() +
        ":" +
        (d2.getSeconds() < 10 ? "0" : "") +
        d2.getSeconds(),
    };
    setState((state) => ({
      ...state,
      loading: true,
    }));
    axios
      .post("/public/request", data1, configload)
      .then((response) => {
        if (response.data.code === 401) {
          return;
        }

        setState((state) => ({
          ...state,
          listall:
            response.data.result.list != null ? response.data.result?.list : [],
          listofficer:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "officer"
                )
              : [],
          listahlagch:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "ahlagch"
                )
              : [],
          listgereet:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "gereet"
                )
              : [],
          listhugatsaat:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "hugatsaat"
                )
              : [],
          listengiin:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "engiin"
                )
              : [],
          listhhthg:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "hhthg"
                )
              : [],
          listcar:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "car"
                )
              : [],
          listmoto:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "moto"
                )
              : [],
          listtemee:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "temee"
                )
              : [],
          listaduu:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "aduu"
                )
              : [],
          listnohoi:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "nohoi"
                )
              : [],
          listduran:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "duran"
                )
              : [],
          listshunuduran:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "shunuduran"
                )
              : [],
          listdohio:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "dohio"
                )
              : [],
          listradio:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "radio"
                )
              : [],
          listrlc:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "rlc"
                )
              : [],
          liststpc:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "tpc"
                )
              : [],
          listcamera:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "camera"
                )
              : [],
          listhuvtsas:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "huvtsas"
                )
              : [],
          listhuns:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "huns"
                )
              : [],
          listzewseg:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "zewseg"
                )
              : [],
          listgalt:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "galt"
                )
              : [],
          listhimi:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "himi"
                )
              : [],
          listdagaldah:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "dagaldah"
                )
              : [],
          listhuduu:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "huduu"
                )
              : [],
          listbarilga:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "barilga"
                )
              : [],
          listshatahuun:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "shatahuun"
                )
              : [],
        }));
      })
      .catch((error) => {
        changeStateValue("loadingData", false);
      });
  };

  const filterData = () => {
    const messageCode = 690000;
    const token = JSON.parse(sessionStorage.getItem("token"))?.token;
    let data = {
      token,
      bj_submenu: state?.bj_submenu,
    };

    const configload = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        request_code: messageCode,
      },
    };
    if (
      state?.bj_submenu === "officer" ||
      state?.bj_submenu === "ahlagch" ||
      state?.bj_submenu === "gereet" ||
      state?.bj_submenu === "hugatsaat" ||
      state?.bj_submenu === "engiin" ||
      state?.bj_submenu === "hhthg"
    ) {
      Object.keys(state).map((item, i) => {
        if (item.endsWith("_f") && item.startsWith("person_")) {
          data[item] = state[item];
        }
      });
    }
    if (state?.bj_submenu === "car") {
      Object.keys(state).map((item, i) => {
        if (item.endsWith("_f") && item.startsWith("car_")) {
          data[item] = state[item];
        }
      });
    }
    if (state?.bj_submenu === "moto") {
      Object.keys(state).map((item, i) => {
        if (item.endsWith("_f") && item.startsWith("moto_")) {
          data[item] = state[item];
        }
      });
    }
    if (state?.bj_submenu === "temee") {
      Object.keys(state).map((item, i) => {
        if (item.endsWith("_f") && item.startsWith("temee_")) {
          data[item] = state[item];
        }
      });
    }
    if (state?.bj_submenu === "aduu") {
      Object.keys(state).map((item, i) => {
        if (item.endsWith("_f") && item.startsWith("horse_")) {
          data[item] = state[item];
        }
      });
    }
    if (state?.bj_submenu === "nohoi") {
      Object.keys(state).map((item, i) => {
        if (item.endsWith("_f") && item.startsWith("nohoi_")) {
          data[item] = state[item];
        }
      });
    }
    if (state?.bj_submenu === "duran") {
      Object.keys(state).map((item, i) => {
        if (item.endsWith("_f") && item.startsWith("duran_")) {
          data[item] = state[item];
        }
      });
    }
    if (state?.bj_submenu === "shunuduran") {
      Object.keys(state).map((item, i) => {
        if (item.endsWith("_f") && item.startsWith("shunuduran_")) {
          data[item] = state[item];
        }
      });
    }
    if (state?.bj_submenu === "dohio") {
      Object.keys(state).map((item, i) => {
        if (item.endsWith("_f") && item.startsWith("dohio_")) {
          data[item] = state[item];
        }
      });
    }
    if (state?.bj_submenu === "radio") {
      Object.keys(state).map((item, i) => {
        if (item.endsWith("_f") && item.startsWith("radio_")) {
          data[item] = state[item];
        }
      });
    }
    if (state?.bj_submenu === "rlc") {
      Object.keys(state).map((item, i) => {
        if (item.endsWith("_f") && item.startsWith("rlc_")) {
          data[item] = state[item];
        }
      });
    }
    if (state?.bj_submenu === "tpc") {
      Object.keys(state).map((item, i) => {
        if (item.endsWith("_f") && item.startsWith("tpc_")) {
          data[item] = state[item];
        }
      });
    }
    if (state?.bj_submenu === "camera") {
      Object.keys(state).map((item, i) => {
        if (item.endsWith("_f") && item.startsWith("camera_")) {
          data[item] = state[item];
        }
      });
    }
    if (state?.bj_submenu === "huvtsas") {
      Object.keys(state).map((item, i) => {
        if (item.endsWith("_f") && item.startsWith("clothe_")) {
          data[item] = state[item];
        }
      });
    }
    if (state?.bj_submenu === "huns") {
      Object.keys(state).map((item, i) => {
        if (item.endsWith("_f") && item.startsWith("food_")) {
          data[item] = state[item];
        }
      });
    }
    if (state?.bj_submenu === "zewseg") {
      Object.keys(state).map((item, i) => {
        if (item.endsWith("_f") && item.startsWith("zewseg_")) {
          data[item] = state[item];
        }
      });
    }
    if (state?.bj_submenu === "galt") {
      Object.keys(state).map((item, i) => {
        if (item.endsWith("_f") && item.startsWith("fire_")) {
          data[item] = state[item];
        }
      });
    }
    if (state?.bj_submenu === "himi") {
      Object.keys(state).map((item, i) => {
        if (item.endsWith("_f") && item.startsWith("chemic_")) {
          data[item] = state[item];
        }
      });
    }
    if (state?.bj_submenu === "dagaldah") {
      Object.keys(state).map((item, i) => {
        if (item.endsWith("_f") && item.startsWith("follow_")) {
          data[item] = state[item];
        }
      });
    }
    if (state?.bj_submenu === "huduu") {
      Object.keys(state).map((item, i) => {
        if (item.endsWith("_f") && item.startsWith("huduu_")) {
          data[item] = state[item];
        }
      });
    }
    if (state?.bj_submenu === "barilga") {
      Object.keys(state).map((item, i) => {
        if (item.endsWith("_f") && item.startsWith("barilga_")) {
          data[item] = state[item];
        }
      });
    }
    if (state?.bj_submenu === "shatahuun") {
      Object.keys(state).map((item, i) => {
        if (item.endsWith("_f") && item.startsWith("gas_")) {
          data[item] = state[item];
        }
      });
    }

    console.log(data);
    setState((state) => ({
      ...state,
      loading: true,
    }));
    axios
      .post("/public/request", data, configload)
      .then((response) => {
        if (response.data.code === 401) {
          sessionStorage.clear();
          window.location.reload(false);
          return;
        }

        setState((state) => ({
          ...state,
          listall:
            response.data.result.list != null ? response.data.result?.list : [],
          listofficer:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "officer"
                )
              : [],
          listahlagch:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "ahlagch"
                )
              : [],
          listgereet:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "gereet"
                )
              : [],
          listhugatsaat:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "hugatsaat"
                )
              : [],
          listengiin:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "engiin"
                )
              : [],
          listhhthg:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "hhthg"
                )
              : [],
          listcar:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "car"
                )
              : [],
          listmoto:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "moto"
                )
              : [],
          listtemee:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "temee"
                )
              : [],
          listaduu:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "aduu"
                )
              : [],
          listnohoi:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "nohoi"
                )
              : [],
          listduran:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "duran"
                )
              : [],
          listshunuduran:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "shunuduran"
                )
              : [],
          listdohio:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "dohio"
                )
              : [],
          listradio:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "radio"
                )
              : [],
          listrlc:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "rlc"
                )
              : [],
          liststpc:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "tpc"
                )
              : [],
          listcamera:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "camera"
                )
              : [],
          listhuvtsas:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "huvtsas"
                )
              : [],
          listhuns:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "huns"
                )
              : [],
          listzewseg:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "zewseg"
                )
              : [],
          listgalt:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "galt"
                )
              : [],
          listhimi:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "himi"
                )
              : [],
          listdagaldah:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "dagaldah"
                )
              : [],
          listhuduu:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "huduu"
                )
              : [],
          listbarilga:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "barilga"
                )
              : [],
          listshatahuun:
            response.data.result.list != null
              ? response.data.result?.list?.filter(
                  (el) => el.bj_submenu === "shatahuun"
                )
              : [],
        }));
      })
      .catch((error) => {
        changeStateValue("loadingData", false);
      });
  };

  const clearFormData = () => {
    // Бүх  утгуудыг цэвэрлэнэ
    changeStateValue("id", null);
    changeStateValue("personno", null);
  };

  const clearFilter = () => {
    // Бүх шүүлтийн утгуудыг цэвэрлэнэ
    Object.keys(state).map((item, i) => {
      if (item.endsWith("_f")) {
        changeStateValue(item, null);
      }
    });
    loadDataAll();
  };
  // ustgah
  const deleteData = (id1) => {
    const token = JSON.parse(sessionStorage.getItem("token"))?.token;
    const messagecode = 690003;
    const configload = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        request_code: messagecode,
      },
    };
    const data = {
      token,
      id: id1,
    };
    setState((state) => ({
      ...state,
      loadingData: true,
    }));
    axios
      .post("/public/request", data, configload)
      .then((response) => {
        if (response.data.code === 401) {
          sessionStorage.clear();
          window.location.reload(false);

          return;
        }
        if (response.data.code === 200) {
          loadDataAll();
        }
        changeStateValue("loading", false);
      })
      .catch((error) => {
        changeStateValue("loading", false);
      });
  };
  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  // Бүх форм хадгалах засах
  const saveInsertUpdateModal = () => {
    const messageCode = 690001;
    const token = JSON.parse(sessionStorage.getItem("token"))?.token;
    // Энд талбаруудыг бөглүүлэх шалгалт
    // if (stateFire.fire_number === null) {
    //   message.error("Талбаруудыг гүйцэт бөглөнө үү");
    //   return;
    // }

    changeStateValue("loading", true);
    changeStateValue("error", false);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        request_code: messageCode,
      },
    };
    const data = {
      token,
      ...state,
    };
    axios
      .post("/public/request", data, config)
      .then((response) => {
        if (response.data.code === 401) {
          sessionStorage.clear();
          window.location.reload(false);
          return;
        }
        if (response.data.code === 400) {
          return;
        }
        changeStateValue("loading", false);
        let d1 = new Date();
        const milliseconds = 600 * 1000; // 10 seconds = 10000 milliseconds
        let d2 = new Date(d1.getTime() + milliseconds);

        console.log("ENDDDD");
        changeStateValue(
          "specialdate_f",
          d2.getFullYear() +
            "/" +
            (d2.getMonth() < 10 ? "0" : "") +
            (d2.getMonth() + 1) +
            "/" +
            (d2.getDate() < 10 ? "0" : "") +
            d2.getDate() +
            " " +
            d2.getHours() +
            ":" +
            d2.getMinutes() +
            ":" +
            d2.getSeconds()
        );

        // loadDataAll();
        console.log(response.data);
      })
      .catch((error) => {
        changeStateValue("loading", false);
        console.log(error);
      });
  };
  const clearFormDatanuud = () => {
    console.log("Clear from datanuud 123");
    // bj_submenu: null,
    setState((state) => ({
      ...state,
      showInsertUpdateModal: true,
      id: null,
      // borderpointid: null,
      // borderpointname: null,
      // borderoutpointid: null,
      // borderoutpointname: null,

      person_type: null,
      person_no: null,
      person_lastname: null,
      person_firstname: null,
      person_ethnicity: null,
      person_rank: null,
      person_position: null,
      person_birthdate: null,
      person_datetoborderpoint: null,
      person_datetoborderoutpoint: null,
      person_major: null,
      person_englishlevel: null,
      person_russianlevel: null,
      person_dateoutborderoutpoint: null,
      person_register: null,
      person_civilid: null,
      car_mark: null,
      car_no: null,
      car_aralno: null,
      car_color: null,
      car_madeyear: null,
      car_gaztype: null,
      car_gazspent: null,
      car_certno: null,
      car_type: null,
      moto_mark: null,
      moto_no: null,
      moto_aralno: null,
      moto_color: null,
      mote_madeyear: null,
      mot_gasspent: null,
      moto_certno: null,
      moto_type: null,
      horse_no: null,
      horse_zusem: null,
      horse_usingborder: null,
      horse_type: null,
      camel_no: null,
      camel_color: null,
      camel_usingborder: null,
      cameltype: null,
      tech_name: null,
      tech_mark: null,
      tech_country: null,
      tech_serial: null,
      tech_chanar: null,
      tech_comment: null,
      tech_type: null,
      clothe_zonetype: null,
      clothe_seasontype: null,
      clothe_clothename: null,
      clothe_clothenum: null,
      clothe_norm: null,
      clothe_chanar: null,
      clothe_type: null,
      food_name: null,
      food_orluulah: null,
      food_norm: null,
      food_negj: null,
      food_hemjee: null,
      food_tailbar: null,
      food_type: null,
      gun_type: null,
      gun_cdtdate: null,
      gun_symbol: null,
      gun_num: null,
      gun_goltomor: null,
      gun_zamagno: null,
      gun_zamgiinram: null,
      gun_total: null,
      gun_comment: null,
      gun_zewsegtype: null,
      fire_type: null,
      fire_num: null,
      fire_zoriulalt: null,
      fire_comment: null,
      fire_toolstype: null,
      chemic_torol: null,
      chemic_num: null,
      chemic_zoriulalt: null,
      chemic_comment: null,
      chemic_type: null,
      follow_type: null,
      follow_name: null,
      follow_num: null,
      follow_comment: null,
      follow_toolstype: null,
      gas_size: null,
      gas_spent: null,
      gas_comment: null,
      gas_total: null,
      gas_noots: null,
      gas_nootsspent: null,
      gas_nootscomment: null,
      gas_nootstotal: null,
      gas_type: null,
      created_at: null,
      created_userid: null,
      created_username: null,
      updated_at: null,
      updated_userid: null,
      updated_username: null,
      deleted: null,
      deleted_at: null,
      deleted_userid: null,
      deleted_username: null,
      status: null,
      barilga_angilal: null,
      barilga_name: null,
      barilga_ctddate: null,
      barilga_nasjilt: null,
      barilga_size: null,
      barilga_comment: null,
      barilga_type: null,
      mal_ner: null,
      mal_too: null,
      ehmal_ner: null,
      ehmal_too: null,
      tolmal_ner: null,
      tolmal_too: null,
      mal_type: null,
      person_tolov: null,
      person_education: null,
      raison: null,
    }));
  };

  const showEditModal = (row) => {
    setState((state) => ({
      ...state,
      showInsertUpdateModal: true,
      id: row.id,
      borderpointid: row.borderpointid,
      borderpointname: row.borderpointname,
      borderoutpointid: row.borderoutpointid,
      borderoutpointname: row.borderoutpointname,
      bj_submenu: row.bj_submenu,
      startdate: row.startdate,
      enddate: row.enddate,
      person_type: row.person_type,
      person_no: row.person_no,
      person_lastname: row.person_lastname,
      person_firstname: row.person_firstname,
      person_ethnicity: row.person_ethnicity,
      person_rank: row.person_rank,
      person_position: row.person_position,
      person_birthdate: row.person_birthdate,
      person_datetoborderpoint: row.person_datetoborderpoint,
      person_datetoborderoutpoint: row.person_datetoborderoutpoint,
      person_major: row.person_major,
      person_englishlevel: row.person_englishlevel,
      person_russianlevel: row.person_russianlevel,
      person_dateoutborderoutpoint: row.person_dateoutborderoutpoint,
      person_register: row.person_register,
      person_civilid: row.person_civilid,
      car_mark: row.car_mark,
      car_no: row.car_no,
      car_aralno: row.car_aralno,
      car_color: row.car_color,
      car_madeyear: row.car_madeyear,
      car_gaztype: row.car_gaztype,
      car_gazspent: row.car_gazspent,
      car_certno: row.car_certno,
      car_type: row.car_type,
      moto_mark: row.moto_mark,
      moto_no: row.moto_no,
      moto_aralno: row.moto_aralno,
      moto_color: row.moto_color,
      mote_madeyear: row.mote_madeyear,
      mot_gasspent: row.mot_gasspent,
      moto_certno: row.moto_certno,
      moto_type: row.moto_type,
      horse_no: row.horse_no,
      horse_zusem: row.horse_zusem,
      horse_usingborder: row.horse_usingborder,
      horse_type: row.horse_type,
      camel_no: row.camel_no,
      camel_color: row.camel_color,
      camel_usingborder: row.camel_usingborder,
      cameltype: row.cameltype,
      tech_name: row.tech_name,
      tech_mark: row.tech_mark,
      tech_country: row.tech_country,
      tech_serial: row.tech_serial,
      tech_chanar: row.tech_chanar,
      tech_comment: row.tech_comment,
      tech_type: row.tech_type,
      clothe_zonetype: row.clothe_zonetype,
      clothe_seasontype: row.clothe_seasontype,
      clothe_clothename: row.cloteh_clothename,
      clothe_clothenum: row.clothe_clothenum,
      clothe_norm: row.clothe_norm,
      clothe_chanar: row.clothe_chanar,
      clothe_type: row.clothe_type,
      food_name: row.food_name,
      food_orluulah: row.food_orluulah,
      food_norm: row.food_norm,
      food_negj: row.food_negj,
      food_hemjee: row.food_hemjee,
      food_tailbar: row.food_tailbar,
      food_type: row.food_type,
      gun_type: row.gun_type,
      gun_cdtdate: row.gun_cdtdate,
      gun_symbol: row.gun_symbol,
      gun_num: row.gun_num,
      gun_goltomor: row.gun_goltomor,
      gun_zamagno: row.gun_zamagno,
      gun_zamgiinram: row.gun_zamgiinram,
      gun_total: row.gun_total,
      gun_comment: row.gun_comment,
      gun_zewsegtype: row.gun_zewsegtype,
      fire_type: row.fire_type,
      fire_num: row.fire_num,
      fire_zoriulalt: row.fire_zoriulalt,
      fire_comment: row.fire_comment,
      fire_toolstype: row.fire_toolstype,
      chemic_torol: row.chemic_torol,
      chemic_num: row.chemic_num,
      chemic_zoriulalt: row.chemic_zoriulalt,
      chemic_comment: row.chemic_comment,
      chemic_type: row.chemic_type,
      follow_type: row.follow_type,
      follow_name: row.follow_name,
      follow_num: row.follow_num,
      follow_comment: row.follow_comment,
      follow_toolstype: row.follow_toolstype,
      gas_size: row.gas_size,
      gas_spent: row.gas_spent,
      gas_comment: row.gas_comment,
      gas_total: row.gas_total,
      gas_noots: row.gas_noots,
      gas_nootsspent: row.gas_nootsspent,
      gas_nootscomment: row.gas_nootscomment,
      gas_nootstotal: row.gas_nootstotal,
      gas_type: row.gas_type,
      created_at: row.created_at,
      created_userid: row.created_userid,
      created_username: row.created_username,
      updated_at: row.updated_at,
      updated_userid: row.updated_userid,
      updated_username: row.updated_username,
      deleted: row.deleted,
      deleted_at: row.deleted_at,
      deleted_userid: row.deleted_userid,
      deleted_username: row.deleted_username,
      status: row.status,
      barilga_angilal: row.barilga_angilal,
      barilga_name: row.barilga_name,
      barilga_ctddate: row.barilga_ctddate,
      barilga_nasjilt: row.barilga_nasjilt,
      barilga_size: row.barilga_size,
      barilga_comment: row.barilga_comment,
      barilga_type: row.barilga_type,
      mal_ner: row.mal_ner,
      mal_too: row.mal_too,
      ehmal_ner: row.ehmal_ner,
      ehmal_too: row.ehmal_too,
      tolmal_ner: row.tolmal_ner,
      tolmal_too: row.tolmal_too,
      mal_type: row.mal_type,
      person_tolov: row.person_tolov,
      person_education: row.person_education,
      raison: row.raison,
    }));
  };

  const exportExcel = () => {};
  return (
    <HuchContext.Provider
      value={{
        state,
        changeStateValue,
        saveInsertUpdateModal,
        filterData,
        clearFilter,
        loadDataAll,
        deleteData,
        showEditModal,
        clearFormDatanuud,
        clearFormData,
        loadDataChangeDate,
      }}
    >
      {props.children}
    </HuchContext.Provider>
  );
};

export default HuchContext;
