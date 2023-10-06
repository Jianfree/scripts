var body = $response.body;
var obj = JSON.parse(body);

obj.vip_info = [{   
    "register": "19700101",
    "autodeduct": "0",
    "daily": "100",
    "expire": "20240101",
    "grow": "1",
    "is_vip": "1",
    "last_pay": "20230101",
    "level": "7",
    "pay_id": "0",
    "remind": "0",
    "is_year": "1",
    "user_vas": "2",
    "vas_type": "0",
    "vip_icon": {
      "general": "https://xluser-ssl.xunlei.com/v1/file/icon/level/vip/deactivate_a/vip_level7_deactivate.png",
      "small": "https://xluser-ssl.xunlei.com/v1/file/icon/level/vip/deactivate_b/vip_lever7_deactivate.png"
    }
  }
]
console.log("xunlei response", JSON.stringify(obj))
body = JSON.stringify(obj);
$done({body});

