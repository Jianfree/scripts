var body = $response.body;
var obj = JSON.parse(body);

obj.vip_info = [{
    "expire_date": "20290609",
    "autodeduct": "0",
    "is_vip": "1",
    "is_year": "1",
    "pay_id": "0",
    "pay_name": "---",
    "register": "0",
    "vasid": "2",
    "vas_type": "5",
    "vip_day_grow": "20",
    "vip_grow": "840",
    "vip_level": "7",
    "vip_icon": {
        "general": "https://xluser-ssl.xunlei.com/v1/file/icon/level/vip/deactivate_a/vip_level1_deactivate.png",
        "small": "https://xluser-ssl.xunlei.com/v1/file/icon/level/vip/deactivate_b/vip_lever1_deactivate.png"
      }
  }]
console.log("xunlei response", JSON.stringify(obj))
body = JSON.stringify(obj);
$done({body});

